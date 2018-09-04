const express = require('express')
const app = express()
const router = express.Router();

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

const index = require('./routes/index');
const user = require('./routes/user');
const classe = require('./routes/class');
const school = require('./routes/school');
app.use('/', index);
app.use('/user', user);
app.use('/class',classe);
app.use('/school',school);

//essa parte serve pra pegar a imagem que ta no diretorio static, e tem como endpoint '/imagem'
app.use('/imagem',express.static(__dirname+'/static'))



module.exports = app;
