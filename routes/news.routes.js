const {Router, json} = require('express')
const News = require('../models/News')
const router = Router()
const {cyrillicToTranslit} = require('cyrillic-to-translit-js')
const auth = require('../middleware/auth.middleware')

module.exports = router;
//Создание новости 

//api/news/createNews

router.post('/createNews', auth, async (req, res) => {
    try {
        
        const {newsTitle, newsContent, resource_id} = req.body

        newsUrl = cyrillicToTranslit().transform(newsTitle.toLowerCase(),"-")

        const now = new Date

        const news = new News({
            _id: new mongoose.Types.ObjectId(),
            newsTitle,
            newsContent,
            newsUrl,
            now,
            resource_id
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
        const news = await News.find().skip((page-1)*10).limit(10)
        res.status(200).json(news)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

//Редактирование новостей

//api/news/edit

router.post('/edit', async (req, res) => {
    try {
        
        const {id, newsTitle, newsContent, newsUrl, added_at} = req.body
        const news = await News.find({_id: id})
        res.status(200).json(news)



        News.updateOne({_id: id}, {newsTitle: newsTitle, newsContent: newsContent, newsUrl: newsUrl,added_at: added_at  })

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

        model.findOne({name: new RegExp('^'+newsTitle+'$', "i")}, function(err, doc) {
            console.log(json(doc))
          });

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Удаление новости

//api/news/delete

router.post('/delete', async (req, res) => {
    try {
        
        const {id} = req.body

        model.findOne({name: new RegExp('^'+newsTitle+'$', "i")}, function(err, doc) {
            console.log(json(doc))
          });

        News.remove({_id:id}, function(err, result){
             
            if(err) return console.log(err);
             
            console.log(result);
        });

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
