// This script is creating an "animated effect" to simulate the headline to be typed in by a keyboard/user

function typeInEffect() {
    // Selected the HTML element class
    const headline = document.querySelector('.portfolio-headline-1-name');
    // Specified the text to be typed out
    const text = "PORTFOLIO";
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
}

// Calls the typing effect function after page load
window.addEventListener('load', typeInEffect);

// Skrivet av mig