const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    

}

function draw(){

    // add condition to check if any background image is there to add
    if(bg)
    background(bg);

    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var data=await response.json();
    var time=data.datetime;
    // write code slice the datetime
    var hour=time.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06) {
        bg =loadImage("sunrise1.png");
    }else if(hour>=06 && hour<=08){
        bg =loadImage("sunrise2.png");
    }else if(hour>08 && hour<=10){
        bg =loadImage("sunrise3.png");
    }else if(hour>=10 && hour<=12){
        bg =loadImage("sunrise4.png");
    }else if(hour>=12 && hour<=14){
        bg =loadImage("sunrise5.png");
    }else if(hour>=14 && hour<=16){
        bg =loadImage("sunrise6.png");
    }else if(hour>=16 && hour<=18){
        bg =loadImage("sunrise7.png");
    }else if(hour>=18 && hour<=20){
        bg =loadImage("sunrise8.png");
    }else if(hour>20 && hour<=22){
        bg =loadImage("sunrise9.png");
    }else if(hour>23 && hour==0){
        bg =loadImage("sunrise10.png");    
    }else if(hour==0 && hour<=03){
        bg =loadImage("sunrise11.png");
    }else{
        bg =loadImage("sunrise12.png");
    }



    //load the image in backgroundImg variable here
    backgroundImg=loadImage("bg");
}
