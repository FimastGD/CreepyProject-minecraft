const { app, BrowserWindow, ipcMain, shell, dialog, webContents } = require('electron');
const path = require('path');
const axios = require('axios');
const osu = require('node-os-utils');
require('events').EventEmitter.defaultMaxListeners = 20;
const fs = require('fs');
const fsAs = require('fs').promises;
const https = require('https');
const AdmZip = require('adm-zip');
//const crypto = require('crypto');

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
    /*VERSION*/ const current = 1122;
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

let restart = 0;
      ipcMain.on('quit', () => {
        app.quit();
      });
      ipcMain.on('launch', (event, route, size) => {
        const folderPath = 'C:\\creepyproject\\java';
        let folderToCheck = route;
        let fileUrl = `https://cdn.blazehost.ru/creepyproject/${route}.zip`;
        let filePath = path.join(folderPath, `${route}.zip`);
        
        


        if (!fs.existsSync(path.join(folderPath, folderToCheck))) {
          ipcMain.once('give-downloading', (event, code) => {
            webContents.getAllWebContents().forEach(wc => {
              wc.executeJavaScript(code);
            });
          });
          
          
          function getFileSizeInMB(filePath) {
            const sizeInBytes = fs.statSync(filePath).size;
            return (sizeInBytes / (1024 * 1024)).toFixed(2);
          }
          
          
          
          const filePathSize = path.join('C:', 'creepyproject', 'java', `${route}.zip`);
          
          
          let howDownload;
          
          
          let a = 1;
          async function delayWhileLoop() {
            while (/*fs.existsSync(path.join(folderPath, `${route}.zip`))*/a == 1) {
              await new Promise(resolve => setTimeout(resolve, 50));
              howDownload = getFileSizeInMB(filePathSize);
            console.log(`File: ${howDownload} MB`);
            ipcMain.on('give-downloading', (event, code) => {
              webContents.getAllWebContents().forEach(wc => {
                wc.executeJavaScript(code);
              });
            });
            let percent = (howDownload * 100) / size;
            percent = Math.round(percent);
            let script = `launchBtn3 = document.getElementById('launch');
            downstatus3 = document.getElementById('downstatus');
            launchBtn3.innerText = 'Downloading...';
            launchBtn3.disabled = true;
            launchBtn3.className = 'main-btn-disabled';
            downstatus3.innerHTML = '<font color="yellow">Installing Minecraft version...<br>(<font color="white">${howDownload} MB <font color="yellow">/</font> ${size} MB</font><font color="yellow"> / </font><font color="white">${percent} %<font color="yellow">)</font></font></font>';`;
            ipcMain.emit('give-downloading', null, script);

            }
          }
          
          delayWhileLoop();
       
          
          const file = fs.createWriteStream(filePath);
          const request = https.get(fileUrl, function(response) {
            response.pipe(file);
        
            file.on('finish', function() {
              file.close();
              console.log('[LOG] [win/INFO]: Downloaded');
        
              
              try {
                const zip = new AdmZip(filePath);
                zip.extractAllTo(folderPath, true);
                console.log('[LOG] [win/INFO]: Unpacked');
        
                
                fs.unlinkSync(filePath);
                console.log('[LOG] [win/INFO]: Cleaned');
                ipcMain.once('give-installed', (event, code) => {
                  webContents.getAllWebContents().forEach(wc => {
                    wc.executeJavaScript(code);
                  });
                });
                ipcMain.emit('give-installed', null, `let launchBtn2 = document.getElementById('launch');
                let downstatus2 = document.getElementById('downstatus');
                launchBtn2.innerText = 'Restart';
                launchBtn2.disabled = false;
                launchBtn2.className = 'main-btn';
                downstatus2.innerHTML = 'Minecraft installed! <font color="yellow">Please restart this launcher</font>';
          `);
                restart = 1;

              } catch (err) {
                console.error('[LOG] [win/ERROR]: ', err);
                const options_l1 = {
                  type: 'error',
                  buttons: ['OK'],
                  defaultId: 0,
                  title: 'Error',
                  message: `node.io.installVersionException: ${err}`
                };
                dialog.showMessageBox(win, options_l1).then(result => {
                  if (result.response === 0) {
                    //shell.openPath(`C:\\creepyproject\\java\\${route}\\preload.bat`);
                  }
                });
                ipcMain.once('give-error', (event, code) => {
                  webContents.getAllWebContents().forEach(wc => {
                    wc.executeJavaScript(code);
                  });
                });
                ipcMain.emit('give-error', null, `let launchBtn4 = document.getElementById('launch');
                let downstatus4 = document.getElementById('downstatus');
                launchBtn4.innerText = 'Restart';
                launchBtn4.disabled = false;
                launchBtn4.className = 'main-btn';
                downstatus4.innerHTML = '<font color="red">An unknown error occurred during installation. Please check your internet connection and restart the launcher</font>';
          `);
                
              }
            });
          });
        
          request.on('error', function(err) {
            console.error('[LOG] [win/ERROR]: ', err);
            const options_l1 = {
              type: 'error',
              buttons: ['OK'],
              defaultId: 0,
              title: 'Error',
              message: `node.io.installVersionException: ${err}`
            };
            dialog.showMessageBox(win, options_l1).then(result => {
              if (result.response === 0) {
                //shell.openPath(`C:\\creepyproject\\java\\${route}\\preload.bat`);
              }
            });
            ipcMain.once('give-error', (event, code) => {
              webContents.getAllWebContents().forEach(wc => {
                wc.executeJavaScript(code);
              });
            });
            ipcMain.emit('give-error', null, `let launchBtn4 = document.getElementById('launch');
            let downstatus4 = document.getElementById('downstatus');
            launchBtn4.innerText = 'Restart';
            launchBtn4.disabled = false;
            launchBtn4.className = 'main-btn';
            downstatus4.innerHTML = '<font color="red">An unknown error occurred during installation. Please check your internet connection and restart the launcher</font>';
      `);
          });
        } else {
          console.log('[LOG] [win/WARN]: Already installeds');
        }
        console.log(restart);
        /// end ///
        if (restart != 1 || restart === 0) {
        //console.log(route);
        if (fs.existsSync(path.join(folderPath, folderToCheck))) {
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
            if (route == "j1720") {
              const options = {
                type: 'info',
                buttons: ['Launch', 'Launch FIX'],
                defaultId: 0,
                title: 'Launch alert',
                message: 'To launch 1.7.20, click "Launch". If you get an error, then click "Launch FIX"'
              };
          
              dialog.showMessageBox(win, options).then(result => {
                if (result.response === 0) {
                  shell.openPath(`C:\\creepyproject\\java\\j1720\\preload.bat`);
                } else if (result.response === 1) {
                  shell.openPath(`C:\\creepyproject\\java\\j1720\\preloadFIX.bat`);
                }
              });
            } else {
              shell.openPath(`C:\\creepyproject\\java\\${route}\\preload.bat`);
            }
        
          }
        }
    } else {
      app.relaunch();
      app.exit(0);
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
    



   /* ipcMain.on('download', (event, ver) => {
    
    });*/

    
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());


// [LOG] [win/INFO]: 

