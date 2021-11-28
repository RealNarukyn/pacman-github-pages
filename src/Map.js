// let pacmanMap = `
// WWWWWWWWWWWWWWWWWWWWWWWWWWWW
// W............WW............W
// W.WWWW.WWWWW.WW.WWWWW.WWWW.W
// W*WWWW.WWWWW.WW.WWWWW.WWWW*W
// W.WWWW.WWWWW.WW.WWWWW.WWWW.W
// W..........................W
// W.WWWW.WW.WWWWWWWW.WW.WWWW.W
// W.WWWW.WW.WWWWWWWW.WW.WWWW.W
// W......WW....WW....WW......W
// WWWWWW.WWWWW.WW.WWWWW.WWWWWW
// WWWWWW.WWWWW.WW.WWWWW.WWWWWW
// WWWWWW.WW..........WW.WWWWWW
// WWWWWW.WW.WWW--WWW.WW.WWWWWW
// WWWWWW.WW.WooooooW.WW.WWWWWW
// ..........WooooooW..........
// WWWWWW.WW.WooooooW.WW.WWWWWW
// WWWWWW.WW.WWWWWWWW.WW.WWWWWW
// WWWWWW.WW..........WW.WWWWWW
// WWWWWW.WW.WWWWWWWW.WW.WWWWWW
// WWWWWW.WW.WWWWWWWW.WW.WWWWWW
// W............WW............W
// W.WWWW.WWWWW.WW.WWWWW.WWWW.W
// W*WWWW.WWWWW.WW.WWWWW.WWWW*W
// W...WW................WW...W
// WWW.WW.WW.WWWWWWWW.WW.WW.WWW
// WWW.WW.WW.WWWWWWWW.WW.WW.WWW
// W......WW....WW....WW......W
// W.WWWWWWWWWW.WW.WWWWWWWWWW.W
// W.WWWWWWWWWW.WW.WWWWWWWWWW.W
// W..........................W
// WWWWWWWWWWWWWWWWWWWWWWWWWWWW
// `;
let pacmanMap = `
WWWW.WWWWWWWWWWWWWWWWWW.WWWW
WWWW.......................W
WWWW....WWWWWWW.WWWWW......W
...........W....W.....WWWW..
W..........W....WWWW...WWW.W
W..WWW..W..W.......W...WWW.W
W....W..WWWW...WWWWW...WW..W
W....W.................WW..W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
WW.WWW.WWWWW.WW.WWWWW.WWWW.W
WW.WWW.WWWWW.WW.WWWWW......W
WW.WWW.WW..........WW.WWWWWW
WW.....WW.WWWWWWWW.WW.WWWWWW
WW.WWW.WW.WWWWWWWW.WW.WWWWWW
...WW.....WWWWWWWW.....WW...
W..........................W
W.wWWWWW.WWWW.WW--WW.WWWWW.W
W....W...W....WooooW.W.W.W.W
W.WW.W...WWWW.WooooW.W.W.W.W
W.WW.W...W....WWWWWW.W...W.W
W.WW.W...WWWW.W....W.W...W.W
W..........................W
WWWWWW.....................W
WWWWWW................WW...W
WWWWWW.WW.WWWWWWWW.WW.WW.WWW
WWWWWW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWW.WWWWWWWWWWWWWWWWWW.WWWW
`;

const mapArray = pacmanMap.split('\n').filter((e) => e);
const getWidthPX = (canvasWidth, elementsPerLine) =>
  canvasWidth / elementsPerLine;
const getHeightPX = (canvasHeight, elementsPerColumn) =>
  canvasHeight / elementsPerColumn;

class Map {
  constructor(ctx) {
    this.canvasWidth = ctx.canvas.width;
    this.canvasHeight = ctx.canvas.height;
    this.pxWidth = getWidthPX(canvasWidth, mapArray[0].length);
    this.pxHeight = getHeightPX(canvasHeight, mapArray.length);
  }

  keyboard_event() {}
  update() {}
  draw(delta, ctx) {
    const posPointer = { x: 0, y: 0 };

    for (let y = 0; y < mapArray.length; y++) {
      for (let x = 0; x < mapArray[y].length; x++) {
        const position = { x: x * this.pxWidth, y: y * this.pxHeight };

        switch (mapArray[y][x]) {
          case 'W':
            ctx.fillStyle = 'black';
            ctx.strokeStyle = 'blue';

            ctx.beginPath();
            ctx.rect(position.x, position.y, this.pxWidth, this.pxHeight);

            ctx.fill();
            ctx.stroke();
            break;
          case '.':
            ctx.fillStyle = 'yellow';

            ctx.moveTo(
              position.x + this.pxWidth / 2,
              position.y + this.pxHeight / 2
            );
            ctx.beginPath();
            ctx.arc(
              position.x + this.pxWidth / 2,
              position.y + this.pxHeight / 2,
              2,
              0,
              2 * Math.PI
            );
            ctx.closePath();
            ctx.fill();
            break;
          case 'o':
            //## Queda mas bonito si no le ponemos nada...

            // ctx.fillStyle = 'blueviolet';
            // ctx.beginPath();
            // ctx.rect(position.x, position.y, this.pxWidth, this.pxHeight);
            // ctx.fill();
            break;
          case '-':
            ctx.fillStyle = 'brown';

            ctx.beginPath();
            ctx.rect(position.x, position.y, this.pxWidth, 5);

            ctx.fill();
            break;
          case '*':
            ctx.fillStyle = 'red';

            ctx.moveTo(
              position.x + this.pxWidth / 2,
              position.y + this.pxHeight / 2
            );
            ctx.beginPath();
            ctx.arc(
              position.x + this.pxWidth / 2,
              position.y + this.pxHeight / 2,
              5,
              0,
              2 * Math.PI
            );
            ctx.closePath();
            ctx.fill();
            break;
          default:
            console.log(`Y:${y}-X:${x} = ${mapArray[y][x]}`);
            break;
        }

        //## Update next X Axis
        posPointer.x += this.pxWidth;
      }
      //## Update next Y Axis
      posPointer.y += this.pxHeight;
    }
  }
}
