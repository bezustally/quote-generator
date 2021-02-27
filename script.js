const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const vkBtn = document.getElementById('vk');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
    loader.hidder = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Get Quote From API
async function getQuote() {
    showLoadingSpinner()
    const proxyUrl = "https://serene-inlet-73652.herokuapp.com/"
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json";
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        // If Author is blank, then 'Unknown'
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Неизвестный';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        // Reduce font size for long quotes
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = data.quoteText;
        removeLoadingSpinner()
    } catch (error) {
    }
}

// Sharing on VK

function shareVk() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const vkLink = `https://vk.com/share.php?url=http://bezustally.ru/quote-generator/&title=${quote} © ${author}`;
    vk.href = vkLink;

}

function reloadPage() {
    location.reload()
}

// Event Listeners

newQuoteBtn.addEventListener('click', reloadPage);
vkBtn.addEventListener('click', shareVk);

// On Load
getQuote();