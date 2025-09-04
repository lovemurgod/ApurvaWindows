// JavaScript for Apurva Windows - Premium & Luxury Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initIntroAnimation();
    initNavigation();
    initScrollAnimations();
    initTestimonialSlider();
    initVideoCarousels();
    initContactForm();
});

// Intro Animation
function initIntroAnimation() {
    const introAnimation = document.getElementById('introAnimation');
    const mainContent = document.getElementById('mainContent');
    
    // Show intro animation for 3 seconds
    setTimeout(() => {
        introAnimation.classList.add('fade-out');
        mainContent.classList.add('show');
        
        // Remove intro animation from DOM after fade out
        setTimeout(() => {
            introAnimation.style.display = 'none';
        }, 1000);
    }, 3000);
}

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling and active link management
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed navbar
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update active link
                navLinks.forEach(nl => nl.classList.remove('active'));
                link.classList.add('active');

                // Close mobile menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add animation styles to elements
    const animateElements = document.querySelectorAll('.feature-card, .product-showcase, .testimonial-card, .contact-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Update counter for new 700+ value
    const customerStat = document.querySelector('.stat-number');
    if (customerStat && customerStat.textContent.includes('700')) {
        const observer700 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounterTo700(entry.target);
                    observer700.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer700.observe(customerStat);
    }
}

// Counter animation for stats
function animateCounter(element) {
    const originalText = element.innerText;
    
    // Don't animate if text contains +, %, or is non-numeric
    if (originalText.includes('+') || originalText.includes('%') || isNaN(parseInt(originalText))) {
        return; // Keep original text
    }
    
    const target = parseInt(originalText);
    const increment = target / 50;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.innerText = originalText; // Keep original format
            clearInterval(timer);
        } else {
            element.innerText = Math.floor(current);
        }
    }, 40);
}

// Special counter for 700+ customers
function animateCounterTo700(element) {
    let current = 0;
    const target = 700;
    const increment = target / 60;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.innerText = '700+';
            clearInterval(timer);
        } else {
            element.innerText = Math.floor(current);
        }
    }, 40);
}

// Testimonial Slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function startTestimonialSlider() {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    }

    function stopTestimonialSlider() {
        clearInterval(testimonialInterval);
    }

    // Indicator click handlers
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
            stopTestimonialSlider();
            startTestimonialSlider();
        });
    });

    // Start auto-play
    startTestimonialSlider();

    // Pause on hover
    const testimonialContainer = document.querySelector('.testimonials-slider');
    if (testimonialContainer) {
        testimonialContainer.addEventListener('mouseenter', stopTestimonialSlider);
        testimonialContainer.addEventListener('mouseleave', startTestimonialSlider);
    }
}

// Horizontal Scrolling Video Testimonials
function initVideoCarousels() {
    initHorizontalVideoScroll('eternia');
    initHorizontalVideoScroll('phifer');
    initReviewsSlider();
}

function initHorizontalVideoScroll(type) {
    const container = document.getElementById(`${type}-container`);
    const leftBtn = document.getElementById(`${type}-scroll-left`);
    const rightBtn = document.getElementById(`${type}-scroll-right`);
    
    if (!container || !leftBtn || !rightBtn) return;
    
    const scrollAmount = 320; // Width of one video card + gap
    
    leftBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    rightBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Update button states based on scroll position
    function updateButtonStates() {
        const isAtStart = container.scrollLeft <= 0;
        const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
        
        leftBtn.style.opacity = isAtStart ? '0.5' : '1';
        rightBtn.style.opacity = isAtEnd ? '0.5' : '1';
        leftBtn.disabled = isAtStart;
        rightBtn.disabled = isAtEnd;
    }
    
    container.addEventListener('scroll', updateButtonStates);
    updateButtonStates(); // Initial state
}

function initReviewsSlider() {
    const wrapper = document.getElementById('reviews-wrapper');
    const indicators = document.getElementById('review-indicators');
    const prevBtn = document.getElementById('reviews-prev');
    const nextBtn = document.getElementById('reviews-next');
    
    if (!wrapper || !indicators || !prevBtn || !nextBtn) return;
    
    const slides = wrapper.querySelectorAll('.review-slide');
    const dots = indicators.querySelectorAll('.review-dot');
    let currentSlide = 0;
    let autoplayInterval;
    
    function showSlide(index) {
        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(prev);
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 6000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Navigation event listeners
    prevBtn.addEventListener('click', () => {
        stopAutoplay();
        prevSlide();
        setTimeout(startAutoplay, 4000);
    });
    
    nextBtn.addEventListener('click', () => {
        stopAutoplay();
        nextSlide();
        setTimeout(startAutoplay, 4000);
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoplay();
            showSlide(index);
            setTimeout(startAutoplay, 4000);
        });
    });
    
    // Pause autoplay on hover
    wrapper.addEventListener('mouseenter', stopAutoplay);
    wrapper.addEventListener('mouseleave', startAutoplay);
    
    // Initialize
    showSlide(0);
    startAutoplay();
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // Basic validation
            if (!validateForm(formValues)) {
                return;
            }
            
            // Show success message (in real implementation, you would send to server)
            showFormMessage('Thank you for your inquiry! We will contact you within 24 hours.', 'success');
            contactForm.reset();
        });
    }
}

function validateForm(values) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    
    if (!values.name || values.name.length < 2) {
        showFormMessage('Please enter a valid name.', 'error');
        return false;
    }
    
    if (!emailRegex.test(values.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return false;
    }
    
    if (!phoneRegex.test(values.phone)) {
        showFormMessage('Please enter a valid phone number.', 'error');
        return false;
    }
    
    if (!values.service) {
        showFormMessage('Please select a service.', 'error');
        return false;
    }
    
    if (!values.message || values.message.length < 10) {
        showFormMessage('Please enter a message with at least 10 characters.', 'error');
        return false;
    }
    
    return true;
}

function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
        background: ${type === 'success' ? 'rgba(46, 160, 67, 0.2)' : 'rgba(220, 38, 38, 0.2)'};
        color: ${type === 'success' ? '#2ea043' : '#dc2626'};
        border: 1px solid ${type === 'success' ? '#2ea043' : '#dc2626'};
        animation: slideIn 0.3s ease;
    `;
    
    // Insert message
    const form = document.getElementById('contactForm');
    form.insertBefore(messageDiv, form.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => messageDiv.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations for form messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Smooth scroll for all internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Performance optimization: Lazy load videos
function initLazyLoadVideos() {
    const videos = document.querySelectorAll('video');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                if (!video.dataset.loaded) {
                    video.load();
                    video.dataset.loaded = 'true';
                }
                videoObserver.unobserve(video);
            }
        });
    }, { threshold: 0.25 });

    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

// Initialize lazy loading
initLazyLoadVideos();

// Image gallery functions for Invisible Grills
function changeGrillImage(clickedThumbnail, newImageSrc) {
    // Update main image
    const mainImage = document.getElementById('grill-main-image');
    if (mainImage) {
        mainImage.style.opacity = '0.7';
        setTimeout(() => {
            mainImage.src = newImageSrc;
            mainImage.style.opacity = '1';
        }, 150);
    }
    
    // Update active thumbnail
    const grillThumbnails = document.querySelectorAll('.product-showcase:nth-of-type(3) .thumbnail');
    grillThumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    clickedThumbnail.classList.add('active');
}

// Image gallery functions for Bird Nets
function changeBirdnetImage(clickedThumbnail, newImageSrc) {
    // Update main image
    const mainImage = document.getElementById('birdnet-main-image');
    if (mainImage) {
        mainImage.style.opacity = '0.7';
        setTimeout(() => {
            mainImage.src = newImageSrc;
            mainImage.style.opacity = '1';
        }, 150);
    }
    
    // Update active thumbnail
    const birdnetThumbnails = document.querySelectorAll('.product-showcase:nth-of-type(4) .thumbnail');
    birdnetThumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    clickedThumbnail.classList.add('active');
}