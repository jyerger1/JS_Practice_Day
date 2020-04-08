
// I really struggle to wrap my head around these types of exercises


function sandwichCalculator(slicesOfBread, slicesOfCheese){
	var sandwiches = Math.floor(slicesOfBread / 2);

	if ((slicesOfBread > 1) && (slicesOfCheese > 0) && (slicesOfCheese < sandwiches)) {
		sandwiches = slicesOfCheese;
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)) {
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese = 0) || (slicesOfBread < 2)) {
		console.log("Oops, no sandwiches for you.");
		return 0;
	}

}
sandwichCalculator(4,4);









