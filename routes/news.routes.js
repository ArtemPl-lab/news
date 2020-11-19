const {Router} = require('express')
const News = require('../models/News')
const router = Router()
const {cyrillicToTranslit} = require('cyrillic-to-translit-js')
const auth = require('../middleware/auth.middleware')

//Создание новости 

//api/news/createNews

router.post('/createNews', auth, async (req, res) => {
    try {
        
        const {newsTitle, newsContent} = req.body

        newsUrl = cyrillicToTranslit().transform(newsTitle.toLowerCase(),"-")

        const news = new News({
            newsTitle, newsContent, newsUrl 
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