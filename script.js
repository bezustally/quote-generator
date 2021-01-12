const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const vkBtn = document.getElementById('vk');
const newQuoteBtn = document.getElementById('new-quote');


// Get Quote From API
async function getQuote() {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=json";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
    } catch (error) { 
    }
}

// On Load
getQuote(); 