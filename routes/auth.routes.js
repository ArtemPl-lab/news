const {Router} = require('express')
const router = Router()

router.post('/login', (req, res) => {
    res.status(200).json({ message: req.body }).send();
})

module.exports = router;