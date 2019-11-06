

// Stores the original values of number of ingredients
let ingredients_original = document.getElementsByClassName("ing-amount");

let ingredients_list = []
for (let i = 0; i < ingredients_original.length; i++) {
    // Must convert from string to float
    ingredients_list.push(parseFloat(ingredients_original[i].innerHTML));
}

// Calculates and updates amount of ingredients needed, from number of portions entered 
var calc_ingredients = () => {
    // Gets all document elements with the given class
    var ingredients = document.getElementsByClassName("ing-amount");
    
    var nrPortions = document.getElementById("portions").value;
    // Checks that number of portions is greater than zero, and a number. If not, then it does not update, and values
    // remain the same 
    if (nrPortions > 0 && !isNaN(nrPortions)) {
        // Multiplication factor 
        let multiplicity = nrPortions/4;

        for (let i = 0; i < ingredients.length; i++){
            let prevNumb = ingredients_list[i];
            
            // Updates html with the new portion size, and rounds to two decimals
            ingredients[i].innerHTML = Math.round(prevNumb*multiplicity*100)/100;
        }
    }

}