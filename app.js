'use strict';

const routes = require('./server/routes.js');
const path = require('path');
const express = require('express');
let app = express();

app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app = routes(app);

app.listen(1802, () => {
	console.log('App started on port 1802');
});
