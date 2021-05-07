class Dustbin{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.width=200;
        this.thickness=20;
        this.height=200;

        this.bottomBody=Bodies.rectangle(x,y,this.width,this.thickness,options);
        this.image=loadImage("dustbin.png");
        World.add(world,this.bottomBody);

        this.leftBody=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
        World.add(world,this.leftBody);

        this.rightBody=Bodies.rectangle(x + this.width/2,y - this.height/2,this.thickness,this.height,options);
        World.add(world,this.rightBody);
    }
    display(){

        var posBottom=this.bottomBody.position;
        var posLeft=this.leftBody.position;
        var posRight=this.rightBody.position;

         push();
         translate(posBottom.x,posBottom.y);
         imageMode(CENTER);
        // fill("blue");
         image(this.image,0,-this.height/2,this.width,this.height);
         pop();

         push();
         translate(posLeft.x,posLeft.y);
         rectMode(CENTER);
         fill("white");
         rect(0,0,this.thickness,this.height);
         pop();

         push();
         translate(posRight.x,posRight.y);
         rectMode(CENTER);
         fill("white");
         rect(0,0,this.thickness,this.height);
         pop();
    }
}