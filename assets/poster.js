let buttonLinkEl = document.getElementById('title-image')
let modal = document.getElementById('modal-box')
let titleEl = document.getElementById('title')
let submitButton = document.getElementById('submit')
let inputValue = document.getElementById('input-box')

//open the modal
buttonLinkEl.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "flex";

})

//close the modal and display title element
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    modal.style.display = "none";
    titleEl.style.display = "block";
    titleEl.textContent = inputValue.value;



<<<<<<< HEAD
let savedQuote = localStorage.getItem("quote");
=======
})
>>>>>>> 3191719e0ab8822cdd8f625a319a8e58d22cf60a
