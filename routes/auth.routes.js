const {Router} = require('express')
const router = Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = router;

//Обработка авторизации

//api/auth/login

router.post('/login', async (req, res) => {
    try {
        const {login, password} = req.body;

        // let errors = validate(login, password)
        // console.log(errors);
        // if (!errors) {
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
                res.json({ message : "Неверный логин или пароль"});
            }
            
        // } 
        // else {
        //     res.json(errors)
        // }

    } catch (e) {
        res.status(500).json({ message: e.message})
    }
    res.end()
})
