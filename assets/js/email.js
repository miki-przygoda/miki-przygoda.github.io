// Initialize EmailJS with your public key
(function() {
    emailjs.init("pJL7iFrDMqU0DfvMC");
    console.log('EmailJS initialized with public key');
})();

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        console.log('Contact form found');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            console.log('Form values:', { name, email, message });
            
            // Enhanced validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                console.error('Validation failed: Empty fields');
                return;
            }
            
            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                console.error('Validation failed: Invalid email format');
                return;
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
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
            
            console.log('Generated time:', time);
            
            // Prepare template parameters
            const templateParams = {
                name: name,
                title: "Message from Portfolio",
                time: time,
                message: message,
                email: email
            };
            
            // Validate template parameters
            if (!Object.values(templateParams).every(value => value)) {
                console.error('Template parameter validation failed:', templateParams);
                alert('An error occurred while preparing your message. Please try again.');
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                return;
            }
            
            console.log('Template parameters:', templateParams);
            
            // Send email using EmailJS
            console.log('Attempting to send email...');
            emailjs.send('service_jykd0y4', 'template_gvfho9r', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully:', response);
                    if (response.status === 200) {
                        // Show success message
                        const formContainer = contactForm.parentElement;
                        const successMessage = document.createElement('div');
                        successMessage.className = 'success-message';
                        successMessage.innerHTML = `
                            <h3>Thank you for your message!</h3>
                            <p>I'll get back to you as soon as possible.</p>
                            <p>Currently the emailing system is not working, will fix in a future update.</p>
                        `;
                        
                        formContainer.innerHTML = '';
                        formContainer.appendChild(successMessage);
                        
                        // Clear the form
                        contactForm.reset();
                    } else {
                        throw new Error('Unexpected response status: ' + response.status);
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
                    console.log('Form submission completed');
                });
        });
    } else {
        console.error('Contact form not found in DOM');
    }
}); 