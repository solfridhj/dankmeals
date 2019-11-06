var focaccia = {
    name : "Focaccia!",
    link : "focaccia.html",
    img_source : "focaccia.jpg",
    description : "Focaccia is delicious, served with aioli and is amazing alongside bolognese sauce"
}

var tapas = {
    name: "Tapas",
    link: "tapas.html",
    img_source: "tapas.jpg",
    description: "TAPAAAS YAY det er så sykt digg. solfrid er megafan av tapas yummmm"
}

var vaffel = {
    name: "vaffel",
    link: "vaffel.html",
    img_source: "vaffel.jpg",
    description: "Vaffel er kosemat!"
}


var meals = [focaccia, tapas,vaffel]

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

    
}


function mealOfDay(){
    // Get random index
    var randomIndex = Math.round(Math.random()*(meals.length-1))
    console.log(randomIndex)

    // Updates meal of the day
 
    updateMealOfDay(randomIndex)
    
}

mealOfDay()