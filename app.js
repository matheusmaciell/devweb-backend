const express = require('express')
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
var morgan = require('morgan');
//var server = http.createServer(app);
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/top', { useNewUrlParser: true });

// faz o parse de requisições com o corpo do tipo application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// faz o parse de requisições com o corpo do tipo application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();  // sem o next, a chamada para aqui
});

// app.use(function(req, res, next) {
// // res.header('Access-Control-Allow-Credentials', true);
// res.header('Access-Control-Allow-Origin', req.headers.origin);
// // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// // res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//  });


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const home = require('./home');
const user = require('./user/userRoute');
const classe = require('./class/classRoute');
const school = require('./school/schoolRoute');
const auth = require ('./auth/auth.router');
app.use(morgan('tiny'));
app.use('/',home);
app.use('/auth',auth);
app.use('/user', user);
app.use('/class',classe);
app.use('/school',school);

//essa parte serve pra pegar a imagem que ta no diretorio static, e tem como endpoint '/imagem'
app.use('/imagem',express.static(__dirname+'/static'))


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
//app.listen(3000, () => console.log('Example app listening on port 3000!'))
module.exports = app;
