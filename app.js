const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");
const dotenv = require('dotenv').config();
const multer = require('multer');
const path = require('path');
const fileUpload = require('express-fileupload');
const {MongoClient} = require('mongodb');

require('./config/passport')(passport)

mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('[ welcome to my app :))) ]'))
.catch((err)=> console.log(err));

async function main(){
    const uri = "mongodb+srv://root:null@firstcluster.1bziy.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
}

main().catch(console.error);

app.set('view engine','ejs');
app.use(expressEjsLayout);

app.use(express.urlencoded({extended : false}));

app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use(express.static(__dirname + '/public'));

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

// app.listen(3000); 

const extendTimeoutMiddleware = (req, res, next) => {
  const space = ' ';
  let isFinished = false;
  let isDataSent = false;

  // Only extend the timeout for API requests
  if (!req.url.includes('/api')) {
    next();
    return;
  }

  res.once('finish', () => {
    isFinished = true;
  });

  res.once('end', () => {
    isFinished = true;
  });

  res.once('close', () => {
    isFinished = true;
  });

  res.on('data', (data) => {
    // Look for something other than our blank space to indicate that real
    // data is now being sent back to the client.
    if (data !== space) {
      isDataSent = true;
    }
  });

  const waitAndSend = () => {
    setTimeout(() => {
      // If the response hasn't finished and hasn't sent any data back....
      if (!isFinished && !isDataSent) {
        // Need to write the status code/headers if they haven't been sent yet.
        if (!res.headersSent) {
          res.writeHead(202);
        }

        res.write(space);

        // Wait another 15 seconds
        waitAndSend();
      }
    }, 15000);
  };

  waitAndSend();
  next();
};

app.use(extendTimeoutMiddleware);

module.exports = app;

const PORT = process.env.PORT || 3000; app.listen(PORT, () => { console.log(`Success! Connected! Run ${PORT} from host cpu to open!`); });