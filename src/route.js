const express = require('express');
const questionController = require('./controllers/questionController');
const roomController = require('./controllers/roomController');

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-room', (req, res) => res.render("index", {page: 'create-room'}));

route.get('/room/:roomId', roomController.open);

route.post('/create-room/', roomController.create);
route.post('/question/:room/:question/:action', questionController.index);

module.exports = route;