const { ipcRenderer } = require('electron');
function closeApp() {
  ipcRenderer.send('quit');
}
document.getElementById('quit').addEventListener('click', closeApp);