const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const hamIcon = hamburger.querySelector('.hamburger-icon');
const crossIcon = hamburger.querySelector('.cross-icon');

// Toggle the hamburger menu on click
hamburger.addEventListener('click', function () {
    if (hamIcon.style.display === "none") {
        // Show hamburger icon and hide cross icon
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
        menu.classList.remove('active'); // Close the menu
    } else {
        // Show cross icon and hide hamburger icon
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.classList.add('active'); // Open the menu
    }
});

// Close the menu if the user clicks outside of the menu or hamburger button
document.addEventListener('click', function (event) {
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
        menu.classList.remove('active'); // Close the menu
    }
});


