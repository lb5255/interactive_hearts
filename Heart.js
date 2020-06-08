class Heart{
    
    constructor(){
        this.x = random(windowWidth);
        this.y= random(windowHeight);
        this.img = loadImage("heart.png");
        this.img1 = loadImage("heart.png");
        this.img2 = loadImage("hot.png");
        this.img3 = loadImage("purple.png");
        this.img4 = loadImage("switch.png");
        this.img5 = loadImage("blue.png");
        this.img6 = loadImage("green.png");
        this.img7 = loadImage("yellow.png");
        this.img8 = loadImage("orange.png");

        this.width = width;
        this.height = height;
        this.canDisplay = true;
        this.switchArray = [this.img1, this.img2, this.img3, this.img4, this.img5, this.img6, this.img7, this.img8 ];
        this.indexAmt = 0;
}
    
    
    intersects(xcoor, ycoor){
        if(xcoor < this.x + this.width &&
          this.x < xcoor &&
          ycoor < this.y + this.height &&
          ycoor > this.y){
            return true;
        }
        else{
            return false;
        }
    }
    
    intersectsOBJ(other){
        if(this.x<other.x + other.width &&
           this.x + this.width > other.x && 
           this.y < other.y + other.height &&
          this.y + this.height > other.y){
            this.canDisplay = false;
            print("intersects text");
            return true;
        }else{
            this.canDisplay = true;
                        print("intersects asdf");

            return false;
        }
    }
    
     display(imageKind, width, height){
         if(this.canDisplay){
           image(imageKind, this.x, this.y, width,height);

         }
         else{
             print("no");
         }

         }
    
    swapImage(){
        this.img = random(this.switchArray);
    }
        
    }
