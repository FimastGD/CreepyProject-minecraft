ipcRenderer.send('give-downloading', `
let launchBtn3 = document.getElementById('launch');
let downstatus3 = document.getElementById('downstatus');
launchBtn3.innerText = 'Downloading...';
launchBtn3.disabled = true;
launchBtn3.className = 'main-btn-disabled';
downstatus3.innerHTML = '<font color="yellow">Installing minecraft version...</font>';
`);

ipcRenderer.send('give-downloading666', `
let launchBtn3 = document.getElementById('launch');
let downstatus3 = document.getElementById('downstatus');
launchBtn3.innerText = 'Downloading... (' + downloadedMB + 'MB of ' + totalMB + 'MB)';
downstatus3.innerHTML = '<font color="yellow">Installing minecraft version...</font>
launchBtn3.disabled = true;
launchBtn3.className = 'main-btn-disabled';
`);




ipcRenderer.send('give-installed', `
let launchBtn2 = document.getElementById('launch');
let downstatus2 = document.getElementById('downstatus');
launchBtn2.innerText = 'Restart';
launchBtn2.disabled = false;
launchBtn2.className = 'main-btn';
downstatus2.innerHTML = 'Minecraft installed! <font color="yellow">Please restart this launcher</font>';
`);

ipcRenderer.send('give-error', `
let launchBtn4 = document.getElementById('launch');
let downstatus4 = document.getElementById('downstatus');
launchBtn4.innerText = 'Restart';
launchBtn4.disabled = false;
launchBtn4.className = 'main-btn';
downstatus4.innerHTML = '<font color="red">An unknown error occurred during installation. Please check your internet connection and restart the launcher</font>';
`);


