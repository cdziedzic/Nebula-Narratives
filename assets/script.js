let nasaBox = document.getElementById('nasa-images');
let nasaFixedImage = document.getElementById('nasa-img');
let newNasaButton = document.getElementById('next-img-button');
let quoteEl = document.getElementById("quotes");
let nextQuoteBtn = document.getElementById("next-quote-button");
let prevNasaBtn = document.getElementById('prev-img-button');
let previousNasaImages = [];
let nasaArrayNumber =0;
let previousQuoteBtn = document.getElementById('prev-quote-button');
let previousQuotes = [];
let quoteArrayNumber = 0;

getNasa();
getQuote();


//  get and display nasa images from API
function getNasa() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=p027dcXDBzAB1YTjEeaiAA2djDcIYC5joRZl66GR&count=1`)
        .then(response => response.json())
        .then(data => {
            
            nasaFixedImage.src = data[0].hdurl;
            previousNasaImages.push(nasaFixedImage.src)
            
        }
        )}
//function for clicking next button
function nextNasa() {
    nasaArrayNumber++
    
    //check if are at end of array. If at end get new image, otherwise step through array
    if (previousNasaImages.length === nasaArrayNumber) {
        getNasa();
    }
    
    else { 
        nasaFixedImage.src = previousNasaImages[nasaArrayNumber]
    }

}


//function for previous nasa button
function previousNasa() {
    // if (nasaArrayNumber < 0) {
    //     alert("no more images")
    //     nasaArrayNumber++
    // }
    
    nasaArrayNumber--;
    nasaFixedImage.src = previousNasaImages[nasaArrayNumber];
    
}


// buttons over the nasa images
prevNasaBtn.addEventListener('click', previousNasa)
newNasaButton.addEventListener('click', nextNasa);

// Retrive and display image 
// let  savedImageUrl = localStorage.getItem("nasa-image");
//     if (savedImageUrl) {
//     nasaFixedImage.textContent = savedImageUrl;
// }

// Quotes 


//  Get and Display quotes images from API
function getQuote() {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
    .then(response => response.json())
    .then(quoteIndex => {
        let displayQuote = quoteIndex.data[0].quoteText;
        quoteEl.textContent = displayQuote;
        
        previousQuotes.push(displayQuote)
    }
    )}
    
//function for next quote button
function nextQuote() {
    quoteArrayNumber++
   
   //check if are at end of array. If at end get new image, otherwise step through array
    if (previousQuotes.length === quoteArrayNumber) {
        getQuote();
    }
    
    else { 
        quoteEl.textContent = previousQuotes[quoteArrayNumber]
    }

}

// next button clickable and stores img into local storage 
nextQuoteBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (previousQuotes.length === quoteArrayNumber) {
        getQuote();
    }
    
    else { 
        nextQuote()
    }
    
});
//decrements through quotes array
previousQuoteBtn.addEventListener('click', function(event) {
    event.preventDefault()
    quoteArrayNumber--
    quoteEl.textContent = previousQuotes[quoteArrayNumber]

})

// Check if there's a saved quote in local storage and display it
// let savedQuote = localStorage.getItem("quote");
// if (savedQuote) {
//     quoteEl.textContent = savedQuote;
// }

// Generates poster, and stores the images into local storage 
let generate = document.getElementById("generatePosterBtn")
generate.addEventListener("click", function (event){
    event.target
    let  imageUrl = nasaFixedImage.src;
    let quote = quoteEl.textContent;
    localStorage.setItem("imageUrl", imageUrl);
    localStorage.setItem("quote", quote);
    window.location.href = "./poster.html";
}
);
 