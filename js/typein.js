// This script is creating an "animated effect" to simulate the headline to be typed in by a keyboard/user

// ####################################################
// # Denna kod är skriven av mig med hjälp av chatgpt.#
// ####################################################

function typeInEffect(className, text) {
    // Selected the HTML element class
    const headlines = document.querySelectorAll(className);
    headlines.forEach(headline => {
        // Counter for text characters
        let i = 0;
        // The typing indicator
        let typingIndicator = '|';

        // Function to add a letter with a delay
        function type() {
            if (i <= text.length) { //Checks if there is any characthers left to type
                headline.textContent = text.substring(0, i) + typingIndicator; // Update headline text and blinking indicator
                i++; // Moves to the next character
                setTimeout(type, 200); // Delay for typing the next character
            } else {
                // Typing indicator blinks three times after typing the word and then disappears
                const blinkInterval = setInterval(() => {
                    if (typingIndicator === '|') {
                        typingIndicator = ''; // Hides typing indicator
                    } else {
                        typingIndicator = '|'; // Shows typing indicator
                    }
                    headline.textContent = text + typingIndicator; // Update headline text and blinking indicator
                }, 500); // Blinking speed for indicator

                // Blinking indicator removed after three times
                setTimeout(() => {
                    clearInterval(blinkInterval); // Stops
                    headline.textContent = text; // Keeps the text in place
                }, 2500); // Total blinking duration
            }
        }

        // Starts function
        type();
    });
}

// Calls the typing effect function after page load
window.addEventListener('load', function() {
    // Specified the text to be typed out
    typeInEffect('.portfolio-headline-1-name', 'PORTFOLIO');
    typeInEffect('.start-1-name', 'JOHAN SÖDERLUND');
});