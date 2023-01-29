function setup() {
  createCanvas(375, 375);
  background(255)
  strokeWeight(2)
}

function genRing(numberOfsegs, radius, binary = 0, counter = 0) {
  if (radius > 1) {
    let arcLength = 0
    fill(0)
    noStroke()
  for (let i = 0; i < numberOfsegs; i++) {
    
    let rotation = map(i, 0, numberOfsegs, 0, TWO_PI)
    arcLength = 0.9*radius*TWO_PI/(numberOfsegs+0)
    
    push()
    translate(width / 2, height / 2)
    
    let ringRotation = sin(counter*0.5+ frameCount*0.03)*0.25
    
    rotate(rotation + ringRotation)
    if (i % 2 == binary) {
      rect(-arcLength/2, -radius, arcLength, arcLength)
    }
    pop() 
  }
    noFill()
    stroke(127)
     strokeWeight(2-counter*0.1)
    ellipse(width/2, height/2, radius*2)
    binary = +!binary
    counter++
  genRing(numberOfsegs, radius-arcLength, binary, counter)
  }
}

function draw() {
  background(255);
  genRing(30, width/2)
}
