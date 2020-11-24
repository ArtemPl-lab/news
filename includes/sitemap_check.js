const Resource = require('../models/Resource')
const News = require('../models/News')
const {cyrillicToTranslit} = require('cyrillic-to-translit-js')
const needle = require('needle')
const cheerio = require('cheerio')
const axios = require('axios')
const mongoose = require('mongoose')

async function sitemapCheck(sitemapLink) {
    
    try {
        

        const resource = Resource.find({sitemapLink: sitemapLink});
        
        let linksToPagesArray = new Set();
        const getLoc = sitemapDomObj => {
        if(sitemapDomObj.name === 'loc') linksToPagesArray.add(sitemapDomObj.value);
        else sitemapDomObj.children.map(child => getLoc(child));
        
        }

        const parse = (link) => {
            needle.get(link, function(err, res) {
                if (!err && res.statusCode == 200) {

                    let newsTitle = res.body.match('/<title>([\s\S]*?)<\/title>/')
                    let newsContent = res.body.match('/<div>([\s\S]*?)<\/div>/')
                    let now = new Date

                    const news = new News({
                            _id: new mongoose.Types.ObjectId(),
                            newsTitle,
                            newsContent,
                            newsUrl : link,
                            now,
                            resource_id: resource._id
                        })
    
                        

                        news.save(function(err){
                             
                            if(err) return console.log(err);
                             
                            console.log("Сохранен объект");
                        });
                }
            });
        }

        needle.get(sitemapLink, function(err, res) {
            if (!err && res.statusCode == 200){
                getLoc(res.body)
                linksToPagesArray.forEach( link => {
                    
                    if (!News.find({newsUrl: link})) { 
                        
                        parse(link)
                        
                    }
                    
                });
            }
        })        
}
    catch(e) {
        console.log(e);
    }
} 


sitemapCheck("https://www.forbes.ru/sitemap.xml?page=1")