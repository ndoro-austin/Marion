// Preloader - Show on every page load/refresh
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // Preloader will automatically fade out after 2.5 seconds due to CSS animation
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 3300);
    }
});

// Restart to home page on refresh
if (performance.navigation.type === 1) {
    window.location.href = 'index.html';
}

// Master Section Image Switcher
const featureButtons = document.querySelectorAll('.feature-item');
const masterImg = document.getElementById('master-img');

if (featureButtons.length > 0 && masterImg) {
    featureButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            featureButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Change image
            masterImg.src = button.getAttribute('data-image');
        });
    });
}

// Gallery Carousel
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const imageGrid = document.querySelector('.image-grid');

if (prevBtn && nextBtn && imageGrid) {
    const scrollAmount = 480; // Adjust based on item width
    
    nextBtn.addEventListener('click', () => {
        imageGrid.scrollLeft += scrollAmount;
    });
    
    prevBtn.addEventListener('click', () => {
        imageGrid.scrollLeft -= scrollAmount;
    });
}

// Menu Dropdown Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuDropdown = document.querySelector('.menu-dropdown');

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        menuDropdown.classList.toggle('active');
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (menuDropdown && !menuDropdown.contains(e.target)) {
        menuDropdown.classList.remove('active');
    }
});

// Hero Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}

// Start slideshow after 2 seconds, then rotate every 5 seconds
if (totalSlides > 1) {
    setTimeout(() => {
        setInterval(nextSlide, 5000);
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image grid hover effect
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.grid-item').forEach(item => {
    observer.observe(item);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('Website initialized');

