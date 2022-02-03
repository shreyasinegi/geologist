class Iron{
	constructor(p,q,r)
	{
	// assign options to the rubber ball
	var options = {
		//isStatic: true,
		restitution:0.9,
		friction: 3,
		density:30
		
		
	}
		this.p=p;
		this.q=q;
		this.r=r
		this.body=Bodies.circle(this.p, this.q, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("green");
			fill("lightbrown");
			//draw the ellipse here to display the rubber ball
             ellipse(0,0,this.r,this.r);

			pop()
	}

}