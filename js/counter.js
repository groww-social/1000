// Function to animate counting from 0 to the target value with a minimum duration of 6 seconds
function countUp(target) {
  const duration = 10000; // 10 seconds
  const increment = target / (duration / 10); // Increment based on duration and step interval
  let current = 0;
  
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    document.querySelector('.counter[data-target="' + target + '"]').textContent = Math.floor(current);
  }, 10); // Interval time in milliseconds
}

// Intersection Observer to detect when the section is in view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        countUp(target);
      });
      observer.unobserve(entry.target); // Stop observing after the animation starts
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Target the section containing the counters
const statboxSection = document.querySelector('.statboxgrp');
observer.observe(statboxSection);
