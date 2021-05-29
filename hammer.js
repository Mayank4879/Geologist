class Hammer {
    constructor(x, y) {
      var options = {
          'density':2,
          'friction':1.0,
          'restitution':0.5
      }
      this.body = Bodies.rectangle(x, y, 140, 800, options);
      this.width = 130;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  