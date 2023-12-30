var typed = new Typed('#element', {
    strings: ['coding."', 'web development."', 'designing."', 'gaming."','music listening."'],
    typeSpeed: 50,
  });

    // Function to update the class based on screen size
    function updateCarouselWidth() {
        var carousel = document.getElementById('carouselExampleIndicators');

        // Check the screen width
        if (window.innerWidth < 500) {
            // If the screen width is less than 768 pixels, set a new class for mobile
            carousel.classList.remove('w-50');
            carousel.classList.add('w-100');
        } else if(window.innerWidth > 500) {
            // Otherwise, set a different class for desktop
            carousel.classList.remove('w-100');
            carousel.classList.add('w-50');
        }
    }

    // Call the function initially to set the class based on the initial screen size
    updateCarouselWidth();

    // Attach the function to the window resize event to update the class dynamically
    window.addEventListener('resize', updateCarouselWidth);

