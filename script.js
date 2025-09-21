// --- Quote Loader ---
async function loadRandomQuote() {
    const quoteTextEl = document.getElementById('quote-text');
    const quoteAttrEl = document.getElementById('quote-attribution');
    try {
        const response = await fetch('quote.md');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const quotes = text.split('\n').map(q => q.trim()).filter(quote => quote !== '');

        if (quotes.length === 0) {
            quoteTextEl.textContent = 'No quotes found.';
            quoteAttrEl.textContent = '';
            return;
        }

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        const dashIndex = randomQuote.lastIndexOf(' - ');

        if (dashIndex !== -1) {
            let quoteText = randomQuote.substring(0, dashIndex).trim();
            let attribution = randomQuote.substring(dashIndex + 2).trim();

            if (quoteText.startsWith('"') && quoteText.endsWith('"')) {
                quoteTextEl.textContent = quoteText;
            } else {
                quoteTextEl.textContent = `"${quoteText}"`;
            }
            quoteAttrEl.textContent = `- ${attribution}`;
        } else {
            quoteTextEl.textContent = `"${randomQuote}"`;
            quoteAttrEl.textContent = '';
        }

    } catch (error) {
        console.error('Error loading quotes:', error);
        quoteTextEl.textContent = '"Could not load quotes."';
        quoteAttrEl.textContent = '- this webpage';
    }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // Load the random quote initially
    loadRandomQuote();

    const quoteContainer = document.getElementById('quote-container');
    if (quoteContainer) {
        quoteContainer.addEventListener('click', loadRandomQuote);
    }

    const searchHandle = document.getElementById('search-handle');
    const headerBar = document.querySelector('.header-bar');

    if (searchHandle && headerBar) {
        // Function to toggle header visibility
        const toggleHeader = () => {
            // Check computed style to handle initial state correctly
            const isHidden = window.getComputedStyle(headerBar).display === 'none';
            headerBar.style.display = isHidden ? 'flex' : 'none';
        };

        searchHandle.addEventListener('click', toggleHeader);

        // Ensure header is visible on load for wider screens but hidden for mobile
        if (window.innerWidth <= 640) {
             headerBar.style.display = 'none';
        } else {
             headerBar.style.display = 'flex';
        }
    }
});