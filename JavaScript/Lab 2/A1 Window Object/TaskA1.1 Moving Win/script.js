function start() {
  win = open("child.html", "", "width=100,height=100");
  interval = setInterval(moveDown, 100);
}
function moveDown() {
  win.moveBy(10, 10);
  win.focus();
  if (win.screenY > window.innerHeight - 100) {
    stopMoving();
    interval = setInterval(moveUp, 100);
  }
  if (win.closed) {
    stopMoving();
  }
}
function moveUp() {
  win.moveBy(-10, -10);
  win.focus();
  if (win.screenY === 0) {
    stopMoving();
    interval = setInterval(moveDown, 100);
  }
  if (win.closed) {
    stopMoving();
  }
}
function stopMoving() {
  win.focus();
  if (interval) {
    clearInterval(interval);
  }
}
