class Stone{
	constructor(m,n,o)
	{
	// assign options to the rubber ball
	var options = {
		//isStatic: true,
		restitution:0.3,
		friction: 0.9,
		density:12
		
	}
		this.m=m;
		this.n=n;
		this.o=o
		this.body=Bodies.circle(this.m, this.n, (this.o-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
             ellipse(0,0,this.o,this.o);

			pop()
	}

}