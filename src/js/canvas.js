const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

class Symbol {
  characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ:・.=*+-<></>[]{}0123456789日ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ";
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.fontSize = size;
    this.char = "";
  }

  draw() {
    ctx.translate(this.x, this.y);
    ctx.scale(-1, 1);
    ctx.fillText(this.char, -this.x * this.fontSize, this.y * this.fontSize);
    ctx.resetTransform();
  }

  update() {
    this.y++;
    if (this.y * this.fontSize > canvas.height && Math.random() > 0.97)
      this.y = 0;
    this.char =
      this.characters[Math.floor(Math.random() * this.characters.length)];
    this.draw();
  }
}

class Matrix {
  constructor() {
    this.width = canvas.width;
    this.height = canvas.height;
    this.fontSize = 18;
    this.columns = this.width / this.fontSize;
    this.symbols = [];
    this.#intialize();
  }

  #intialize() {
    for (let i = 0; i < this.columns; i++) {
      const symbol = new Symbol(i, 0, this.fontSize);
      this.symbols.push(symbol);
    }
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    this.columns = this.width / this.fontSize;
    this.symbols = [];
    this.#intialize();
  }
}

export const matrix = new Matrix();

let lastTime = 0;
const FPS = 30;
const nextFrame = 1000 / FPS;
let timer = 0;

export function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {
    ctx.font = matrix.fontSize + "px monospace";
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.textAlign = "center";
    ctx.fillRect(0, 0, matrix.width, matrix.height);
    ctx.fillStyle = "#ff003c";
    matrix.symbols.forEach((symbol) => symbol.update());
    timer = 0;
  } else {
    timer += deltaTime;
  }
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  matrix.resize(innerWidth, innerHeight);
});
