
var img = "";
var status = "";
var objects = [];

function preload(){
  img = loadImage("img.jpg");
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results); 
  objects = results;
}

function draw() {
  image(img, 0, 0, 640, 420);


    if(status != "")
    {
    }


  fill('#FFCCCB');
  text("Dog", 45, 75);
  noFill();
  stroke('#a3c585');
  rect(30, 60, 40, 350);

  fill('#Oda2ff');
  text("Cat", 320, 120);
  noFill();
}