const { ipcRenderer } = require('electron');
function launch() {
  ver = "ja12303";
  ipcRenderer.send('launch', ver);
}
document.getElementById('launch').addEventListener('click', launch());

// let etc если етк == альфа 12303 то выполнить испрендер лаунч четатам