// Initialize EmailJS
(function() {
    let isInitialized = false;
    
    function initializeEmailJS() {
        // Prevent multiple initializations
        if (isInitialized) {
            return;
        }
        
        console.log('Attempting to initialize EmailJS...');
        
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS not loaded');
            return;
        }

        emailjs.init("frKAn4WM_vviY0Feo");
        console.log('EmailJS initialized');

        // Debug: Log all form elements
        console.log('Checking form elements...');
        const contactForm = document.getElementById('contactForm');
        console.log('Contact form element:', contactForm);
        
        if (!contactForm) {
            console.error('Contact form not found');
            return;
        }

        // Debug: Log all input elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        console.log('Form inputs:', {
            name: nameInput,
            email: emailInput,
            message: messageInput
        });

        if (!nameInput || !emailInput || !messageInput) {
            console.error('Form elements not found');
            return;
        }

        // Add submit event listener
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');

            // Debug: Log form values
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            console.log('Form values:', {
                name: name,
                email: email,
                message: message
            });

            // Basic validation
            if (!name || !email || !message) {
                console.error('Missing form values');
                alert('Please fill in all fields');
                return;
            }

            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                console.error('Invalid email format');
                alert('Please enter a valid email address');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (!submitButton) {
                console.error('Submit button not found');
                return;
            }

            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Get current time
            const now = new Date();
            const time = now.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });

            // Prepare template parameters
            const templateParams = {
                name: name,
                title: "Message from Portfolio",
                time: time,
                message: message,
                email: email
            };

            console.log('Sending email with parameters:', templateParams);

            // Send email using EmailJS
            emailjs.send("service_ab8ie2s", "template_kx6z5md", templateParams)
                .then(function(response) {
                    console.log('Email sent successfully:', response);
                    if (response.status === 200) {
                        // Show success message
                        const formContainer = contactForm.parentElement;
                        if (!formContainer) {
                            console.error('Form container not found');
                            return;
                        }

                        const successMessage = document.createElement('div');
                        successMessage.className = 'success-message';
                        successMessage.innerHTML = `
                            <h3>Thank you for your message!</h3>
                            <p>I'll get back to you as soon as possible.</p>`;
                        formContainer.innerHTML = '';
                        formContainer.appendChild(successMessage);

                        // Clear the form
                        contactForm.reset();
                    }
                })
                .catch(function(error) {
                    console.error('Error sending email:', error);
                    alert('An error occurred while sending your message. Please try again later.');
                })
                .finally(function() {
                    // Reset button state
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
        });

        // Mark as initialized
        isInitialized = true;
        console.log('EmailJS and form handlers initialized successfully');
    }

    // Try to initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM Content Loaded event fired');
        initializeEmailJS();
    });

    // Fallback initialization after a short delay
    setTimeout(function() {
        if (!isInitialized) {
            console.log('Delayed initialization attempt');
            initializeEmailJS();
        }
    }, 1000);
})(); 