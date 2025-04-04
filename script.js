document.addEventListener('DOMContentLoaded', () => {
    // --- FAQ Toggle Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        summary.addEventListener('click', (e) => {
            // Optional: Close others when one opens
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
    const heading = document.querySelector('#hero h1.typing-effect'); // Target specifically
    if (heading) {
        const textToType = heading.textContent;
        const typingSpeed = 100;
        let i = 0;
        heading.textContent = '';
        // Cursor is handled by CSS ::after pseudo-element

        function typeWriter() {
            if (i < textToType.length) {
                heading.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Keep cursor blinking via CSS
            }
        }
        setTimeout(typeWriter, 500);
    }

    // --- ADDED: Portfolio Tab Switching Logic ---
    const portfolioTabs = document.querySelectorAll('.portfolio-tab');
    const portfolioContents = document.querySelectorAll('.portfolio-content');

    portfolioTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Remove active state from all tabs and contents
            portfolioTabs.forEach(t => t.classList.remove('active'));
            portfolioContents.forEach(c => c.classList.remove('active')); // This triggers fade out via CSS

            // Add active state to the clicked tab
            tab.classList.add('active');

            // Add active state to the target content (triggers fade in via CSS)
            if (targetContent) {
                // We need display block/grid before opacity transition works correctly on enter
                // but CSS handles this transition from display:none via visibility/opacity
                 targetContent.classList.add('active');
            }
        });
    });
    // --- End Portfolio Tab Logic ---

});