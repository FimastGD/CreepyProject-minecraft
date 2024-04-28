function launch() {
  vers = "ja12303";
  route = `C:\\creepyproject\\java\\${vers}\\preload.bat`;
  ipcRenderer.send('launch', route);
  console.log('routed');
}

// let etc если етк == альфа 12303 то выполнить испрендер лаунч четатам