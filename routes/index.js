var express = require('express');
var router = express.Router();
var testBestbuy = require('bestbuyapi');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Price Hunter' });
});

router.get('/search', function(req, res) {
	console.log(req.query.key);
	testBestbuy.searchItems(req.query.key, function(err, result){
	res.send(JSON.stringify(result));
	});
});

router.post('/search', function(req, res) {
	console.log(req.query.key);
	testBestbuy.searchItems(req.query.key, function(err, result){
	res.send(JSON.stringify(result));
	});
});

module.exports = router;
