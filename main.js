// Main JavaScript functionality for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initParticles();
    initSkillsRadar();
    initTimelineAnimation();
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
});

// Particle system for hero background
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    container.appendChild(particle);
    
    // Animate particle
    anime({
        targets: particle,
        translateX: [
            { value: Math.random() * 200 - 100, duration: 3000 },
            { value: Math.random() * 200 - 100, duration: 3000 }
        ],
        translateY: [
            { value: Math.random() * 200 - 100, duration: 3000 },
            { value: Math.random() * 200 - 100, duration: 3000 }
        ],
        opacity: [
            { value: 0.8, duration: 1500 },
            { value: 0.2, duration: 1500 }
        ],
        scale: [
            { value: 1.2, duration: 1500 },
            { value: 0.8, duration: 1500 }
        ],
        loop: true,
        easing: 'easeInOutSine',
        delay: Math.random() * 2000
    });
}

// Skills radar chart
function initSkillsRadar() {
    const chartDom = document.getElementById('skills-radar');
    if (!chartDom) return;
    
    const myChart = echarts.init(chartDom);
    
    const option = {
        title: {
            text: 'Technical Skills',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#2c3e50'
            }
        },
        radar: {
            indicator: [
                { name: 'R Programming', max: 100 },
                { name: 'Python', max: 100 },
                { name: 'MATLAB', max: 100 },
                { name: 'SQL', max: 100 },
                { name: 'Power BI', max: 100 },
                { name: 'Statistics', max: 100 },
                { name: 'Data Viz', max: 100 },
                { name: 'Machine Learning', max: 100 }
            ],
            shape: 'polygon',
            splitNumber: 4,
            axisName: {
                color: '#666',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: '#e0e0e0'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(193, 123, 92, 0.1)', 'rgba(143, 166, 142, 0.1)']
                }
            }
        },
        series: [{
            name: 'Skills',
            type: 'radar',
            data: [{
                value: [95, 85, 80, 85, 90, 95, 90, 75],
                name: 'Current Level',
                areaStyle: {
                    color: 'rgba(193, 123, 92, 0.3)'
                },
                lineStyle: {
                    color: '#c17b5c',
                    width: 3
                },
                itemStyle: {
                    color: '#c17b5c'
                }
            }],
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        }]
    };
    
    myChart.setOption(option);
    
    // Responsive
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// Timeline animation
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateX: [-50, 0],
                        duration: 800,
                        easing: 'easeOutCubic',
                        delay: index * 200
                    });
                }, index * 300);
            }
        });
    }, {
        threshold: 0.3
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Smooth scroll for navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle mobile menu (you can expand this functionality)
            alert('Mobile menu - navigate using the links below');
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    // Animate cards on scroll
    const cards = document.querySelectorAll('.card-hover');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 600,
                    easing: 'easeOutCubic'
                });
            }
        });
    }, {
        threshold: 0.2
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        cardObserver.observe(card);
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-bg');
        
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading animation
window.addEventListener('load', function() {
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutCubic'
    });
});

// Navigation active state
window.addEventListener('scroll', debounce(function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 100));

// Contact form handling (for future use)
function handleContactForm() {
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form validation and submission logic here
            console.log('Form submitted');
        });
    }
}

// Initialize contact form when available
document.addEventListener('DOMContentLoaded', handleContactForm);