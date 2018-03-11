var bodyParser = require('body-parser');
var mongoose = require('mongoose');

urlencodedParser = bodyParser.urlencoded({extended: false});

mongoose.connect('mongodb://vigu:Stefan1357!@ds233238.mlab.com:33238/vigu-todo');

var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = function(app) {

var data = [];


  app.get('/', function(req, res) {
    Todo.find({}, function(err, data) {
      if (err) throw err;
      res.render('index', {data: data});
    });
  });

  app.post('/', urlencodedParser, function(req, res) {

    if (req.body.item === '') {
      return
    };

    Todo.find({item: req.body.item}, function(err, data) {
      console.log(data);
      if (data.length) {
        console.log(data.length);
        return
      }
      else {
        var newItem = Todo(req.body).save(function(err) {
          if (err) throw err;
          res.json(data);
        });
      }
    });

  });

  app.delete('/:deletedItem', function(req, res) {
    Todo.find({item: req.params.deletedItem.replace(/-/g, ' ')}).remove(function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  });

};
