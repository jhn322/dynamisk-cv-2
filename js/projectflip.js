// The task is to flip the project card to the backside to reveal new information on a click

// ###############################
// # Denna kod är skriven av mig.#
// ###############################

// Selects all 'project' classes and stores them in a variabel
const projects = document.querySelectorAll('.project');

// forEach over each 'project' class
projects.forEach(function(project) {
    // Added an event listener for the click function to work
    project.addEventListener('click', function() {
        // Toggle the project card on click
        project.classList.toggle('flip');
    });
});
