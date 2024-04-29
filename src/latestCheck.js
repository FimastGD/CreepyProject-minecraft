 ipcRenderer.send('execute-code', `
   let isWhite = true;
   const button = document.getElementById('git');
   button.innerText = 'Update';
   button.disabled = false;
   button.className = 'main-btn-small';

   setInterval(() => {
     button.style.backgroundColor = isWhite ? '#727272' : 'orange';
     isWhite = !isWhite;
   }, 500);
 `);
