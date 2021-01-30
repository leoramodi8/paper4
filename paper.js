class Paper {
    constructor(x, y, radius) {
        var options = {
           isStatic: false,
           restitution :0.3,
           friction : 2,
           density :2.2,

        }
        this.body = Matter.Bodies.circle(x, y, radius/1.02, options);
       this.radius = radius; 
       this.image= loadImage("sprites/paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*3);
        pop();
      }
}