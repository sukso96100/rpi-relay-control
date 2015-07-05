var express = require('express');
var router = express.Router();
//DB
var mongoose = require( 'mongoose' );
var SwitchesConfig = mongoose.model( 'SwitchesConfig' );

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = SwitchesConfig.findOne({ 'num': 1 });

  res.render('index', { title: 'RelaySwitch' });
});

module.exports = router;
