const express = require('express')
const app = express();
const router = express.Router();
var morgan = require('morgan');



//app.get('/user', function(req, res) {
//  res.status(200).json({ name: 'john' });
//});

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

app.listen(3000, () => console.log('Example app listening on port 3000!'))
module.exports = app;
