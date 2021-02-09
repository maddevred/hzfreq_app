require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.get('/', (req, res) => {
  res.render('index');
});


// const PORT = process.env.PORT || 3000

const server = app.listen(3000, () => {
  console.log(` welcome to my website :))) `);
});

// const server = app.listen(3000, () => {
//   console.log(` welcome to my website :))) `);
// });

module.exports = app;


// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
// const app = express();
// const expressEjsLayout = require('express-ejs-layouts')
// const flash = require('connect-flash');
// const session = require('express-session');
// const passport = require("passport");
// const dotenv = require('dotenv').config();
// const multer = require('multer');
// const path = require('path');
// const fileUpload = require('express-fileupload');
// const {MongoClient} = require('mongodb');

// require('./config/passport')(passport)

// mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
// .then(() => console.log('[ welcome to my app :))) ]'))
// .catch((err)=> console.log(err));

// async function main(){
//     const uri = "mongodb+srv://root:null@firstcluster.1bziy.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
// }

// main().catch(console.error);

// app.set('view engine','ejs');
// app.use(expressEjsLayout);

// app.use(require('morgan')('dev'));
// app.use(express.urlencoded({extended : false}));


// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.use(session({
//     secret : 'secret',
//     resave : true,
//     saveUninitialized : true
// }));


// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

// app.use('/',require('./routes/index'));
// app.use('/users',require('./routes/users'));
// app.use(express.static(__dirname + '/public'));

// app.use(fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 },
// }));

// app.listen(3000); 

// const extendTimeoutMiddleware = (req, res, next) => {
//   const space = ' ';
//   let isFinished = false;
//   let isDataSent = false;

//   if (!req.url.includes('/api')) {
//     next();
//     return;
//   }

//   res.once('finish', () => {
//     isFinished = true;
//   });

//   res.once('end', () => {
//     isFinished = true;
//   });

//   res.once('close', () => {
//     isFinished = true;
//   });

//   res.on('data', (data) => {

//     if (data !== space) {
//       isDataSent = true;
//     }
//   });

//   const waitAndSend = () => {
//     setTimeout(() => {
//       if (!isFinished && !isDataSent) {

//         if (!res.headersSent) {
//           res.writeHead(202);
//         }

//         res.write(space);

//         waitAndSend();
//       }
//     }, 55000);
//   };

//   waitAndSend();
//   next();
// };

// app.use(extendTimeoutMiddleware);

// module.exports = app;

// const PORT = process.env.PORT || 3000;
// // const server = app.listen(PORT, () => {
// console.log(`Success! Connected! Run ${PORT} from host cpu to open!`); 
// });
