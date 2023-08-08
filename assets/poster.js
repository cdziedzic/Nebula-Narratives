let buttonLinkEl = document.getElementById('save-image')
let modal = document.getElementById('modal-box')

buttonLinkEl.addEventListener('click', function (event) {
    event.preventDefault()
    modal.style.display = "flex"

})

