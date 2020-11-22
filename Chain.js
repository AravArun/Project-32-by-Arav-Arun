
class Chain{
	constructor(bodyA,pointB){
		var options={
            bodyA:bodyA,			 
			pointB:pointB, 
			stiffness:0.001, 
			length:1
		}
		this.bodyA=bodyA
		this.pointB=pointB
		this.chain=constraint.create(options)
		World.add(world,this.chain)
	}
	attach(body)
	{
		this.chain.bodyA=body;
	}

	released()
	{
		this.chain.bodyA=null;
	}

	display(){
		if(this.chain.bodyA!=null)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB
            stroke("black");
			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}
