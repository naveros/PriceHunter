$('#searchButton').click(function(){

	var input = document.getElementById("searchInput").value;
  $.ajax({url:"search",data:{key:input},success:function(result){
    
    var itemsDiv = document.getElementById("itemsDiv");

    var bestbuyItem = document.createElement("div");
    bestbuyItem.class = "list-group-item";

try { 
    var item = JSON.parse(result);

    var itemImage = document.createElement("img");
    itemImage.src = item.thumbnailImage ;

    var nom = document.createElement("span");
    nom.innerHTML = item.name;
    nom.class= "list-group-heading";

    var description = document.createElement("span");
    description.innerHTML = item.shortDescription;
    description.class= "item-text";

    var price = document.createElement("span");
    price.innerHTML = item.salePrice;

 	var siteRef = document.createElement('a');
	var linkText = document.createTextNode("Voir cet article sur Bestbuy !");
	siteRef.appendChild(linkText);
	siteRef.title = "Redirection vers bestbuy.com/"+item.name;
	siteRef.href = item.url;


    bestbuyItem.appendChild(itemImage);
    bestbuyItem.appendChild(nom);
    bestbuyItem.appendChild(description);
    bestbuyItem.appendChild(price);
    bestbuyItem.appendChild(siteRef);

    itemsDiv.appendChild(bestbuyItem);


}catch(err) {
	var error = document.createElement("span");
    error.innerHTML = "Désolé, aucun résultat pour cette recherche.";
    error.class="error"
    itemsDiv.appendChild(error);
}
  }});



});
