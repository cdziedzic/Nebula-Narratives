let savedQuote = localStorage.getItem("quote");
let displayQuote = document.getElementById("displayQuote");

let savedImageUrl = localStorage.getItem("imageUrl");
let displayImg = document.getElementById("displayImg");

let buttonLinkEl = document.getElementById('title-image');
let modal = document.getElementById('modal-box');
let titleEl = document.getElementById('title');
let submitButton = document.getElementById('submit');
let inputValue = document.getElementById('input-box');

// displays the quote
if(savedQuote){
    displayQuote.textContent=savedQuote;
}

//display image on poster 
if(savedImageUrl){
    displayImg.src= savedImageUrl;
}
  
//open modal
buttonLinkEl.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "flex";
});

//close the modal and display title element
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = "none";
    titleEl.style.display = "block";
    titleEl.textContent = inputValue.value;
});


