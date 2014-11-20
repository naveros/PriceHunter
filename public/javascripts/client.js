var resultList = [];
$('#searchButton').click(function(){

	var input = document.getElementById("searchInput").value;
    console.log("recherche des mots clefs : "+input);
    $.ajax({url:"search",data:{key:input},success:function(result){
        DrawBestBuyItem(result); //[0]
    }});
});

function DrawBestBuyItem(input){

    
    try { 
            var resultContainer = document.getElementById("result-container");
            resultContainer.removeChild(resultContainer.firstChild);
            var item = JSON.parse(input); 

            
            var itemContainer = document.createElement("div"); 
            itemContainer.className= "itemcontainer";
            var itemLeftContainer = document.createElement("div"); 
            itemLeftContainer.className = "item-left-container";
            var itemImage = document.createElement("img"); 
            itemImage.className = "itemicon";

            var itemMiddleContainer = document.createElement("div"); 
            itemMiddleContainer.className = "item-middle-container";
            var itemMiddleTopContainer= document.createElement("div"); 
            itemMiddleTopContainer.className = "item-middle-top-container";
            var itemTitle = document.createElement("span"); 
            itemTitle.className = "itemtitle";
            var itemMiddleMiddleContainer = document.createElement("div");
            itemMiddleMiddleContainer.className = "item-middle-middle-container";
            var itemDescription = document.createElement("span");  
            itemDescription.className = "itemdescription";
            var itemMiddleBottomContainer = document.createElement("div"); //TODO div for more info  
            itemMiddleBottomContainer.className = "item-middle-bottom-container";
            var itemInfo = document.createElement("span");
            itemInfo.className = "itemdescription"; // to do : custom css class
            var itemRightContainer = document.createElement("div"); 
            itemRightContainer.className = "item-right-container";
            var sellerImage = document.createElement("img");
            sellerImage.className = "itemsellericon";
            var itemPrice = document.createElement("span");
            itemPrice.className = "itemprice";
            var buttonBuy= document.createElement("button"); 
            buttonBuy.className = "buttonbuy";
            buttonBuy.innerHTML = "Buy"


            itemImage.src = item.thumbnailImage;
            itemTitle.innerHTML = item.name;
            //itemDescription.innerHTML = item.manufacturer; //DOESNT FIT IN DIV WHEN TITLE TOO LONG, WAT DO?
            sellerImage.src = "/images/BestBuy.png"; 
            if(item.manufacturer != null){
            itemInfo.innerHTML = item.manufacturer; 
            }
            itemPrice.innerHTML = item.salePrice;

            itemLeftContainer.appendChild(itemImage);
            itemMiddleTopContainer.appendChild(itemTitle);
            itemMiddleMiddleContainer.appendChild(itemDescription);
            itemMiddleBottomContainer.appendChild(itemInfo)
            itemMiddleContainer.appendChild(itemMiddleTopContainer);
            itemMiddleContainer.appendChild(itemMiddleMiddleContainer);
            itemMiddleContainer.appendChild(itemMiddleBottomContainer);
            itemRightContainer.appendChild(sellerImage);
            itemRightContainer.appendChild(itemPrice);
            itemRightContainer.appendChild(buttonBuy);
            itemContainer.appendChild(itemLeftContainer);
            itemContainer.appendChild(itemMiddleContainer)
            itemContainer.appendChild(itemRightContainer);
            resultContainer.appendChild(itemContainer);
    }catch(err) {
        console.log("error : "+err);
        var error = document.createElement("span");
        error.innerHTML = "Désolé, aucun résultat pour cette recherche.";
        error.className="error"
        resultContainer.appendChild(error);
    }
}
