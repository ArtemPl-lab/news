const {Router, json} = require('express')
const News = require('../models/News')
const router = Router()
const cyrillicToTranslit = require('cyrillic-to-translit-js')
const auth = require('../middleware/auth.middleware')
const mongoose = require("mongoose")

module.exports = router;

//Создание новости 

//api/news/createNews

router.post('/createNews', auth, async (req, res) => {
    try {
        
        const {newsTitle, newsContent, tabTitle, tabDesc, longDesc, resource_id, resourceUrl} = req.body

        const newsUrl = cyrillicToTranslit().transform(newsTitle.toLowerCase(),"-");

        const now = new Date

        const news = new News({
            _id: new mongoose.Types.ObjectId(),
            newsTitle,
            newsContent,
            newsUrl,
            now,
            tabTitle,
            tabDesc,
            longDesc,
            visible : true,
            pinned : false,
            resource_id : resource_id,
            resourceUrl
        })

        await news.save()

        res.status(201).json({ news })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Вывод всех новостей на главной странице

//api/news/news

router.post('/news', async (req, res) => {
    try {
        
        const {page} = req.body
        console.log(req.body);
        const news = await News.find().skip((page-1)*10).limit(10)

        res.status(200).json(news)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

//Редактирование новостей

//api/news/edit

router.post('/edit', auth, async (req, res) => {
    try {
        const {newsTitle, newsContent, newsUrl, resource_id, tabTitle, tabDesc, longDesc, resourceUrl, visible, pinned} = req.body
        const news = await News.find({_id: id})
        
        News.updateOne({_id: id}, {
            newsTitle: newsTitle, 
            newsContent: newsContent, 
            newsUrl: newsUrl,
            added_at: added_at, 
            resource_id : resource_id, 
            tabTitle: tabTitle, 
            tabDesc: tabDesc, 
            longDesc : longDesc,
            visible : visible,
            resourceUrl : resourceUrl,
            pinned : pinned
        })

        res.status(200).json(news)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

//Страница новости

//api/news/page

router.post('/page', async (req, res) => {
    try {
        const {id} = req.body
        const news = await News.find({_id: id})
        
        res.status(200).json(news)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Поиск новости

//api/news/search

router.post('/search', async (req, res) => {
    try {
        
        const {newsTitle} = req.body

        News.find({name: new RegExp('^'+newsTitle+'$', "i")}, function(err, doc) {
            if (err) return console.log(err);

            console.log(json(doc))
          });

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Удаление новости

//api/news/delete

router.post('/delete', auth, async (req, res) => {
    try {        
        const {id} = req.body

        News.remove({_id:id}, function(err, result){
             
            if(err) return console.log(err);
             
            console.log(result);
        });

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Вывод всех закрепленных новостей

//api/news/pinned-news/

router.post('/pinned-news', async (req, res) => {
    try {

        const news = await News.find({ pinned : true })

        res.status(200).json(news)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Вывод всех скрытых новостей

//api/news/hidden-news/

router.post('/hidden-news', async (req, res) => {
    try {

        const news = await News.find({ visible : false })

        res.status(200).json(news)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})