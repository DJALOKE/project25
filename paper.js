class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body = Bodies.circle(x,y,70,options);
        this.r = 70;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(3);
        stroke("blue");
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}