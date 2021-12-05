var snow = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawSnow();
}

function drawSnow() {
  for (let i = 0; i < 50; i++) {
    var snowflake = {
      x: random(windowWidth),
      y: random(windowHeight),
      r: random(1, 12),
      speed: random(10),
      opacity: random(20, 255),
    };

    snow.push(snowflake);
  }
}

function draw() {
  clear();

  snow.forEach((s) => {
    fill(189, 189, 189, s.opacity);
    noStroke();
    circle(s.x, s.y, s.r);
    if (s.y > windowHeight) s.y = -15;
    s.x += Math.sin(Date.now() * 0.0001 * s.speed) * 4;
    s.y += Math.cos(Date.now() * 0.0001 * s.speed) * 4 + s.speed;
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
