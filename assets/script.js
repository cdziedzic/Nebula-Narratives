let nasaBox = document.getElementById('nasa-images');
let prevNasaBtn = document.getElementById('prev-img-button');
let newNasaButton = document.getElementById('next-img-button');
let nasaFixedImage = document.getElementById('nasa-img');

let quoteEl = document.getElementById("quotes");
let previousQuoteBtn = document.getElementById('prev-quote-button');
let nextQuoteBtn = document.getElementById("next-quote-button");

let previousNasaImages = [];
let nasaArrayNumber = 0;

let previousQuotes = [];
let quoteArrayNumber = 0;

startPage();

function startPage() {
    // Check if there's a saved quote in local storage and display it
    let savedQuote = localStorage.getItem("quote");
    if (savedQuote) {
        quoteEl.textContent = savedQuote;
        previousQuotes.push(savedQuote)
    } else {
        getQuote();
    }

    // check if theres a saved image and display it
    let savedImageUrl = localStorage.getItem("imageUrl");
    if (savedImageUrl) {
        nasaFixedImage.src = savedImageUrl;
        previousNasaImages.push(savedImageUrl)
    } else {
        getNasa();
    }
}

//  get and display nasa images from API
function getNasa() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=p027dcXDBzAB1YTjEeaiAA2djDcIYC5joRZl66GR&count=1`)
        .then(response => response.json())
        .then(data => {
            nasaFixedImage.src = data[0].hdurl;
            previousNasaImages.push(nasaFixedImage.src)
        })
}

// buttons over the nasa images
prevNasaBtn.addEventListener('click', function previousNasa(event) {
    event.preventDefault()
    if (nasaArrayNumber >= 0) {
        nasaArrayNumber--;
        nasaFixedImage.src = previousNasaImages[nasaArrayNumber];
    }
})

newNasaButton.addEventListener('click', function nextNasa(event) {
    event.preventDefault()
    nasaArrayNumber++

    //check if are at end of array. If at end get new image, otherwise step through array
    if (nasaArrayNumber >= previousNasaImages.length) {
        getNasa();
    } else {
        nasaFixedImage.src = previousNasaImages[nasaArrayNumber]
    }
});

// Quotes 

//  Get and Display quotes images from API
function getQuote() {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
        .then(response => response.json())
        .then(quoteIndex => {
            let displayQuote = quoteIndex.data[0].quoteText;
            quoteEl.textContent = displayQuote;
            previousQuotes.push(displayQuote)
        })
}

//decrements through quotes array
previousQuoteBtn.addEventListener('click', function (event) {
    event.preventDefault()

    if (quoteArrayNumber >= 0) {
        quoteArrayNumber--
        quoteEl.textContent = previousQuotes[quoteArrayNumber]
    }
})

// next button clickable and stores img into local storage 
nextQuoteBtn.addEventListener("click", function (event) {
    event.preventDefault();

    quoteArrayNumber++

    // check if are at end of array. If at end get new image, otherwise step through array
    // quote array number should not be more than the length, but check just in case
    if (quoteArrayNumber >= previousQuotes.length) {
        getQuote();
    } else {
        quoteEl.textContent = previousQuotes[quoteArrayNumber]
    }
});

// Generates poster, and stores the images into local storage 
let generate = document.getElementById("generatePosterBtn")
generate.addEventListener("click", function (event) {
    event.preventDefault();
    let imageUrl = nasaFixedImage.src;
    let quote = quoteEl.textContent;
    localStorage.setItem("imageUrl", imageUrl);
    localStorage.setItem("quote", quote);
    window.location.href = "./poster.html";
});