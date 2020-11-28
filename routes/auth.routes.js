const {Router} = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = Router()
const bcrypt = require('bcrypt')
const { PostAdd } = require('@material-ui/icons')

module.exports = router;


//Обработка авторизации

//api/auth/login


router.post('/login', async (req, res) => {
    try {
        const {login, password} = req.body
        console.log(req.body);
        const user = await User.findOne({ login })

        const isMatch = bcrypt.compare(password, user.password)
        
        if (!isMatch) {
            return res.json({ message : "Неверный логин или пароль" })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )
        console.log(isMatch)

        res.json({ token, userId: user.id })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})