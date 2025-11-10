let lastScrollPosition = 0; // Tracks the last scroll position
const slideInElements = document.querySelectorAll('.slide-in');

// Elements slide in when page loads
window.addEventListener('load', () => {
    slideInElements.forEach(el => {
        el.classList.add('slide-from-bottom');
    });
});

function handleScroll() {
    const currentScrollPosition = window.pageYOffset;

    // Determine scroll direction
    const isScrollingDown = currentScrollPosition > lastScrollPosition;

    slideInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            // Prevent re-triggering if already visible
            if (!el.classList.contains('visible')) {
                if (isScrollingDown) {
                    el.classList.add('slide-from-bottom', 'visible');
                    el.classList.remove('slide-from-top');
                } else {
                    el.classList.add('slide-from-top', 'visible');
                    el.classList.remove('slide-from-bottom');
                }
            }
        } else {
            // Reset visibility state when out of view
            el.classList.remove('slide-from-bottom', 'slide-from-top', 'visible');
        }
    });

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
}

// Throttle function for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Run on scroll and when the page loads with throttling for performance
window.addEventListener('scroll', throttle(handleScroll, 16)); // ~60fps
handleScroll();

// Load image background
window.addEventListener('load', function() {
    const spacer = document.querySelector('.spacer');
    if (spacer) {
        let offset = window.scrollY; // Get the current scroll position
        spacer.style.backgroundPosition = `center ${offset * -0.1}px`; // Set initial background position based on scroll
    }
});
  
window.addEventListener('scroll', throttle(function () {
    const spacer = document.querySelector('.spacer');
    if (spacer) {
        let offset = window.scrollY; // Get current scroll position
        spacer.style.backgroundPosition = `center ${offset * -0.1}px`; // Apply parallax effect
    }
}, 16));
  
window.addEventListener('load', function() {
    const banner = document.querySelector('.banner');
    if (banner) {
        let offset = window.scrollY; // Get the current scroll position
        banner.style.backgroundPosition = `center ${offset * -0.1}px`; // Set initial background position based on scroll
    }
});
  
window.addEventListener('scroll', throttle(function () {
    const banner = document.querySelector('.banner');
    if (banner) {
        let offset = window.scrollY; // Get current scroll position
        banner.style.backgroundPosition = `center ${offset * -0.1}px`; // Apply parallax effect
    }
}, 16));

// Toggle the menu's active state
function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    const navBar = document.querySelector('.navbar');

    // Toggle the 'active' class to show/hide the menu
    navItems.classList.toggle('active');
    navBar.classList.toggle('active');
}

// Check if all the links are visible on the screen
function checkLinksVisibility() {
    const navLinks = document.querySelectorAll('.nav-items a');
    
    // Check if all links are fully visible in the viewport
    const allVisible = Array.from(navLinks).every(link => {
        const rect = link.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });

    // If all links are visible, automatically close the menu
    if (allVisible) {
        const navItems = document.querySelector('.nav-items');
        const navBar = document.querySelector('.navbar');
        
        // Remove the 'active' class to hide the menu
        navItems.classList.remove('active');
        navBar.classList.remove('active');
    }
}

// Add scroll event listener to check visibility of the links when scrolling
window.addEventListener('scroll', throttle(checkLinksVisibility, 100));

// Sponsor card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const sponsorCards = document.querySelectorAll('.sponsor-card');
    
    sponsorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add intersection observer for better performance on sponsor cards
if ('IntersectionObserver' in window) {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe all sponsor cards
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.sponsor-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });
    });
}