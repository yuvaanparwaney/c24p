class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(50,180,20,options);
        World.add(world, this.body);
        
    }
    display(){
        var pos =this.body.position;
        ellipse(pos.x,pos.y,20);
    }
}