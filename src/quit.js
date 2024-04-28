function quitgame() {
  ipcRenderer.send('quit');
}
console.log('rendered quit');