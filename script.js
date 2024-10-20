
// Fading in sections
const faders = document.querySelectorAll('.clump, .small-clumps');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Get the bee element
const bee = document.getElementById('bee1');

window.onload = function() {
    const bees = document.querySelectorAll('.falling-bee');
    
    bees.forEach((bee) => {
        // Set a random horizontal position between 0 and the width of the screen
        const randomLeft = Math.random() * window.innerWidth;
        
        // Set a random animation delay so all bees don't fall at the same time
        const randomDelay = Math.random() * 5; // Between 0 and 5 seconds
        
        // Apply the styles to the bee
        bee.style.left = `${randomLeft}px`;
        bee.style.animationDelay = `${randomDelay}s`;
    });
};
