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
    let offset = window.scrollY; // Get the current scroll position
    spacer.style.backgroundPosition = `center ${offset * -0.1}px`; // Set initial background position based on scroll
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
    let offset = window.scrollY; // Get the current scroll position
    banner.style.backgroundPosition = `center ${offset * -0.1}px`; // Set initial background position based on scroll
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

// Countdown configuration
const countdownTimerElement = document.getElementById('countdown-timer');
const countdownTarget = new Date('2026-01-10T00:00:00-05:00').getTime();
let timerInterval;

function ensureCountdownStructure() {
    if (!countdownTimerElement) {
        return null;
    }

    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        countdownTimerElement.innerHTML = `
          <span id="days">0 Days</span> <em>|</em> 
          <span id="hours">00</span> :
          <span id="minutes">00</span> :
          <span id="seconds">00</span>
        `;

        daysElement = document.getElementById('days');
        hoursElement = document.getElementById('hours');
        minutesElement = document.getElementById('minutes');
        secondsElement = document.getElementById('seconds');
    }

    return {
        daysElement,
        hoursElement,
        minutesElement,
        secondsElement
    };
}

function updateCountdown() {
    if (!countdownTimerElement || Number.isNaN(countdownTarget)) {
        return;
    }

    const now = Date.now();
    const timeDifference = countdownTarget - now;

    if (!Number.isFinite(timeDifference)) {
        countdownTimerElement.textContent = 'Countdown unavailable';
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        return;
    }

    if (timeDifference <= 0) {
        countdownTimerElement.textContent = 'Event in Progress!';
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        return;
    }

    const timeParts = ensureCountdownStructure();
    if (!timeParts) {
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');
    const dayLabel = days === 1 ? 'Day' : 'Days';

    timeParts.daysElement.textContent = `${days} ${dayLabel}`;
    timeParts.hoursElement.textContent = paddedHours;
    timeParts.minutesElement.textContent = paddedMinutes;
    timeParts.secondsElement.textContent = paddedSeconds;
}

function startCountdown() {
    updateCountdown();
    timerInterval = setInterval(updateCountdown, 1000);
}

if (countdownTimerElement) {
    startCountdown();
}