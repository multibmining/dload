async function fetchCryptoPrices() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("prices-container").innerHTML = `
            <p>Bitcoin: $${data.bitcoin.usd}</p>
            <p>Ethereum: $${data.ethereum.usd}</p>
            <p>Dogecoin: $${data.dogecoin.usd}</p>
        `;
    } catch (error) {
        document.getElementById("prices-container").innerHTML = "<p>Failed to load prices.</p>";
    }
}

// Language selection
document.getElementById("language-select").addEventListener("change", function () {
    const selectedLang = this.value;
    window.location.href = `https://translate.google.com/translate?hl=${selectedLang}&sl=auto&u=${window.location.href}`;
});

// Fetch prices on load
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000);
