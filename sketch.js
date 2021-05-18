var bg, dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feedtime;
var foodObj;
var feed;
var lastFed;
var FeedTime; 
function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
bg_img=loadImage("bg.png");
house_img=loadImage("house.png");
grass_img=loadImage("grass.png");
almirah_img=loadImage("almirah.png");
}

function setup() {

  house=createSprite(980,270,150,150);
  house.addImage(house_img);
  house.scale=0.30;

  // grass=createSprite(575,500,150,150);
  // grass.addImage(grass_img);
  // grass.scale=0.90;

 
  
  database=firebase.database();
  createCanvas(1150,600);

  foodObj = new Food();
  foodObj.getFedTime();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(900,350,150,150);
  dog.addImage(sadDog);
  dog.scale=0.50;

  feed=createButton("Feed Dog");
  feed.position(500,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  
  background(86,176,255);

  imageMode(CENTER);
  image(grass_img,575,500,1150,200);
  

  feedtime=database.ref('FeedTime');
  feedtime.on("value",function (data){
  lastFed=data.val();
  })
// if(lastFed<=12){
  
// fill(0,213,28)
// textSize(20);
// stroke("black")
// strokeWeight(4);
// }else if(lastFed==0){
  
// fill("red")
// textSize(20);
// stroke("black")
// strokeWeight(4);
//   text("LAST FED : 12 am",380,30 );
  
// }else{
  
// fill("blue")
// textSize(20);
// stroke("yellow")
// strokeWeight(4);
// }

drawSprites();
image(almirah_img,200,350,300,580);
  foodObj.display();
}
function readStock(data){

  foodS=data.val();
  foodObj.updateFoodStock(foodS);

}

function feedDog(){

 dog.addImage(happyDog);

// var food_stock_val=foodObj.getFoodStock();

// if(food_stock_val<= 0){

//   foodObj.updateFoodStock(food_stock_val *0)
  
// }
// else{

//   foodObj.updateFoodStock(food_stock_val -1)
//   FeedTime : hour();
// }
foodObj.updateFoodStock(foodObj.getFoodStock() -1)
database.ref('/').update({
  Food:foodObj,
  FeedTime : hour()
})
}
function addFoods(){
  dog.addImage(sadDog);
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}