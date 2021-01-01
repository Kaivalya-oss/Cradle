class Sling{
    constructor(bodyA,pointB){
        var Sling_options={
            bodyA : bodyA,
            pointB : pointB,
            stifffness: 1,
            angularStiffness: 1,
            lenght: 220  
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.pointY = bodyA - 250;
        this.sling = Constraint.create(Sling_options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointB = this.pointB;
            var pointA = this.sling.bodyA.position;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }

}