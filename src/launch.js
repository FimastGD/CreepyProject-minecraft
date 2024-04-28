let vers = "ja12303";

function select() {
  let selectButton = document.getElementById('select');
  if (vers === "ja12303") {
    vers = "ja12303rem";
    selectButton.innerHTML = '<font size="2px">Alpha 1.2.3_03 (Remastered)</font>';
  } else {
    vers = "ja12303";
    selectButton.textContent = 'Alpha 1.2.3_03';
  }
}
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('select').textContent = 'Alpha 1.2.3_03';
});

function launch() {
  route = `C:\\creepyproject\\java\\${vers}\\preload.bat`;
  ipcRenderer.send('launch', route);
  console.log('routed');
}
