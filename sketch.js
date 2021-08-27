var a = prompt("enter a value")
var b = prompt("enter a value")
function setup() {
  createCanvas(400, 400);

  var button = createButton("swap")
  button.mousePressed(swap)
}

function draw() {
  background(220);
}
function swap(){
  [a,b]= [b,a]
  console.log("value of a:"+a)
  console.log("value of b:"+b) 
}