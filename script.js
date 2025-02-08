// JavaScript for animations
const sections = document.querySelectorAll('.section');

function animateSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% visible

        if (sectionTop < triggerPoint) {
            section.classList.add('active');
        } else {
           // section.classList.remove('active'); // Uncomment to reanimate on scroll up
        }
    });
}

window.addEventListener('scroll', animateSections);
animateSections(); // Initial check on load