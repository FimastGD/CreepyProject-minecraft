const { app, BrowserWindow, ipcMain, shell, dialog, webContents } = require('electron');
const path = require('path');
const axios = require('axios');
const osu = require('node-os-utils');
require('events').EventEmitter.defaultMaxListeners = 20;
const fs = require('fs');
const { setMaxIdleHTTPParsers } = require('http');


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
    /*VERSION*/ const current = 1022;
    //win.webContents.openDevTools();
    win.setMenuBarVisibility(false);
    win.setTitle('Creepy Project');
    win.loadFile('src/index.html');

    ipcMain.on('open-external', (event, url) => {
        shell.openExternal("https://github.com/FimastGD/CreepyProject-minecraft");
      });
      
      ipcMain.on('open-external2', (event, url) => {
        shell.openExternal("https://github.com/FimastGD/CreepyProject-minecraft/releases");
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

    
    const url = 'https://api.blazehost.ru/creepyproject/latest';
    let dynamic;
    async function checkForUpdates() {
      try {
        const response = await axios.post(url);
        if (response.data > current) {
          ipcMain.once('execute-code', (event, code) => {
            webContents.getAllWebContents().forEach(wc => {
              wc.executeJavaScript(code);
            });
          });

          ipcMain.emit('execute-code', null, `let isWhite = true;
          const button = document.getElementById('git');
          button.innerText = 'Update';
          button.disabled = false;
          button.className = 'main-btn-small';
       
          setInterval(() => {
            button.style.backgroundColor = isWhite ? '#727272' : 'orange';
            isWhite = !isWhite;
          }, 500);`);
          // Показать сообщение о новом обновлении
          const options = {
            type: 'info',
            buttons: ['OK'],
            defaultId: 0,
            title: 'New update!',
            message: 'New update available! Click on "Update" button for install latest release'
          };
          const result = await dialog.showMessageBox(win, options);
          if (result.response === 0) {
            console.log("update!");
            dynamic = "1"; 
            console.log(dynamic);

            
          }
        } else {
          console.log('no no no');
        }
      } catch (error) {
        const options = {
          type: 'error',
          buttons: ['OK'],
          defaultId: 0,
          title: 'Error',
          message: `node.io.postException: ${error}`
        };
        dialog.showMessageBox(win, options).then(result => {
          if (result.response === 0) {
            //shell.openPath(`C:\\creepyproject\\java\\${route}\\preload.bat`);
          }
        });
        console.error(`Ошибка при выполнении POST-запроса: ${error}`);
      }
    }
    
    async function main() {
      await checkForUpdates();
      console.log(dynamic); 
    }
    main();
    
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());




