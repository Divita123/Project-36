class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,400,170,130);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%4==0){
            x=120;
            y=y+60;
          }
          image(this.image,x,y,60,30);
          x=x+55;
        }
      }
    }
}
