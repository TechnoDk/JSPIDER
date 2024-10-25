const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

const numLines = 50; // Number of lines/points interacting with the cursor
let lines = [];

class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.size = Math.random() * 2 + 1;
    this.velocityX = (Math.random() - 0.5) * 5;
    this.velocityY = (Math.random() - 0.5) * 5;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(mouse.x, mouse.y); // Connect each point to the mouse
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.stroke();
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Bounce off the edges of the screen
    if (this.x > canvas.width || this.x < 0) {
      this.velocityX *= -1;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.velocityY *= -1;
    }

    this.draw();
  }
}

function createLines() {
  lines = [];
  for (let i = 0; i < numLines; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    lines.push(new Line(x, y));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lines.forEach((line) => {
    line.update();
  });

  requestAnimationFrame(animate);
}

// Update mouse position on mousemove
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// Resize the canvas when the window is resized
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createLines(); // Recreate lines to adjust to the new canvas size
});

// Initialize the animation
createLines();
animate();
