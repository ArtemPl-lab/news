const mongoose = require('mongoose');

const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const WebSocketServer = require('websocket').server;
const http = require('http');

global.connections = [];
global.sendMessage = (message) => {
    connections.map(connection => {
        connection.sendUTF(JSON.stringify(message));
    });
}

const server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});


//Подключаем роуты 

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/news', require('./routes/news.routes.js'))
app.use('/api/auth', require('./routes/auth.routes.js'))
app.use('/api/resources', require('./routes/resources.routes.js'))


const PORT = 5000


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
        server.listen(5001);
        wsServer = new WebSocketServer({
            httpServer: server,
            autoAcceptConnections: false
        });
        wsServer.on('request', async request => {
            global.connections.push(request.accept('echo-protocol'));
        });
        
    } catch(e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

