const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const osu = require('node-os-utils');



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
        console.log(route)
        shell.openPath(route);
      });
    

}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());