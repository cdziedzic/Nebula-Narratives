let nasaBox = document.getElementById('nasa-images')
let nasaFixedImage = document.getElementById('nasa-img')
let newNasaButton = document.getElementById('next-img-button')



//  Get and Display nasa images from API

function getNasa() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=p027dcXDBzAB1YTjEeaiAA2djDcIYC5joRZl66GR&count=1`)
        .then(response => response.json())
        .then(data => {

            nasaFixedImage.src = data[0].hdurl;
        })
}

// commented load function out to save daily api calls
// getNasa();


// get new image when user clicks button

newNasaButton.addEventListener('click', function (event) {

    event.preventDefault();
    getNasa();

});


// Retrive and display image 

let  savedImageUrl = localStorage.getItem("nasa-image");
if (savedImageUrl) {
    nasaFixedImage.textContent = savedImageUrl;
}


//  Get and Display quotes images from API

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


// Generates poster, and stores the images into local storage 

let generate = document.getElementById("generatePosterBtn")
generate.addEventListener("click", function (event){
    event.target

    let  imageUrl = nasaFixedImage.src;
    localStorage.setItem("imageUrl", imageUrl);

    window.location.href = "./poster.html";
}
);