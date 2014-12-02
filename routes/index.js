var express = require('express');
var router = express.Router();
var testBestbuy = require('bestbuyapi');
var ebay = require('ebayapi');
var amazon = require('amazonapi');
/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Price Hunter' });
});

router.get('/search', function(req, res) {
	var finalResult = [];
	console.log(req.query.key);	
	//BESTBUY request
	testBestbuy.searchItems(req.query.key, function(err, bestBuyItem){
		var result = [];
		if(err) throw err ;
		result.push(bestBuyItem);
		var params = {
			'OPERATION-NAME': 'findItemsByKeywords',
			'keywords': req.query.key
		}
		//EBAY request
		ebay.searchItems(params, function (err, ebayItem) { 
			if(err) throw err;
			result.push(ebayItem);
  			//AMAZON request
  			var params2 = {
  				keywords: req.query.key,
  				category: "Electronics"
  			}
  			amazon.searchItems(params2, function (err, amazonitem){
  				result.push(amazonitem);
  				res.send(JSON.stringify(result));
  			});  			
  		});
	});
	
});

router.post('/search', function(req, res) {
	console.log(req.query.key);
	testBestbuy.searchItems(req.query.key, function(err, result){
		res.send(JSON.stringify(result));
	});
});

module.exports = router;
