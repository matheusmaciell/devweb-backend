const express = require('express')
const app = express()
const router = express.Router();

app.listen(3000, () => console.log('Example app listening on port 3000!'))

const index = require('./routes/index');
const user = require('./routes/user');
const classe = require('./routes/class');
app.use('/', index);
app.use('/user', user);
app.use('/class',classe);
module.exports = app;