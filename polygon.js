class Polygon{
    constructor() {
        var options = {
          restitution : 0.8,
          friction : 1.4,
          density : 1.0 
        }
        this.body = Bodies.circle(50,200,20);
        this.width =  60;
        this.height = 60;
        this.image = loadImage ("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
}
