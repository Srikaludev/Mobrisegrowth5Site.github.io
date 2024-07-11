const detailedBasket = {
	apples:5,
	oranges:10,
	grapes :1000
}
basket.forEach(item => {
	console.log(item);
})
for (item in detailedBasket){
	console.log(item)
}