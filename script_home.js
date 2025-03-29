const canvas = document.getElementById("fullcanvas");

const drawLength = 200; 
const mX = [];
const mY = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(); 
}

function draw() {
    if (mX.length > 1) {
        noFill();
        stroke("black");
        strokeWeight(0.5);
        beginShape();
        for (let i = 0; i < mX.length; i++) {
            curveVertex(mX[i], mY[i]);
        }
        endShape();
    }
}

function mouseMoved() {
    let lastX = mX.length > 0 ? mX[mX.length - 1] : mouseX;
    let lastY = mY.length > 0 ? mY[mY.length - 1] : mouseY;

    let smoothX = lerp(lastX, mouseX, 0.1); 
    let smoothY = lerp(lastY, mouseY, 0.1);

    mX.push(smoothX);
    mY.push(smoothY);

    if (mX.length > drawLength) {
        mX.shift(); 
        mY.shift();
    }
}

const words = 
["welcome","to", "yicing's", "website",
"click", "to", "see", "more", "about", "me", "and", "my", "works",
"<3", "<3", "<3", "<3", "<3", "<3", "<3", "<3", "<3", "<3"];
let wordIndex = 0;

function mouseClicked(event) {
    if (event.target.tagName !== 'CANVAS') {
        return;
    }

    mX.length = 0;
    mY.length = 0;

    const word = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;

    const x = mouseX;
    const y = mouseY;

    noStroke();
    textFont("bm-plex-sans-jp");
    fill("black");
    textSize(12);
    text(word, x, y);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}   

window.addEventListener("resize", resizeCanvas);
resizeCanvas();