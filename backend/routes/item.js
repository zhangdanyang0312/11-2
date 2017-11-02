var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql');
var con = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'zdy0828',
    database:'item'
})
/* GET home page. */
// 全部数据
router.post('/list', function(req, res, next) {
    con.query('SELECT * FROM addipt',function(err,rows,abc){
        if(err) throw err;
        res.header('Access-Control-Allow-Origin','*')
        res.send(rows);
    });
});
//添加
router.post('/add',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    var ipt1=req.body.name;
    var ipt2=req.body.con;
    console.log(ipt1,ipt2);
    con.query("INSERT INTO addipt (name,content) VALUES ('"+ipt1+"','"+ipt2+"')",function(err,rows,fildes){
        console.log(rows)
        res.send(rows);

    })
})
//删除
router.post('/del', function(req, res, next) {
    con.query('DELETE FROM addipt WHERE id='+req.body.abc+'',function(err,rows,abc){
        if(err) throw err;
        res.header('Access-Control-Allow-Origin','*')
        res.send(rows);
    });
});

module.exports = router;