function git() {
  var click = new Audio('../assets/sounds/CP_click01.mp3');
  click.play();
  ipcRenderer.send('open-external', 'https://github.com');
}
function upd() {
  var click = new Audio('../assets/sounds/CP_click01.mp3');
  click.play();
  ipcRenderer.send('open-external2', 'https://github.com');
}
