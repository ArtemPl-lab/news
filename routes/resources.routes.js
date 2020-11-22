const {Router} = require('express')
const Resource = require('../models/Resource')
const router = Router()
const auth = require('../middleware/auth.middleware')
const {sitemapCheck} = require('../includes/sitemap_check')

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

        sitemapCheck(sitemapLink)

        res.status(201).json({ resource })


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