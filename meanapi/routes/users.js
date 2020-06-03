var express = require('express');
var router = express.Router();
var exec = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
    exec('select * from users', function(results) {
        console.log("users", results)
        res.send(results)
    }, function(err) {
        res.send(err)
    })

});

module.exports = router;