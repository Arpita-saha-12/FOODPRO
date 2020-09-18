require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');


const rtsIndex = require('./routes/index.router');

var categoryController=require('./controllers/categoryController.js'); 
var eventController=require('./controllers/eventController.js'); 
var itemController=require('./controllers/itemController.js');
var picController=require('./controllers/picController.js');
//var questionController=require('./controllers/questionController.js');
//var userques=require('./controllers/userquesContoller.js');
var useritem=require('./controllers/useritemController.js');
//var resultController=require('./controllers/resultController.js');
var orderController=require('./controllers/orderController.js');
// var ordereventController=require('./controllers/orderController.js');
var viewuserController=require('./controllers/viewuserController.js');
var userorder=require('./controllers/userOrderController.js');
// var userorderevent=require('./controllers/usereventOrderController.js');
var publicDir = require('path').join(__dirname,'/uploads');
console.log(publicDir);


var app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});





// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
app.use('/categories',categoryController);
app.use('/events',eventController);
app.use('/items',itemController);
app.use('/pics',picController);
//app.use('/question',questionController);
//app.use('/viewques', userques);
app.use('/useritem', useritem);
//app.use('/result',res);
app.use('/order',orderController);
// app.use('/orderevent',ordereventController);
app.use('/viewuser',viewuserController);
app.use('/userorder',userorder);
// app.use('/userorderevent',userorderevent);

app.use(express.static(publicDir));