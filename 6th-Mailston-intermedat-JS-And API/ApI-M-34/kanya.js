const loadQuote = () => {

    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(KanyeaQuote => displayQuote(KanyeaQuote))
}
const displayQuote = KanyeaQuote => {
    const quoteElement = document.getElementById('blockQuote')
    quoteElement.innerText = KanyeaQuote.quote;


}