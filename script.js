document.addEventListener('DOMContentLoaded', () => {
    // --- FAQ Toggle Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        summary.addEventListener('click', (e) => {
            if (!item.open) {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.open) {
                        otherItem.removeAttribute('open');
                    }
                });
            }
        });
    });

    // --- Typewriter Effect ---
    const heading = document.querySelector('#hero h1');
    if (heading) { // Check if the heading element exists
        const textToType = heading.textContent; // Store the original text
        const typingSpeed = 100; // Milliseconds per character (adjust speed here)
        let i = 0;
        heading.textContent = ''; // Clear the heading text initially
        heading.classList.add('typing-effect'); // Add class to show cursor

        function typeWriter() {
            if (i < textToType.length) {
                heading.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Typing finished - optionally remove the class to stop cursor blinking
                // heading.classList.remove('typing-effect');
                 // Or keep cursor blinking by commenting out the line above
            }
        }

        // Start typing after a short delay (e.g., 500ms)
        setTimeout(typeWriter, 500);
    }
});