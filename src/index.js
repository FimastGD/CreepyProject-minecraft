const { app, BrowserWindow, ipcMain, shell, dialog } = require('electron');
const path = require('path');
const osu = require('node-os-utils');
require('events').EventEmitter.defaultMaxListeners = 20;



const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 650,
        icon: path.join(__dirname, 'icon.ico'),
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    
    win.setMenuBarVisibility(false);
    win.setTitle('Creepy Project');
    win.loadFile('src/index.html');

    ipcMain.on('open-external', (event, url) => {
        shell.openExternal("https://github.com/FimastGD/CreepyProject-minecraft");
      });
    


      ipcMain.on('quit', () => {
        app.quit();
      });
      ipcMain.on('launch', (event, route) => {
        //console.log(route);
        if (route == "jhex01" || route == "jhex02" || route == "jhex03") {
            const options = {
              type: 'warning',
              buttons: ['OK', 'Cancel'],
              defaultId: 0,
              title: 'Alert of a possible virus',
              message: 'This version has not been fully checked and may contain dangerous software. YOU DO EVERYTHING AT YOUR OWN RISK! Do you really want to continue?'
            };
        
            dialog.showMessageBox(win, options).then(result => {
              if (result.response === 0) {
                shell.openPath(`C:\\creepyproject\\java\\${route}\\preload.bat`);
              }
            });
      } else {
        shell.openPath(`C:\\creepyproject\\java\\${route}\\preload.bat`);
      }
      
    });

    
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());