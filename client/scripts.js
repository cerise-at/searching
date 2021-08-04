
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
    //loop over first 10 results
    for(let i=0; i< 10; i++) 
    {
        //see if it has a cahce id:
        if (data.items[i].cacheId = true)
        {
        //give result a name from cacheId
            let a = data.items[i].cacheId
            
            //make it a new class and add the data
            a = new Result(`${data.items[i].title}`, `${data.items[i].snippet}`, `${data.items[i].formattedUrl}`);
            finalResults[i] = a
            console.log(finalResults);
        // give Result a name from metadata
        } else {
            let b = data.items[i].pagemap.thing.name
            //make new class and add data
            b = new Result(`${data.items[i].title}`, `${data.items[i].snippet}`, `${data.items[i].formattedUrl}`);
            //add results object to final result object
            finalResults[i] = b
        }
      
    } 
}

// class to put results in 
class Result {
    constructor(title, snippet, formattedUrl){
    this.title = title;
    this.snippet = snippet;
    this.formattedUrl = formattedUrl
    }
}

//at some point put the objects all into this object so that we can export it to the html file all in one go 
//at the moment they are in ten seperate objects!
let finalResults = {}

//keys for search
let cx = '6bec81dadc88ed1d3'
let API_KEY = 'AIzaSyBLQ6G4cY74__pZ0pfUiBV7qlBgxbssheo'

//watch for submission of form
const form = document.getElementById('form');
form.addEventListener('submit', searchHandler);

