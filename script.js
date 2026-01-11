// Smooth scroll behavior
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

// Header scroll effect - fade background and center title
const header = document.querySelector('.header');
const promptSection = document.querySelector('.prompt-section');
const promptContent = document.querySelector('.prompt-content');
const promptTitle = document.querySelector('.prompt-title');
const promptLine = document.querySelector('.prompt-line');
let headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    let scrollProgress = Math.min(scrollY / (headerHeight * 0.8), 1);
    
    // Fade out the header background image
    header.style.backgroundImage = `linear-gradient(rgba(74, 58, 46, ${0.4 + (0.2 * scrollProgress)}), rgba(74, 58, 46, ${0.4 + (0.2 * scrollProgress)}))`;
    
    // Add scroll shadow effect
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    // Center prompt content and stretch line as you scroll
    if (scrollProgress > 0) {
        promptContent.style.flexDirection = 'column';
        promptContent.style.alignItems = 'center';
        promptContent.style.justifyContent = 'center';
        promptContent.style.gap = `${20 + (20 * scrollProgress)}px`;
        promptTitle.style.textAlign = 'center';
        promptLine.style.width = `${50 + (30 * scrollProgress)}%`;
    }
});

// Fade-in animation for content blocks on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all content blocks
document.querySelectorAll('.content-block').forEach(block => {
    observer.observe(block);
});

// Add hover effect to content blocks
document.querySelectorAll('.content-block').forEach(block => {
    block.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'all 0.3s ease';
    });
    
    block.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('We Design Ur Home - Ready!');
});
