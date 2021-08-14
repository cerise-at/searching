// const express = require('express')
// const app = express()
// const cors = require('cors')
// const quotes = require('./data')
// app.use(cors());
import { loadResults } from './searchScripts.js';

//called when search is pressed
function searchHandler(event){
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
function sortResults(data) {
    console.log(data)
    //loop over first 10 results and add to final results object
    for(let i=0; i< 10; i++) {
            let a = data.items[i].cacheId;
            a = new Result(`${data.items[i].title}`, `${data.items[i].snippet}`, `${data.items[i].formattedUrl}`);
            finalResults[i] = a
    } 
    loadResults(finalResults)
    
    
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
    finalResult = `${data.items[0].link}`;
    window.location.replace(`${finalResult}`)
} 



class Result {
    constructor(title, snippet, formattedUrl){
    this.title = title;
    this.snippet = snippet;
    this.formattedUrl = formattedUrl
    }
}

export let finalResults = {}
let finalResult;

let cx = '6bec81dadc88ed1d3'
let API_KEY = 'AIzaSyDV7_ce9jjLQav6yqL_IPHm0PjXW-eXBtM'

//watch for submission of form
const form = document.getElementById('form');
form.addEventListener('submit', searchHandler);
const myBtn = document.getElementById('feelingLucky');
myBtn.addEventListener('submit', searchHandlerOne );

module.exports = { searchHandlerOne, searchHandler }
