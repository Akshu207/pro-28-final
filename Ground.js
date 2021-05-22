class Ground
{
	constructor(x,y,width,height)
	{
        var options={
            isStatic:true,
			'restitution':0,
			'friction':0,
			'density':1
	
        }
		this.x=x;
		this.y=y;
		this.width = width;
		this.height = height;
		
		
		this.image=loadImage("brick.jpg")
		this.ground=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world,this.ground)

	}
	
	display()
	{
			var posground=this.ground.position;
			push()
			imageMode(CENTER);
			image(this.image,450,700,900,30,this.options)
			pop()
			
	}

}