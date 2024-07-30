const express = require('express');
const mongoose = require('mongoose')

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');

//database connection
const db = 'mongodb+srv://shanaBiot:Zno8V9dgczXjVQAc@cluster0.scfypel.mongodb.net/job-apply';
mongoose.connect(db)
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err));


//routes
app.get('/', (req, res)=> res.render('home'));
