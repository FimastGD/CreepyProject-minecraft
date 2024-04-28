function git() {
  ipcRenderer.send('open-external', 'https://github.com');
}
