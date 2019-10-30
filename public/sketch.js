function preload(){
}

var socket;

function setup() {
  createCanvas(windowWidth,windowHeight)
  background('red');

  socket = io();

  socket.on('mouseBroadcast', newDrawing);

  function newDrawing(receivedData){
    fill('yellow');
    ellipse(receivedData.x, receivedData.y, 20);
  }

}

function draw() {
  noStroke();
}

function mouseDragged(){
  fill('white');
  ellipse(mouseX, mouseY, 20);

  var sendData = {
    x:mouseX,
    y:mouseY
  }

  socket.emit('mouse',sendData);
}
