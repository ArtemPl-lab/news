const {Router} = require('express')
const Resource = require('../models/Resource')
const router = Router()
const auth = require('../middleware/auth.middleware')
<<<<<<< HEAD
const {sitemapCheck} = require('../includes/sitemap_check')
const firstCheck = require('../firstCheck');
=======
const {parseIntoBd} = require('../includes/parseIntoBd')

>>>>>>> 60a1d7e45f38b79e85dbb59789763198eb79dbd7
//Добавление сайта 

//api/resources/addResource

module.exports = router;

router.post('/addResource', auth, async (req, res) => {
    try {
        
        const {regularTitle, 
            sitemapLink, 
            regularContent, 
            siteTitle} = req.body

        const resource = new Resource({
            _id: new mongoose.Types.ObjectId(),
            regularTitle, 
            sitemapLink, 
            regularContent, 
            siteTitle
        })

        await resource.save()

<<<<<<< HEAD
        const socket = await firstCheck(sitemapLink, {
            regularTitle,
            regularContent
        });
=======
        parseIntoBd(sitemapLink)
>>>>>>> 60a1d7e45f38b79e85dbb59789763198eb79dbd7

        res.status(201).json({ socket })


    } catch (e) {
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

router.post('/edit', async (req, res) => {
    try {
        
        const {id, regularTitle, sitemapLink, regularContent, siteTitle} = req.body
        const resource = await Resource.find({_id: id})
        res.status(200).json(resource)


        Resource.updateOne({_id: id}, {regularTitle: regularTitle, sitemapLink: sitemapLink, regularContent: regularContent, siteTitle: siteTitle  })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})

//Страница сайта-ресурса

//api/resources/page

router.post('/page', async (req, res) => {
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

router.post('/delete', async (req, res) => {
    try {
        
        const {id} = req.body

        Resource.findByIdAndDelete({_id:id}, function(err, result){
             
            if(err) return console.log(err);
             
            console.log(result);
        });

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
