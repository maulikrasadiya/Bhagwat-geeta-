const express = require("express");
const bodyparser = require("body-parser");
const server = express();
const mongooses = require('./modules/module')
const multer = require('multer');
const d = require('./controllers/controller')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './views/uploads');
    },
    filename: (req, file, cb) => {
        const renameFile = Date.now()+ '-' + Math.round(Math.random() * 10000) + file.originalname;
        cb(null, renameFile);
    }
});

const fileUpload = multer({storage});

server.set('view engine','ejs');
server.use(bodyparser.urlencoded({extended:true}));

const routes = require('./routes/route');
const mongoose = require('./database/database')


server.get('/',d.defaultRoute)
server.post('/addDoc',fileUpload.single('fileUpload') ,d.addDoc)


server.use(express.static(__dirname + '/public'));
server.use('/',routes)
mongooses

server.listen(4000, () => {
    console.log("Server is Running on Port 4000");
});         