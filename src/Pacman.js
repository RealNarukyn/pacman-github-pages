const angleToRad = (angle) => (angle * Math.PI) / 180;

class Pacman {
  constructor(initialPos, color = 'yellow', maxSpeed = 100) {
    this.pacmanSize = 10;
    this.mouthOpen = 20;
    this.origin = { x: initialPos.x, y: initialPos.y };
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.speed = { x: maxSpeed, y: 0 };
  }
  update(delta) {
    this.mouthOpen += 0.8;
    let newPosX = this.origin.x + this.speed.x * delta;
    let newPosY = this.origin.y + this.speed.y * delta;
    if (newPosX < canvasWidth && newPosX >= 0) {
      this.origin.x = newPosX;
    }
    if (newPosY < canvasHeight && newPosY > 0) {
      this.origin.y = newPosY;
    }
  }
  keyboard_event(key) {
    switch (key) {
      case `ArrowRight`:
        this.speed.x = this.maxSpeed;
        this.speed.y = 0;
        break;
      case `ArrowLeft`:
        this.speed.x = -this.maxSpeed;
        this.speed.y = 0;
        break;
      case `ArrowUp`:
        this.speed.x = 0;
        this.speed.y = -this.maxSpeed;
        break;
      case `ArrowDown`:
        this.speed.x = 0;
        this.speed.y = this.maxSpeed;
        break;
    }
  }
  draw(delta, ctx) {
    let origin = this.origin;
    let pacmanSize = this.pacmanSize;
    // let mouthOpen = this.mouthOpen;

    let open = 20 * Math.sin(10 * this.mouthOpen * delta) + 20;

    // Controlamos la dirección del PACMAN
    let direction = 0;
    if (this.speed.x != 0 && this.speed.x < 0) {
      direction = 180;
    }
    if (this.speed.y != 0) {
      if (this.speed.y < 0) {
        direction = -90;
      }
      if (this.speed.y > 0) {
        direction = 90;
      }
    }

    ctx.strokeStyle = 'black';
    ctx.fillStyle = this.color;
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.arc(
      origin.x,
      origin.y,
      pacmanSize,
      angleToRad(-open + direction),
      angleToRad(open + direction),
      true
    );

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
}
