// Must calculate when input is changed...

let ingredients_original = document.getElementsByClassName("ing-amount");

var calc_ingredients = () => {
    // Calculate multiplicity from the ORIGINAL values 
    var ingredients = document.getElementsByClassName("ing-amount");
    
    var nrPortions = document.getElementById("portions").value;
    // Sjekk at det er et tall!!!!
    if (nrPortions != 0) {
        let multiplicity = nrPortions/4;
        for (let i = 0; i < ingredients.length; i++){
            //ingredients[i].innerHTML = multiplicity*ingredients[i].innerHTML;
            let prevNumb = ingredients_original[i].innerHTML;
            ingredients[i].innerHTML = Math.round(prevNumb*multiplicity*100)/100;


        }

    }

}