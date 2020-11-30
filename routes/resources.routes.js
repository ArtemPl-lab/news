const {Router} = require('express')
const Resource = require('../models/Resource')
const router = Router()
const auth = require('../middleware/auth.middleware')
const firstCheck = require('../firstCheck');
const mongoose = require('mongoose')

module.exports = router;

//Добавление сайта 

//api/resources/addResource

router.post('/addResource', auth, async (req, res) => {
    try {
        
        const {regularTitle, 
            sitemapLink, 
            regularContent, 
            siteTitle,
            checkingPeriod,
            regularImg} = req.body;
        const resource = new Resource({
            _id: new mongoose.Types.ObjectId(),
            regularTitle, 
            sitemapLink, 
            regularContent, 
            siteTitle,
            checkingPeriod,
            regularImg
        })

        await resource.save()

        firstCheck(sitemapLink, {
            title: regularTitle,
            content: regularContent,
            img: regularImg, 
        });

        res.status(201);


    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Вывод сайтов-ресурсов для админа

//api/resources/resources

router.post('/resources', auth, async (req, res) => {
    try {
        
        const resources = await Resource.find()
        res.status(200).json(resources)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})


//Редактирование сайта

//api/resources/edit

router.post('/edit', auth, async (req, res) => {
    try {
        
        const {id,
            regularTitle, 
            sitemapLink, 
            regularContent, 
            siteTitle,
            checkingPeriod,
            regularImg} = req.body
            
        const resource = await Resource.find({_id: id})

        Resource.findOneAndUpdate({_id : id}, {
            regularTitle : regularTitle || resource.regularTitle, 
            sitemapLink : sitemapLink || resource.sitemapLink, 
            regularContent : regularContent || resource.regularContent, 
            siteTitle : siteTitle || resource.siteTitle,
            checkingPeriod : checkingPeriod || resource.checkingPeriod,
            regularImg : regularImg || resource.regularImg
        }, (err, result) => {
            if (err) return console.log(err);
            console.log(result);
        })

        res.status(200).json({ message: "Ресурс обновлён" })
    } catch (e) {
        console.log(e);
    }
})

//Страница сайта-ресурса

//api/resources/page

router.post('/page', auth, async (req, res) => {
    try {
        
        const {id} = req.body
        const resource = await Resource.find({_id: id})

        res.status(200).json(resource)

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})



//Удаление сайта

//api/resources/delete

router.post('/delete', auth, async (req, res) => {
    try {
        
        const {id} = req.body

        Resource.findByIdAndDelete({_id:id}, function(err, result){
             
            if(err) return console.log(err);
             
            console.log(result);
        });
        res.status(200).json({ message: 'Ресурс удалён' })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
