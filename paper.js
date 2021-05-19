class Paper{
    constructor(x,y){
        var opt = {
           isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density  : 1.2
        }
        this.body = Matter.Bodies.circle(x,y,10,opt);
        this.diameter = 10;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.diameter);
        pop();
    }
}