// Initialize EmailJS
(function() {
    emailjs.init("frKAn4WM_vviY0Feo");
    console.log('EmailJS initialized');
})();

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
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
            
            // Prepare template parameters
            const templateParams = {
                name: name,
                title: "Message from Portfolio",
                time: time,
                message: message,
                email: email
            };
            
            // Send email using EmailJS
            emailjs.send("service_ab8ie2s", "template_kx6z5md", templateParams)
                .then(function(response) {
                    if (response.status === 200) {
                        // Show success message
                        const formContainer = contactForm.parentElement;
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
    }
}); 