const { ipcRenderer } = require('electron');
document.getElementById('fps').textContent = "Calculating...";
let lastTime = performance.now();
let frameCount = 0;

function updateFPS() {
const now = performance.now();
const deltaTime = now - lastTime;
frameCount++;

if (deltaTime >= 1000) {
    const fps = frameCount;
    frameCount = 0;
    lastTime = now;


    document.getElementById('fps').textContent = fps/*+ 295*/;
}

requestAnimationFrame(updateFPS);
}
requestAnimationFrame(updateFPS);


//const { ipcRenderer } = require('electron');

document.getElementById('git').addEventListener('click', () => {
ipcRenderer.send('open-external', 'https://github.com');
});

//MEMORY GET

const osu = require('node-os-utils');
const mem = osu.mem;

function updateMemoryInfo() {
mem.info().then(info => {
let infoString = JSON.stringify(info, null, 2);
infoString = infoString.replace(/[{}]/g, '');
infoString = infoString.replace(/":/g, ': ');
infoString = infoString.replace(/"/g, '');

document.getElementById('debug').textContent = infoString;
});
}
setInterval(updateMemoryInfo, 2000);

// const exec = require('child_process').exec;

// function checkJavaVersion() {
//   exec('java -version', (error, stdout, stderr) => {
//     let javaDiv = document.getElementById('java');
//     if (stderr.includes('version "1.8')) {
//       javaDiv.innerHTML = 'Java 8 is installed.';
//     } else {
//       javaDiv.innerHTML = '<font color="yellow">Java 8 is not installed!</font>';
//     }
//   });
// }

// checkJavaVersion();

function quitgame() {
ipcRenderer.send('quit');
}

function launch() {
vers = "ja12303";
route = `C:\\creepyproject\\java\\${vers}\\preload.bat`;
ipcRenderer.send('launch', route);
}

