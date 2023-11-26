// Function to reload the website upon pressing the submit button

// ###############################
// # Denna kod är skriven av mig.#
// ###############################


// Waits for the DOM content to complete loading
document.addEventListener('DOMContentLoaded', function() {
    // Added an event listener to the form with the ID 'myForm'
    document.getElementById('myForm').addEventListener('submit', function(event) {
        // Prevents the default form submission to go to blank page
        event.preventDefault();

        // Reloads the contact page
        window.location.reload();
    });
});
