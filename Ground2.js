class Ground2
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
		this.ground2=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world,this.ground2)

	}
	
	display()
	{
			var posground2=this.ground2.position;
			push()
			imageMode(CENTER);
			image(this.image,1100,700,900,30,this.options)
			pop()
			
	}

}