const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
global.fetch = require('jest-fetch-mock');

//const {searchHandler} = require('./scripts.js');
//jest.mock(searchHandler)

// test for search bar submitting
describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

describe('form', () => {        
    test('form has submit button which has a searchHandler function', () => {
        let submitForm = document.getElementById('formSubmit');
        expect(submitForm).toContain(searchHandler)
    })
})
describe('index.html', () => {
    test('form has submit button which has a loadnewpage function', () => {
        let pageResults = document.getElementById('formSubmit');
        expect(submitForm).toContain(loadResults)
    })
})
describe('index.html', () => {
    test('form has a button which has a function that takes you straight to a website', () => {
        let luckyFeeling = document.getElementById('feelingLucky');
        expect(luckyFeeling).toContain(luckyWebsiteReroute)
    })
})
})    


//test for sorting through results



//test for loading new page after submitting

//test for chosing one result

//test for diverting to a new page