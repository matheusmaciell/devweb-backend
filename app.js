const express = require('express')
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
var morgan = require('morgan');
var http = require('http');
var server = http.createServer(app);
var cache = require('memory-cache');


// faz o parse de requisições com o corpo do tipo application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// faz o parse de requisições com o corpo do tipo application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();  // sem o next, a chamada para aqui
});
app.post('/', function (req, res) {
  // aqui estamos devolvendo ao cliente o corpo da requisição POST realizada pelo mesmo.
  res.end(JSON.stringify(req.body, null, 2))
});

const home = require('./home');
const user = require('./user/userRoute');
const classe = require('./class/classRoute');
const school = require('./school/schoolRoute');

app.use(morgan('tiny'));
app.use('/',home);
app.use('/user', user);
app.use('/class',classe);
app.use('/school',school);

//essa parte serve pra pegar a imagem que ta no diretorio static, e tem como endpoint '/imagem'
app.use('/imagem',express.static(__dirname+'/static'))


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

 
// usando a cache, que funciona do tipo (chave,valor)
 
cache.put('gostosa', 'MATHEUS GOSTOSA MACIEL');
console.log(cache.get('gostosa'));
 
// that wasn't too interesting, here's the good part
 
cache.put('houdini', 'disappear', 100, function(key, value) {
    console.log(key + ' did ' + value);
}); // Time in ms
 
console.log('Houdini will now ' + cache.get('houdini'));
 
setTimeout(function() {
    console.log('Houdini is ' + cache.get('houdini'));
}, 200);
 
 
// create new cache instance
var newCache = new cache.Cache();
 
newCache.put('foo', 'newbaz');
 
setTimeout(function() {
  console.log('foo in old cache is ' + cache.get('foo'));
  console.log('foo in new cache is ' + newCache.get('foo'));
}, 200);











//app.listen(3000, () => console.log('Example app listening on port 3000!'))
module.exports = app;
