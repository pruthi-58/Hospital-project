// Counter animation function
function animateCounter(element, start, end, duration) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Initialize counters when they come into view
function initializeCounters() {
    const counters = document.querySelectorAll("#counter [data-count]");
    counters.forEach(counter => {
        const countTo = parseInt(counter.getAttribute("data-count"));
        animateCounter(counter, 0, countTo, 2000); // Duration: 2 seconds
    });
}

// Intersection Observer to trigger counters
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initializeCounters();
            observer.disconnect(); // Disconnect after initializing counters
        }
    });
});

observer.observe(document.getElementById("counter"));