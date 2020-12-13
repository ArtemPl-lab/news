var cheerio = require('cheerio');

class PageParser{
    constructor(elements){
        this.elements = elements;
    }
    startParse(html){
        try {
            let results = {};
        var $ = cheerio.load(html);
        for(let key in this.elements){
            results = {
                ...results,
                [key]: (this.elements[key].includes('img') ? $(this.elements[key]).first().attr('src') : $(this.elements[key]).text().trim())
            }
        }
        return results;
        } catch (e) {
            console.log(e);
        }
        
    }
}

module.exports = PageParser;