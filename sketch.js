let sonido;

function preload() {
  // soundFormats("wan", "mp3", "ogg");
  sonidoBassloop = loadSound("sonidos/bassloop.mp3");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(presionado);
}

function presionado() {
  sonidoBassloop.play();
  circle(mouseX, mouseY, 20);
}

function draw() {}

function mouseDragged() {
  sonidoBassloop.play();
  circle(mouseX, mouseY, 20);
}
