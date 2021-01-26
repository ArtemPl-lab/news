const {Router, json} = require('express')
const News = require('../models/News')
const router = Router()
const cyrillicToTranslit = require('cyrillic-to-translit-js')
const auth = require('../middleware/auth.middleware')
const mongoose = require("mongoose")


module.exports = router;

//Создание новости 

//api/news/createNews

router.post('/createNews', async (req, res) => {
    try {
        
        const {newsTitle, newsContent, tabTitle, tabDesc, longDesc } = req.body

        let newsUrl = cyrillicToTranslit().transform(newsTitle.toLowerCase(),"-");
        newsUrl = newsUrl.replace(/[&\/\\#, +()$~.'":*<>{}]/g, '');

        let now = new Date
        now = now.toDateString().replace(/[^ ]+ /, '')

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
            pinned : false
        })

        news.save((err) => {
            // if (err) console.log("Уже есть в бд");
        })

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
        let news = await News.find({visible: true}).sort({pinned: -1, '_id': -1}).skip((page-1)*10);
        res.status(200).json(news)

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.post('/likedNews', async (req, res) => {
    try {
        
        const { newsIdArray } = req.body;
        let news = [];
        for(id of newsIdArray){
            news.push(await News.findOne({_id: id}));
        }
        res.status(200).json(news)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
//Редактирование новостей

//api/news/edit

router.post('/edit', async (req, res) => {
    try {
        let {_id,newsTitle, newsContent, newsUrl, resource_id, tabTitle, tabDesc, longDesc, resourceUrl, visible, pinned, added_at} = req.body
        
        News.findById({_id}, (err,news) => {
            if (err) return console.log(err);

            newsTitle = newsTitle ? newsTitle : news.newsTitle
            newsContent = newsContent ? newsContent : news.newsContent
            newsUrl = newsUrl ? newsUrl : news.newsUrl 
            added_at = added_at ? added_at : news.added_at
            tabTitle = tabTitle ? tabTitle : news.tabTitle
            tabDesc = tabDesc ? tabDesc : news.tabDesc
            longDesc = longDesc ? longDesc : news.longDesc
            visible = visible ? visible : news.visible
            resourceUrl = resourceUrl ? resourceUrl : news.resourceUrl
            pinned = pinned ? pinned : news.pinned
            added_at = added_at ? added_at : news.added_at

            console.log(news.newsTitle);

            News.findByIdAndUpdate({_id}, {
                newsTitle, 
                newsContent, 
                newsUrl,
                added_at, 
                tabTitle,  
                tabDesc, 
                longDesc,
                visible,
                resourceUrl,
                pinned
            }, (err, result) => {
                if (err) return console.log(err);
                // console.log(result);
            })

            console.log(news);

            res.status(200).json({ message: "Новость обновлена" })
        })
        
    } catch (e) {
        console.log(e)
    }
})

//Страница новости

//api/news/page

router.post('/page', async (req, res) => {
    try {
        const {id} = req.body
        const news = await News.findOne({newsUrl: id})
        
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

        const searching = await News.find({$and : [{newsTitle: new RegExp(newsTitle, "i")}, {visible: true}]});

          res.status(200).json(searching)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Удаление новости

//api/news/delete

router.post('/delete', async (req, res) => {
    try {        
        const {id} = req.body

        News.findByIdAndDelete({_id:id}, function(err, result){
             
            if(err) return console.log(err);
             
            // console.log(result);
        });

        res.status(200).json({ message: 'Новость удалена' })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Вывод всех закрепленных новостей

//api/news/pinned-news/

router.post('/pinned-news', async (req, res) => {
    try {

        const news = await News.find({$and : [{pinned: true}, {visible: true}]})

        res.status(200).json(news)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
router.post('/pin', async (req, res) => {
    try {
        const { id } = req.body;
        let news = await News.findById(id);
        news.pinned = !news.pinned;
        await news.save();
        console.log(news);

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


//Удаление всех новостей

//api/news/deleteAll

router.post('/deleteAll', auth, async (req, res) => {
    try {        


        News.remove({}, function(err, result){
             
            if(err) return console.log(err);
             
            // console.log(result);
        });

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
