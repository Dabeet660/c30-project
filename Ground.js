class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);    
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(7, 17, 249);
        stroke(243, 9, 247);
        strokeWeight(3);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}