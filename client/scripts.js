//function to handle submit and page reload
function handleSubmitReload(event){
    searchHandler(event)
    //loadResults(event)
}

function searchHandler(event){
    event.preventDefault();
    //get search value
    let search = document.getElementById('searchInput').value;

    //create the url
    let url = ('https://www.googleapis.com/customsearch/v1?key=' + API_KEY + '&cx=' + cx + '&q=' + search)
    fetch(url)  
    .then(response => response.json())

    //call function to get the specific results needed
    .then(sortResults)
    .catch(error => console.log(error))
}

function sortResults(data) {
    console.log(data)
    //loop over first 10 results and add to final results object
    for(let i=0; i< 10; i++) {
            let a = new Result(`${data.items[i].title}`, `${data.items[i].snippet}`, `${data.items[i].formattedUrl}`);
            finalResults[i] = a
    } 
    console.log(finalResults)
}

// class to put results in 
class Result {
    constructor(title, snippet, formattedUrl){
    this.title = title;
    this.snippet = snippet;
    this.formattedUrl = formattedUrl
    }
}

//object for all the results to be wrapped in
let finalResults = {}
let finalResult;


//RELOAD PAGE FUNC
function luckyWebsiteReroute(event) {
    event.preventDefault()
    searchHandlerOne(event)
    window.location.replace(`${finalResult}`);
}

//searches for one result
function searchHandlerOne(event){
    event.preventDefault();
    //get search value
    let search = document.getElementById('searchInput').value;

    //create the url
    let url = ('https://www.googleapis.com/customsearch/v1?key=' + API_KEY + '&cx=' + cx + '&q=' + search)
    fetch(url)  
    .then(response => response.json())

    //call function to get the specific result needed
    .then(sortResult)
    .catch(error => console.log(error))
}

//gives back top url
function sortResult(data) {
    //get top result
    finalResult = `${data.items[i].formattedUrl}`
} 






//keys for search
let cx = '6bec81dadc88ed1d3'
let API_KEY = 'AIzaSyBLQ6G4cY74__pZ0pfUiBV7qlBgxbssheo'

//watch for submission of form
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmitReload);
//form.addEventListener('click', luckyWebsiteReroute )

//module.exports = {
    //searchHandler
//}