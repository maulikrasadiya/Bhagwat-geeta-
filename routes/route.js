const express = require("express");
const routes = express();
const d = require('../controllers/controller')


routes.get('/',d.defaultRoute)
routes.post('/addDoc',d.addDoc)
routes.get('/view',d.viewData)
routes.get('/editDoc/:id',d.editDoc)
routes.get('/deleteDoc/:id',d.deleteDoc)
routes.post('/updateDoc',d.updateDoc)


module.exports = routes;