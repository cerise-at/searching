
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

module.exports = {
    Result,
    finalResults,
    finalResult,
    cx,
    API_KEY
}
