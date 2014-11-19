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
            itemContainer.class= "itemcontainer";
            var itemLeftContainer = document.createElement("div"); 
            itemLeftContainer.class = "itemicon";
            var itemImage = document.createElement("img"); 
            var itemMiddleContainer = document.createElement("div"); 
            itemMiddleContainer.class = "item-middle-container";
            var itemMiddleTopContainer= document.createElement("div"); 
            itemMiddleTopContainer.class = "item-middle-top-container";
            var itemTitle = document.createElement("span"); 
            itemTitle.class = "itemtitle";
            var itemMiddleMiddleContainer = document.createElement("div");
            itemMiddleMiddleContainer.class = "item-middle-middle-container";
            var itemDescription = document.createElement("span");  
            itemDescription.class = "itemdescription";
            var itemMiddleBottomContainer = document.createElement("div"); //TODO div for more info  
            var itemInfo = document.createElement("span");
            var itemRightContainer = document.createElement("div"); 
            itemRightContainer.class = "item-right-container";
            var sellerImage = document.createElement("img");
            var itemPrice= document.createElement("span"); 
            itemPrice.class = "itemprice";
            var buttonBuy= document.createElement("button"); 
            buttonBuy.class = "buttonbuy";


            itemImage.src = item.thumbnailImage;
            itemTitle.innerHTML = item.name;
            itemDescription.innerHTML = item.shortDescription;
            //sellerImage.src = "/images/bestbuylogo"; //TODO /////////////////////////
            // itemInfo =  //todo if wanted
            itemPrice = item.salePrice;


            itemLeftContainer.appendChild(itemImage);
            
            itemMiddleTopContainer.appendChild(itemTitle);
            itemMiddleMiddleContainer.appendChild(itemDescription);
            itemMiddleBottomContainer.appendChild(itemInfo)
            itemMiddleContainer.appendChild(itemMiddleTopContainer);
            itemMiddleContainer.appendChild(itemMiddleMiddleContainer);
            itemMiddleContainer.appendChild(itemMiddleBottomContainer);
           /* itemRightContainer.appendChild(sellerImage);
            itemRightContainer.appendChild(itemPrice);
            itemRightContainer.appendChild(buttonBuy);*/
            itemContainer.appendChild(itemLeftContainer);
            itemContainer.appendChild(itemMiddleContainer)
        //    itemContainer.appendChild(itemRightContainer);

            resultContainer.appendChild(itemContainer);

    }catch(err) {
        console.log("error : "+err);
        var error = document.createElement("span");
        error.innerHTML = "Désolé, aucun résultat pour cette recherche.";
        error.class="error"
        resultContainer.appendChild(error);
    }
}