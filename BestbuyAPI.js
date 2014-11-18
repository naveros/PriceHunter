var request = require('request');
//var S = require('string');



var self = module.exports;

self.searchItems = function(options, callback) {
	request("http://api.remix.bestbuy.com/v1/products(name="+options.key+"*)?show=name,salePrice,thumbnailImage&format=json&apiKey=npm62r3juru55gsxuggxyzbj", function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var result = {};
			var list = JSON.parse(body);
			list = list.products;	
			list.sort( predicatBy("salePrice") );
			result = list[0];
			console.log(result);
			if (callback) callback(null, result);
		}
		else {
			if (callback) callback(new Error("Error getting search"), null);
		}
	});
};



function predicatBy(prop){
   return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}
