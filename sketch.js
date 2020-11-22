const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground1,ground2,lGround;
var hexa,sling,hexaImg,sq1,sq2,sq3,sq4,score,bg,backgroundIMG;

function preload()
{	getTime();
	var hexaImg = loadImage("hexagon.png");
	var sq1 = loadImage("sq.png");
	var sq2 = loadImage("sq2.png");
	var sq3 = loadImage("sq3.png");
	var sq4 = loadImage("sq4.png");
	
}
function setup() {
	var canvas = createCanvas(1050, 500);
	engine = Engine.create();
	world = engine.world;
	var options={isStatic:true}
	score = 0;
	ground1 = new Ground(500,400,700,10);
	lGround = new Ground(0,500,3000,30);

	
	box1 = new Box(500,240,30,40);
	box2 = new Box(490,260,30,40);
	box3 = new Box(500,260,30,40);
	box4 = new Box(510,260,30,40);
	box5 = new Box(480,280,30,40);
	box6 = new Box(490,280,30,40);
	box7 = new Box(500,280,30,40);
	
	
	box8 = new Box(510,280,30,40);
	box9 = new Box(520,280,30,40);
	box10 = new Box(470,300,30,40);
	box11 = new Box(480,300,30,40,);
	box12 = new Box(490,300,30,40);
	box13 = new Box(500,300,30,40);
	box14 = new Box(510,300,30,40);
	box15 = new Box(520,300,30,40);
	box16 = new Box(530,300,30,40);

	hexa = new Poly(100,100,50,40);
	sling = new Chain(hexa.body,{x:200,y:100});

	Engine.run(engine);
}

function draw() {
	if(backgroundIMG){
	background(backgroundIMG);
	textSize(20);
	fill ("white");
	text("SCORE:"+score,800,50);
	Engine.update(engine);
	fill("green")
	box1.display();
	fill("pink");
	box2.display();
	box3.display();
	box4.display();
	fill ("gold");
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	fill ("skyblue");
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	ground1.display();
	lGround.display();
  	hexa.display();
 	sling.display();
 
	box1.score();
	box2.score();
	box3.score();
	box4.score();
	box5.score();
	box6.score();
	box7.score();
	box8.score();
	box9.score();
	box10.score();
	box11.score();
	box12.score();
	box13.score();
	box14.score();
	box15.score();
	box16.score();
	drawSprites();
	}
}

async function getTime(){
	var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
	var responseJSON = await response.json()
	var datetime = responseJSON.datetime
	var hour = datetime.slice(11,13)

	if(hour >=06 && hour <=18){
		bg = "bg.png"
	}
	else{
		bg = "bg2.jpg"
	}
	backgroundIMG = loadImage(bg);
}
function mouseDragged()
{
    Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.released();
}
function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(hexa.body,{x:100,y:400});
			sling.attach(hexa.body);
	}
}