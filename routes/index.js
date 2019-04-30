var express = require('express');
var router = express.Router();
var todoList = require('../app');

var todoList = [
  { title: 'JavaScriptを勉強する', done: true },
  { title: 'Node.jsを勉強する', done: false },
  { title: 'Web APIを作る', done: false }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  // 文字列を送り、ブラウザ上に表示する. ただし、一般的には文字列ではなくHTMLファイルを表示する
  // res.send('ページが表示されました！');

  // 静的なhtmlファイルを表示する.
  // response.sendFile(__dirname + '/views/index.html');
  res.render('index', { todoList: todoList });
});

router.post('/posts/create', function (req, res) {
  var post = {
    title: req.body.text,
    done: false
  };
  todoList.push(post);
  res.redirect('/');
});

router.post('/posts/deleate', function (req, res) {
  todoList.splice(req.body.index, 1);
  res.redirect('/');
});

module.exports = router;
