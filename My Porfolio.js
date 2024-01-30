var typed = new Typed('#element', {
    strings: ['coding."', 'web development."', 'designing."', 'gaming."', 'music listening."'],
    typeSpeed: 120,
});
var typed = new Typed('#footer', {
    strings: ['&copy; Made with ❤️ by <span class="violet">Harshit Singla</span>'],
    typeSpeed: 80,
    backDelay: 2000, // Adjust this value to control the delay before backspacing
    startDelay: 500, // Adjust this value to control the delay before starting the next loop
    smartBackspace: true,
    loop: true,
});


// Function to update the class based on screen size
function updateCarouselWidth() {
    var carousel = document.getElementById('carouselExampleIndicators');

    // Check the screen width
    if (window.innerWidth < 500) {
        // If the screen width is less than 768 pixels, set a new class for mobile
        carousel.classList.remove('w-50');
        carousel.classList.add('w-100');
    } else if (window.innerWidth > 500) {
        // Otherwise, set a different class for desktop
        carousel.classList.remove('w-100');
        carousel.classList.add('w-50');
    }
}

// Call the function initially to set the class based on the initial screen size
updateCarouselWidth();

// Attach the function to the window resize event to update the class dynamically
window.addEventListener('resize', updateCarouselWidth);

// Add smooth scrolling to all links with anchors

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Scroll to the top of the target element
                inline: 'start' // Align the top of the target element with the top of the viewport
            });
        }
    });
});

// Toggle Popover in Tech Stack
// Enable Bootstrap Popovers
// script.js

$(document).ready(function () {
    // Enable Bootstrap Popovers
    $('[data-toggle="popover"]').popover();
});
