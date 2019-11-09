
//var c = 0;

var arr_carbs= ["mashed potato", "rice", "spaghetti","pasta screws", "potato boats","couscous"];
var arr_veg= ["carrot", "aubergine", "broccoli","pumpkin","cauliflower","mushrom"];
var arr_meat= ["steak", "chicken breast", "salmon","trout","calf","pork"];
var index_c=0; var rounds_c=0; var index_v=0; var rounds_v=0; var index_m=0; var rounds_m=0;
var carb; var veg; var meat;
var timer_is_on = 0;
//var t;



//carbs
function carbs_func(){
document.getElementById("carbs").value=arr_carbs[index_c];
index_c++;
carbs=setTimeout(carbs_func,260); //second arguments give how many milliseconds each ingredient will display in the input field
if (index_c >arr_carbs.length-1){
	index_c=0;
    if (rounds_c>0){
    clearTimeout(carbs); //prevent the function set with the setTimeout() to execute:
    document.getElementById("carbs").value=arr_carbs[Math.floor(Math.random() * arr_carbs.length)];
    }
    
    rounds_c++; }
}

//veg
function veg_func(){
document.getElementById("veg").value=arr_veg[index_v];
index_v++;
veg=setTimeout(veg_func,260); //second arguments give how many milliseconds each ingredient will display in the input field
if (index_v >arr_veg.length-1){
	index_v=0;
    if (rounds_v>0){
    clearTimeout(veg); //Prevent the function set with the setTimeout() to execute:
    document.getElementById("veg").value=arr_veg[Math.floor(Math.random() * arr_veg.length)];
    }
    
    rounds_v++; }
}

//meat
function meat_func(){
document.getElementById("meat").value=arr_meat[index_m];
document.getElementById("meal_generated").value="Generating a meal...";
index_m++;
meat=setTimeout(meat_func,260); //second arguments give how many milliseconds each ingredient will display in the input field
if (index_m >arr_meat.length-1){
	index_m=0;
    if (rounds_m>0){
    clearTimeout(meat); //Prevent the function set with the setTimeout() to execute:
    document.getElementById("meat").value=arr_meat[Math.floor(Math.random() * arr_meat.length)];
    document.getElementById("meal_generated").value="Woho you created a new meal ";
    }
    
    rounds_m++; }
}


function startMealGen() {
 

 /* var timer_is_on = 0;
  if (!timer_is_on) {
    timer_is_on = 1;*/

    //Resetting output field
    document.getElementById("meal_generated").value="";
    
    //Specify the fuctions that are to be called when pushing the button
    carbs_func();
    veg_func();
    meat_func();

    //Resetting all variables 
    index_c=0; rounds_c=0; index_v=0; rounds_v=0; index_m=0; rounds_m=0;
  
  /*}*/
}
