

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
