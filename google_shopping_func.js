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
	return data.items
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
var availableArray = []

var getAvailableProducts = function(array,status) {
	for (var i = 0; i < array.length; i++) {
	var inventoriesLength = array[i].product.inventories.legnth;
	for (var j = 0; j < inventoriesLength; j++){
		if (array[i].product.inventories[j].availability === "inStock") {
			 console.log(i + " " + array[i].product.googleId + ": " + array[i].product.inventories[j].availability);
			availableArray.push(array[i].product)
		} 
	}
}

	return availableArray
}

console.log(getAvailableProducts(getItems()));




