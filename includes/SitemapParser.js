var needle = require('needle');

class SitemapParser{
    constructor(
        sitemapAddress = "",
        stepCallback = () => {},
        endCallback = () => {}
    )
    {
        this.sitemapAddress = sitemapAddress;
        this.stepNumber = 0;
        this.stepCallback = stepCallback;
        this.endCallback = endCallback;
        this.stack = [];
    }
    parseSitemapToSet(sitemapObj, sitemapSet){
        sitemapObj.name === 'loc' ? sitemapSet.add(sitemapObj.value) : sitemapObj.children.map(child => this.parseSitemapToSet(child, sitemapSet));
    }
    async parseSitemap(link){
        let sitemapLinks = new Set();
        const response = await needle("get", link);
        if(response.parser === 'xml'){
            this.parseSitemapToSet(response.body, sitemapLinks);
            for(let item of sitemapLinks){
                let parsedSitemap = await this.parseSitemap(item);
                if(parsedSitemap.size === 0){ 
                    this.stack = this.stack.concat([...sitemapLinks]);
                    this.stepNumber++;
                    this.stepCallback({
                        currentPage: this.stepNumber,
                        pagesFound: this.stack.length
                    });
                    break;
                }
                sitemapLinks = new Set([...sitemapLinks, ...parsedSitemap]);
            }
        }
        return sitemapLinks;
    }
    async startParse(){
        await this.parseSitemap(this.sitemapAddress);
        this.stack = [...new Set(this.stack)];
        this.endCallback(this.stack);
        return this.stack;
    }
}

let parser = new SitemapParser("https://www.forbes.ru/sitemap.xml", console.log);
parser.startParse();