const http = require('http');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const errorController = require('./controllers/error');

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.use(errorController.get404);

app.listen(3000);