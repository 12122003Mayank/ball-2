class Ball 
{
  constructor(x,y,r) 
  {
    var ballfeatures =
      {
        restitution:1
      } 
      this.ball = Bodies.circle (x,y,r,ballfeatures)
      World.add(myWorld,this.ball)
      this.r=r;
      this.paper=loadImage("paper.png")
     }
  display ()
  {
    push ()
    translate (this.ball.position.x,this.ball.position.y) 
    rotate (this.ball.angle)
  imageMode(CENTER)
  image (this.paper,0,0,50,50)
  pop ()
  }
}
