document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const navbar = document.querySelector('.navbar');
    const mainNav = document.getElementById('mainNav');

    let lastScroll = 0;

    // Navbar scroll effect (transparent to white) - becomes fixed when scrolled
    const topBar = document.querySelector('.top-bar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when scrolled past 50px (homepage only)
        if (mainNav && (mainNav.classList.contains('navbar-transparent') || mainNav.classList.contains('navbar-scrolled'))) {
            if (currentScroll > 50) {
                mainNav.classList.add('navbar-scrolled');
                mainNav.classList.remove('navbar-transparent');
                if (topBar) {
                    topBar.style.transform = 'translateY(-100%)';
                    topBar.style.transition = 'transform 0.3s ease';
                }
            } else {
                mainNav.classList.remove('navbar-scrolled');
                mainNav.classList.add('navbar-transparent');
                if (topBar) {
                    topBar.style.transform = 'translateY(0)';
                }
            }
        }

        lastScroll = currentScroll;
    });
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(40px)';

                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .card, .stat-box').forEach(el => {
        observer.observe(el);
    });
    
    function showAlert(message, type = 'success') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        document.body.appendChild(alertDiv);
        
        alertDiv.classList.add('show');
        
        setTimeout(() => {
            alertDiv.classList.remove('show');
            setTimeout(() => alertDiv.remove(), 300);
        }, 5000);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                showAlert('Please fill in all required fields.', 'danger');
                return;
            }
            
            const formData = {
                name: name,
                email: email,
                phone: phone,
                service: service,
                message: message,
                date: new Date().toISOString()
            };
            
            console.log('Form submitted:', formData);
            
            showAlert(`Thank you ${name}! We'll get back to you within 24 hours.`, 'success');
            
            contactForm.reset();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
            submitBtn.classList.remove('btn-warning');
            submitBtn.classList.add('btn-success');
            
            setTimeout(() => {
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane ms-2"></i>';
                submitBtn.classList.remove('btn-success');
                submitBtn.classList.add('btn-warning');
            }, 3000);
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) {
                showAlert('Please enter your email address.', 'danger');
                return;
            }
            
            console.log('Newsletter subscription:', email);
            
            showAlert('Thank you for subscribing to our newsletter!', 'success');
            
            emailInput.value = '';
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                
                if (target) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-icon').style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-icon').style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    const stats = document.querySelectorAll('.stat-box');
    stats.forEach(stat => {
        const numberElement = stat.querySelector('h3');
        if (numberElement) {
            const targetText = numberElement.textContent.trim();
            const targetNumber = parseInt(targetText);

            if (!isNaN(targetNumber)) {
                let currentNumber = 0;
                const increment = targetNumber / 50;
                const duration = 2000;
                const stepTime = duration / 50;
                const hasPlus = targetText.includes('+');
                const hasPercent = targetText.includes('%');

                const counter = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        numberElement.textContent = targetText;
                        clearInterval(counter);
                    } else {
                        let displayText = Math.floor(currentNumber);
                        if (hasPlus) displayText += '+';
                        if (hasPercent) displayText += '%';
                        numberElement.textContent = displayText;
                    }
                }, stepTime);
            }
        }
    });
    
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .card, .stat-box');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    const mobileNavToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (mobileNavToggle && navbarCollapse) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
    
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // Parallax effect for hero sections
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 0) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            heroSlides.forEach(slide => {
                const speed = 0.5;
                slide.style.backgroundPositionY = -(scrolled * speed) + 'px';
            });
        });
    }

    // Smooth stagger animation for service cards
    const serviceCardsAnimated = document.querySelectorAll('.service-card');
    if (serviceCardsAnimated.length > 0) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        serviceCardsAnimated.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });
    }

    console.log('P. Willis CPA website loaded successfully!');
    console.log('Last updated:', new Date().toLocaleDateString());
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-()+]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}
