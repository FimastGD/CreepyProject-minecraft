function git() {
  ipcRenderer.send('open-external', 'https://github.com');
}
function upd() {
  ipcRenderer.send('open-external2', 'https://github.com');
}
