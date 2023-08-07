
console.log("Cynthia")
console.log('Chris Dziedzic');

console.log("Jocelin");


// fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2018-10-22")
// .then(function(response){
    
// return response.json()     
// })
// .then(function (dogFact) {
//     console.log(dogFact)
// })

fetch("https://poetrydb.org/title")
.then(function(response){
    
return response.json()     
})
.then(function (dogFact) {
    console.log(dogFact)
});