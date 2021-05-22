class Mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			'restitution' :0.9,
            'friction' :0.5,
			'density':1
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,150,150,this.options)
		pop()
 }
}