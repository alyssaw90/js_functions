//load products.json
// var data = require("./products.json")

//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

//output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

//create your answer in this file.
//the above is just provided as a simple example.
var googleProducts = require("./products.json")


console.log("Problem 1")
var getItems = function(data) {
	return data.items;
}

console.log(getItems(googleProducts))


console.log("Problem 2")
var newArray = [];

var getItemByBrand = function(array,company) {
	for (var i = 0; i < array.length; i++) {
	if (array[i].product.brand === company) {
		newArray.push(array[i]);
		}
	}

	return newArray
}

console.log(getItemByBrand(getItems(googleProducts), "Sony"))

console.log("Problem 3")
var authorArray = []

var getItemsByAuthor = function(array,author) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.author.name === author) {
			authorArray.push(array[i])
		}
	}

	return authorArray
}

console.log(getItemsByAuthor(getItems(googleProducts), "CDW"))

console.log("Problem 4")


var availableProducts = []
var getAvailableProducts = function(array) {
	for (var i = 0; i < array.length; i++) {
		var inventoriesLength = array[i].product.inventories.length;
		for (var j = 0; j < inventoriesLength; j++) {
			if (array[i].product.inventories[j].availability === "inStock") {
				availableProducts.push(array[i].product)
			}
		}
	}
	return availableProducts
}

console.log(getAvailableProducts(getItems(googleProducts), "inStock"))

console.log("Problem 5")

//Comment out previous console.log statement to make this problem run correctly.

console.log('All items made by Sony:');
    var itemsBySony = getItemsByBrand(getItems(googleProducts), "Sony")
console.log(itemsBySony);

console.log('All items made by Sony that are available:');
console.log(getAvailableProducts(itemsBySony));

console.log('All items made by Nikon with the author eBay:');
    var itemsByNikon = getItemsByBrand(getItems(), "Nikon")
console.log(getItemsByAuthor(itemsByNikon, "eBay"));




