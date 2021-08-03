
function searchHandler(event){
    event.preventDefault();
    let search = document.getElementById('searchInput').value;
    let url = ('https://www.googleapis.com/customsearch/v1?key=' + API_KEY + '&cx=' + cv + '&q=' + search)
    fetch(url)  
    .then(response => response.json())
    .then(data => sortResults(data))
    .then(console.log(data))
    .catch(error => console.log(error))
}

function sortResults(jsonFile) {
    let myData = JSON.parse(jsonFile)

}

class results {
    constructor(title, link, snippet, formattedUrl){
    this.title =title;
    this.linke = link;
    this.snippet = snippet;
    this.formattedUrl = formattedUrl
    }
}

let cv = '6bec81dadc88ed1d3'
let API_KEY = 'AIzaSyBLQ6G4cY74__pZ0pfUiBV7qlBgxbssheo'
const form = document.getElementById('form');
form.addEventListener('submit', searchHandler);