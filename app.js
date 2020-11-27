const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const mongoose = require('mongoose')

const config = require('config')



//Подключаем роуты 


app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use('/api/news', require('./routes/news.routes.js'))
app.use('/api/auth', require('./routes/auth.routes.js'))
app.use('/api/resources', require('./routes/resources.routes.js'))


const PORT = 8000


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

