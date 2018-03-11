var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public/assets'));

var todoController = require('./controllers/todoController');

todoController(app);

app.listen(3000);
console.log('Listening on port 3000...')
