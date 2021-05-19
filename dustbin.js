class Dustbin{
    constructor(x,y,w,h){
        var opt = {
            isStatic : true
        }
        this.width = w
        this.height = h
        this.body = Bodies.rectangle(x,y,w,h,opt)

        World.add(world,this.body)
    }

    display(){
            rectMode(CENTER)
            fill("red")
            rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}