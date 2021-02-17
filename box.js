class Box {
 constructor(x,y,w,h) {
     var opt={
         restitution:0.5
     }
     
     this.body=Bodies.rectangle(x,y,w,h,opt)
     World.add(world,this.body);

     this.w=w;
     this.w=h;
}  

display(){

    rect(this.body.position.x, this.body.position.y,this.w,this.h)
}
}
