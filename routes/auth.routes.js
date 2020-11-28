const express = require("express")
const {Router} = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = Router()
const bcrypt = require('bcrypt')

const validate = require("../includes/validate")

module.exports = router;

const app = express()

app.use(express.json());

//Обработка авторизации

//api/auth/login

router.post('/login', async (req, res) => {
    try {
        const {login, password} = req.body

        let errors = validate(login, password)

        if (!errors) {
            const user = await User.findOne({ login })

            if (user) {

                const isMatch = password == user.password

                if (!isMatch) {
                    return res.json({ message : "Неверный логин или пароль" })
                }

                const token = jwt.sign(
                    { userId: user.id },
                    config.get('jwtSecret'),
                    { expiresIn: '1h' }
                )


                res.json({ token, userId: user.id })
            }
            else {
                console.log("Неверный логин или пароль");
            }
            
        } 
        else {
           console.log(errors)
        }

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
})