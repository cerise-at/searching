//import { finalResults } from './scripts.js';

export function loadResults(finalResults) 
{
    window.location.href = "search.html";
    window.onload(resultsTable)

    function resultsTable(finalResults)
    {
    // let results = document.getElementById('searchresultsarea')
        for (let i = 0; i <10; i++){

            let title = finalResults[i].title.link(finalResults[i].formattedUrl)
            let snippet = finalResults[i].snippet
            const para = document.createElement("p");
            const node = document.createTextNode(title);
            para.appendChild(node);
            const paraTwo = document.createElement("p");
            const nodeTwo = document.createTextNode(snippet);
            paraTwo.appendChild(nodeTwo);
            const element = document.getElementById("searchresultsarea");
            element.appendChild(para, paraTwo);
        }
    }
}

module.exports = { loadResults }
