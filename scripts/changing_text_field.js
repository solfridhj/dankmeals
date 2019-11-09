

//Making arrays to hold the ingredients
var arr_carbs= ["mashed potato", "rice", "spaghetti","pasta screws", "potato boats","couscous"];
var arr_veg= ["carrot", "aubergine", "broccoli","pumpkin","cauliflower","mushrom"];
var arr_meat= ["steak", "chicken breast", "salmon","trout","calf","pork"];

//declaring useful counting indexes
var index_c=0; var rounds_c=0; var index_v=0; var rounds_v=0; var index_m=0; var rounds_m=0;
var carb; var veg; var meat;


//Funciton for selecting an item in the arr_carbs to be displayed in the output field with id carbs
function carbs_func(){
document.getElementById("carbs").value=arr_carbs[index_c];
index_c++;
carbs=setTimeout(carbs_func,260); //second arguments give how many milliseconds each ingredient will display in the input field
if (index_c >arr_carbs.length-1){
	index_c=0;
    if (rounds_c>0){
    clearTimeout(carbs); //prevent the function set with the setTimeout() to execute:
    document.getElementById("carbs").value=arr_carbs[Math.floor(Math.random() * arr_carbs.length)]; //Selecting a random element in the ingredient array. This is the actual meal generation.
    }
    
    rounds_c++; }
}

//Funciton for selecting an item in the arr_veg to be displayed in the output field with id veg
function veg_func(){
document.getElementById("veg").value=arr_veg[index_v];
index_v++;
veg=setTimeout(veg_func,260); //second arguments give how many milliseconds each ingredient will display in the input field
  if (index_v >arr_veg.length-1){
	  index_v=0;
    if (rounds_v>0){
    clearTimeout(veg); //Prevent the function set with the setTimeout() to execute:
    document.getElementById("veg").value=arr_veg[Math.floor(Math.random() * arr_veg.length)];//Selecting a random element in the ingredient array. This is the actual meal generation.
    }
    rounds_v++; }
}

//Funciton for selecting an item in the arr_meat to be displayed in the output field with id meat
function meat_func(){
document.getElementById("meat").value=arr_meat[index_m];
document.getElementById("meal_generated").value="Generating a meal...";
index_m++;
meat=setTimeout(meat_func,260); //second arguments give how many milliseconds each ingredient will display in the input field
  if (index_m >arr_meat.length-1){
	  index_m=0;
    if (rounds_m>0){
    clearTimeout(meat); //Prevent the function set with the setTimeout() to execute:
    document.getElementById("meat").value=arr_meat[Math.floor(Math.random() * arr_meat.length)]; //Selecting a random element in the ingredient array. This is the actual meal generation.
    document.getElementById("meal_generated").value="Woho you created a new meal ";
    }
    
    rounds_m++; 
  }
}

//Function that is called each time the button in try_your_luck_meal.html is pushed
function startMealGen() {
 
  //Resetting output field (in case the button have already been pushed)
  document.getElementById("meal_generated").value="";
    
  //The fuctions that are to be called when pushing the button
  carbs_func();
  veg_func();
  meat_func();

  //Resetting all variables (so that the functionality is kept the same if one wants to push the button again)
  index_c=0; rounds_c=0; index_v=0; rounds_v=0; index_m=0; rounds_m=0;
  
}
