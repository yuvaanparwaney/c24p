class TrashCan {
    constructor() {
      var options = {
        isStatic: true
      }
      this.body1 = Bodies.rectangle(700,200,20,80,options);
      this.body2 = Bodies.rectangle(400,250,800,20,options);
      this.body3 = Bodies.rectangle(790,200,20,80,options);
      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }
    display(){
      var pos1 =this.body1.position;
      var pos3 =this.body3.position;
      rectMode(CENTER);
      fill("pink");
      rect(400,250,800,20);
      rect(pos1.x,pos1.y,20,80);
      rect(pos3.x,pos3.y,20,80);
    }
  };