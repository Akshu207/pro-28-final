
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stone;
var elastic
var boy;
var BackgroundImg;
var tree2,tree2Img;
var groundBrick;
var groundBrick2;
var basket;

function preload(){
	boy=loadImage("juno--.png");
  basket=loadImage("basket1.png");
    BackgroundImg = loadImage("Background1.jpg");
    tree2Img = loadImage("tree2.png");
    
  }

function setup() {
	createCanvas(1500, 710);
	engine = Engine.create();
	world = engine.world;

   
tree2 = createSprite(500,300,100,100);
tree2.addImage(tree2Img);

groundBrick =new Ground(500,705,200,20);
groundBrick2=new Ground2(20,20,20,20);

	mango1=new Mango(1050,100,10);
	mango2=new Mango(950,200,30);
	mango3=new Mango(1300,210,30);
	mango4=new Mango(1200,300,30);
	mango5=new Mango(1200,100,30);
	mango6=new Mango(1070,490,30);
	mango7=new Mango(1370,400,10);
  mango8=new Mango(1060,270,30);
  mango9=new Mango(940,420,30);
  mango10=new Mango(1200,410,30);

	stone=new Stone(200,340,30);


	treeObj=new Tree(1050,570);
	
elastic = new Launcher(stone.body,{x:360,y:505});
	
	Engine.run(engine);

}

function draw() {

  background(BackgroundImg);
  //Add code for displaying text here!
  image(boy ,200,400,200,300);

  image(basket,790,500,400,200);

  image(basket,1190,550,300,150);
  groundBrick.display();
  groundBrick2.display();

tree2.display();
  elastic.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);

 
  fill(0)
  textSize(20)
text("Press space for another chance to play",100,50,400)
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
 }
 
 function mouseReleased(){
	 elastic.fly()                                                                           
 }

 function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}

//function mangoFalling(mango){
  //mangoBodyPosition=mango.body.position
  //if(mango.y >= 690 ){
  //Matter.Body.setStatic(mango.body,true)  
//}
                               

//}

function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(stone.body,{x:360, y:505})
	elastic.attach(stone.body)
	}
}




  
