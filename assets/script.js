let baseUrl = "https://quote-garden.onrender.com/api/v3/quotes";
let queryParameters = {
author: string (Optional),
genre: string (Optional),
count: number (Optional),
}


fetch("https://quote-garden.onrender.com/api/v3/quotes")
.then(function(response){
    
return response.json()     
})
.then(function (quoteIndex) {
    console.log(quoteIndex)
    let quote = document.createElement("quotes")

})