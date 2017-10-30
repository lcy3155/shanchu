var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456' ,
  database:'item'
});


/* GET home page. */
router.get('/list',function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  connection.query('SELECT id,name FROM baobao',function(err, rows, fields) {    //SELECT语句
    if(err) throw err
    res.send(rows)
  })v
  res.header('Access-Control-Allow-Origin',"*")
  connection.query('DELETE FROM baobao WHERE id='+req.body.abc,function(err, rows, fields) {    //SELECT语句
    if(err) throw err
    res.send(rows)
  })
});

module.exports = router;
