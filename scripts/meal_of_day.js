var focaccia = {
    name : "Focaccia!",
    link : "focaccia.html",
    img_source : "focaccia.jpg",
    description : "Focaccia is delicious, served with aioli and is amazing alongside bolognese sauce."
}

var tapas = {
    name: "Tapas",
    link: "tapas.html",
    img_source: "tapas.jpg",
    description: "Tapas is amazingly tasty fingerfood from the Spanish kitchen."
}

var vaffel = {
    name: "Sweet Potato Waffle",
    link: "vaffel.html",
    img_source: "vaffel.jpg",
    description: "Try out this twist on the traditional wafles. Sweet and filling."
}

var brodsuppe = {
    name: "Bread Soup",
    link: "brodsuppe.html",
    img_source: "brodsuppe.jpg",
    description: "Try out this soup, to use up your not so fresh bread left overs! "
}

var brownie = {
    name: "Brownie",
    link: "brownie.html",
    img_source: "brownie.jpg",
    description: "For a tasy desert, try out this great recipe for brownies."
}

var burger = {
    name: "Burger",
    link: "burger.html",
    img_source: "burger.jpg",
    description: "Try out this healthier version of a burger."
}

var eggbacon = {
    name: "Eggs and Bacon",
    link: "eggbacon.html",
    img_source: "eggbacon.jpg",
    description: "A good breakfast that fills you for a long time. Add beans for a more filling meal."
}

var fruktsalat = {
    name: "Fruit Salad",
    link: "fruktsalat.html",
    img_source: "fruktsalat.jpg",
    description: "A healthy alternative to desserts. Try it out with fruits of your choice."
}

var greeksalad = {
    name: "Greek Salad",
    link: "greeksalad.html",
    img_source: "greeksalad.jpg",
    description: "A light and healthy meals, perfect to make quickly on busy days."
}

var meals = [focaccia, tapas, vaffel, brodsuppe, brownie, burger, eggbacon, fruktsalat, greeksalad]

// Updates the meal of the day
function updateMealOfDay(currentIndex){

    // Ensures valid index
    if (currentIndex >= meals.length || currentIndex <= -1){
        currentIndex = 0
    }

    // Gets next meal
    var meal = meals[currentIndex]

    // Update meal name
    var title = document.getElementById("meal-name")
    title.innerText = meal.name

    // Update description
    var desc = document.getElementById("meal-description") 
    desc.innerText = meal.description

    // Update image
    document.getElementById("meal-img").src = "img/" + meal.img_source

    // Update page link
    var link = document.getElementById("meal-link")
    var adress = "recipe_repository/recipes/" + meal.link
    link.href = adress
    prevIndex = currentIndex

    
}


function mealOfDay(){
    // Get random index
    var randomIndex = Math.round(Math.random()*(meals.length-1))

    // Updates meal of the day
    updateMealOfDay(randomIndex)
    
}

mealOfDay()