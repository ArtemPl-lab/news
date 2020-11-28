const {Router} = require('express')
const Resource = require('../models/Resource')
const router = Router()
const auth = require('../middleware/auth.middleware')
const {parseIntoBd} = require('../includes/parseIntoBd')

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

        // parseIntoBd(sitemapLink)

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

router.post('/edit', auth, async (req, res) => {
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

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})
