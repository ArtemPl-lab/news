const express = require('express')
const app = express()

const mongoose = require('mongoose')

const config = require('config')

app.use(express.json({ extended: true }))

//Подключаем роуты 

app.use('/api/news', require('.routes/news.routes.js'))
app.use('/api/auth', require('.routes/auth.routes.js'))

const PORT = config.get('port') || 5000


async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`App started on PORT ${PORT}`);
        })
    } catch(e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

