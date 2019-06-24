const bodyParser = require('body-parser');
const express = require("express");
const morgan = require('morgan');
const env = require('dotenv');//chamando variaveis de ambiente
env.config();

const mongoose = require('mongoose');

//db
mongoose
    .connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log('DB Connected!'));

mongoose.connection.on('error', error => {
    console.log(`DB connection error: ${error.message}`);
});



//calling routes 
const routes = require('./routes/api')

console.log("program started");

const app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Node Js api listening to port: ${port}`)
});




// ###############################
// middleware example code

// const myMiddleware = (req, res, next) => {
//     console.log("middleware applied!!!");
//     next();
//  };
//  app.use(myMiddleware);