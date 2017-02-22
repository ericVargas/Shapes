function setup() {
  createCanvas(600, 400);                             // canvas size
  background(250);                                    // color or image of background
}

function draw() {
  rect(200,100, 50, 25);                              // first two is location of rectangle, last two is width and length
  fill("red");                                        // color of shape
    ellipse(25, 50, 10, 20);                          // first two is location of ellipse, last two is width and length
    fill("blue");                                     // color of shape
      rect(50, 50, 30, 300, 30);                      // first two is location of rectangle, next two is width and length, last is radius for rounded corners
      fill("green");                                  // color of shape
        triangle(300, 300, 300, 50, 350, 350);        // position of each corner of triangle, point A (x,y), point B (x,y), point C (x,y)
        fill("yellow");                               // color of shape
}

// buoebuiovebuovbrueburebvurebvreiwbvureiqbjedw;qnjdnwjo
