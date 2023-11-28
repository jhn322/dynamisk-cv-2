// The task is to flip the project card to the backside to reveal new information on a click

// ###############################
// # Denna kod är skriven av mig.#
// ###############################

// Selects all 'project-card' classes and stores them in a variabel
const projectCards = document.querySelectorAll('.project-card');

// forEach over each 'card' class
projectCards.forEach(function(card) {
    // Added an event listener for the click function to work
    card.addEventListener('click', function() {
        // Toggle the project card on click
        card.classList.toggle('flip');
    });
});
