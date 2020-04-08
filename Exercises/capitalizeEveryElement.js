// I dont know why I cant get this right

var toppings = ['cheese', 'pepperoni', 'garlic', 'peppers'];


// function string() {
//     return toppings.join(' ');
// };

var capitalize = toppings.map(function(x){
    return x.toUpperCase(); 
    
});

console.log(capitalize);



// // var capitalize = String.prototype.toUpperCase.apply(toppings);
//  let dogNames = ["Sean", "fido", "Sarah", "Parker", "Walt", "abby", "Yang"]
//     let capitalDogNames = dogNames.map({ (dogName) -> String in
//         return dogName.capitalizedString
//     })