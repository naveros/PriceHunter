var express = require('express');
var router = express.Router();
var testBestbuy = require('bestbuyapi');

/* GET home page. */
router.get('/search', function(req, res) {
console.log("im in GET REQUEST");
var bestbuyItem = testBestbuy.searchItems(req.body.searchInput);
res.render.message(JSON.stringify(bestbuyItem));
});


router.post('/search', function(req, res) {
console.log("im in POST REQUEST OF SEARCH");
var bestbuyItem = testBestbuy.searchItems(req.body.searchInput);
res.render.message(JSON.stringify(bestbuyItem));
});

module.exports = router;
