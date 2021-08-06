import { Result,finalResults,finalResult,cx,API_KEY } from '/data.js';


//called when search is pressed
export function searchHandler(event){
    event.preventDefault();
    //get search value
    let search = document.getElementById('searchInput').value;
    console.log(search)

    //create the url
    let url = ('https://www.googleapis.com/customsearch/v1?key=' + API_KEY + '&cx=' + cx + '&q=' + search)
    fetch(url)  
    .then(response => response.json())

    //call function to get the specific results needed
    .then(sortResults)
    .catch(error => console.log(error))
}

//adds results to new object
export function sortResults(data) {
    console.log(data)
    //loop over first 10 results and add to final results object
    for(let i=0; i< 10; i++) {
            let a = data.items[i].cacheId;
            a = new Result(`${data.items[i].title}`, `${data.items[i].snippet}`, `${data.items[i].formattedUrl}`);
            finalResults[i] = a
    } 
}


//searches for one result
export function searchHandlerOne(event){
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
export function sortResult(data) {
    //get top result
    finalResult = `${data.items[0].link}`;
    window.location.replace(`${finalResult}`)
} 

export function loadResults(finalResults) {
    let results = document.getElementById('searchresultsarea')
    for (let i = 0; i <10; i++){
        let title = finalResults
    }

}

// class to put results in 
export class Result {
    constructor(title, snippet, formattedUrl){
    this.title = title;
    this.snippet = snippet;
    this.formattedUrl = formattedUrl
    }
}

//object for all the results to be wrapped in
export let finalResults = {}
export let finalResult;

export let cx = '6bec81dadc88ed1d3'
export let API_KEY = 'AIzaSyDV7_ce9jjLQav6yqL_IPHm0PjXW-eXBtM'

//module.exports = {
//     searchHandler,
//     sortResults,
//     searchHandlerOne,
//     sortResult
// }