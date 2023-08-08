let nasaBox = document.getElementById('nasa-images')
let nasaFixedImage = document.getElementById('nasa-img')
let newNasaButton = document.getElementById('next-img-button')


function getNasa() {
    // calls nasa api for an image of the day and makes new img element
    fetch(`https://api.nasa.gov/planetary/apod?api_key=p027dcXDBzAB1YTjEeaiAA2djDcIYC5joRZl66GR&count=1`)
        .then(response => response.json())
        .then(data => {
            // let nasaImg = document.createElement('img')
            // nasaImg.src = data[0].hdurl
            // nasaBox.append(nasaImg)

            nasaFixedImage.src = data[0].hdurl;
        })
}

// get new image when user clicks button
newNasaButton.addEventListener('click', function (event) {
    event.preventDefault()
    getNasa();
    // nasaBox.textContent = ''
})
// commented load function out to save daily api calls
// getNasa();


function getQuote() {
    return fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
    .then(function (response) {
        return response.json();
    })
    .then(function (quoteIndex) {
        let displayQuote = quoteIndex.data[0].quoteText;
        quoteEl.textContent = displayQuote;
        return displayQuote;
    });
}

let quoteEl = document.getElementById("quotes");
let nextQuoteBtn = document.getElementById("next-quote-button");

nextQuoteBtn.addEventListener("click", async function (event) {
    event.preventDefault();
    let quote = await getQuote(); // Use await to wait for the promise to resolve
    localStorage.setItem("quote", quote);
});

// Check if there's a saved quote in local storage and display it
let savedQuote = localStorage.getItem("quote");
if (savedQuote) {
    quoteEl.textContent = savedQuote;
}

let generate = document.getElementById("generatePosterBtn")
generate.addEventListener("click", function (event){
    event.target
    window.location.href = "./poster.html";
}
);