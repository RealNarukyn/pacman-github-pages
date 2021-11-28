const canvasWidth = 800;
const canvasHeight = 800;

window.onload = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.id = 'canvas';
  canvasDOM.width = canvasWidth;
  canvasDOM.height = canvasHeight;
  document.body.appendChild(canvasDOM);

  const ctx = canvas.getContext('2d');
  // var canvas = document.getElementById('canvas');
  // var ctx = canvas.getContext('2d');

  // Pintamos un cuadrado
  // ctx.fillStyle = 'green';
  // ctx.fillRect(10, 10, 100, 100);

  // Pintamos Pacman
  let actors = [
    new Map(ctx),
    new Pacman({ x: 125, y: 89 }, 'yellow', 100),
    new Pacman({ x: 200, y: 200 }, 'green', 120),
    new Pacman({ x: 200, y: 300 }, 'red', 150),
    new Pacman({ x: 200, y: 400 }, 'white', 50),
    new FPSviewer({ x: 5, y: 15 })
  ];

  // GAME LOOP --> Bucle de renderizado y actualización
  // setInterval(() => {
  //   actors.forEach((e) => e.update());
  //   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  //   actors.forEach((e) => {
  //     e.draw(ctx);
  //   });
  // }, 100);
  let lastFrame = 0;
  const render = (time) => {
    // console.log(time);
    let delta = (time - lastFrame) / 1000;
    // console.log(delta);
    lastFrame = time;
    actors.forEach((e) => e.update(delta));
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    actors.forEach((e) => {
      e.draw(delta, ctx);
    });
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  document.body.addEventListener('keydown', (e) => {
    // console.log(e.key);
    actors.forEach((actor) => {
      actor.keyboard_event(e.key);
    });
  });
};
