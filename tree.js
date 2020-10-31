class tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 400;
      this.height = 500;
      World.add(world, this.body);
      this.image = loadImage("tree.png");
    }
    display(){
      
      var pos =this.body.position;
      push ();
      
    
     translate(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
		 image(this.image, 500,100,this.width, this.height)
      
      pop();
    }
  };