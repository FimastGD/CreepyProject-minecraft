function quitgame() {
  var click = new Audio('../assets/sounds/CP_click01.mp3');
  click.play();
  setTimeout(function() {
    // Код, который нужно выполнить после паузы
    ipcRenderer.send('quit');
  }, 700);
  
}
console.log('rendered quit');