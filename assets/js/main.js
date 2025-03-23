// Navigation 
document.addEventListener('DOMContentLoaded', () => {
    // Theme Switching
    const themeButtons = document.querySelectorAll('.theme-btn');
    const htmlElement = document.documentElement;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'default';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    });

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    document.querySelector('.burger').classList.remove('toggle');
                }
                
                // Calculate header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Smooth scroll with offset
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Navbar
    const header = document.querySelector('header');
    let scrollPosition = window.scrollY;

    function updateHeaderStyling() {
        scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeaderStyling);
    updateHeaderStyling();

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // You would typically send this data to a server
            // For now, let's just log it and show a success message
            console.log('Form Submission:', { name, email, message });
            
            // Display success message
            const formContainer = contactForm.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <h3>Thank you for your message!</h3>
                <p>I'll get back to you as soon as possible.</p>
            `;
            
            formContainer.innerHTML = '';
            formContainer.appendChild(successMessage);
        });
    }

    // Animation for elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Add fade-in class to elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});

// Add CSS animations for the nav links
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .toggle .line2 {
        opacity: 0;
    }
    
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .scrolled {
        background-color: rgba(255, 255, 255, 0.98);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .success-message {
        text-align: center;
        padding: 2rem;
        background-color: var(--dark-color);
        border-radius: 10px;
        border-left: 5px solid var(--success-color);
        color: var(--light-color);
    }
`;
document.head.appendChild(styleSheet);

// Scroll behavior for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize header state on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.scrollY > 50) {
        document.querySelector('header').classList.add('scrolled');
    }
}); 