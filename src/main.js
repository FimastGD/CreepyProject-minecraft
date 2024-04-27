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
    
            // Обновите значение FPS в div
            document.getElementById('fps').textContent = fps/*+ 80*/;
        }
    
        requestAnimationFrame(updateFPS);
        }
    
        // Запустите функцию updateFPS
        requestAnimationFrame(updateFPS);
    
    
        const { ipcRenderer } = require('electron');
    
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
    
        // Обновляем содержимое div с id="debug"
        document.getElementById('debug').textContent = infoString;
      });
    }
    
///// QUIT.JS /////


    // Устанавливаем интервал обновления каждые 2 секунды (2000 миллисекунд)
    setInterval(updateMemoryInfo, 2000);

    const { ipcRenderer } = require('electron');
function closeApp() {
  ipcRenderer.send('quit');
}
document.getElementById('quit').addEventListener('click', closeApp);


///// LAUNCH.JS /////


const { ipcRenderer } = require('electron');
function launch() {
  ver = "ja12303";
  ipcRenderer.send('launch', ver);
}
document.getElementById('launch').addEventListener('click', launch());

// let etc если етк == альфа 12303 то выполнить испрендер лаунч четатам