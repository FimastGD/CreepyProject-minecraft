// Объявляем переменную 'vers' и устанавливаем её начальное значение
let vers = "ja12303";

// Функция для изменения значения 'vers' и текста кнопки
function select() {
  let selectButton = document.getElementById('select');
  if (vers === "ja12303") {
    vers = "ja12303rem";
    selectButton.innerHTML = '<font size="2px">Alpha 1.2.3_03 (Remastered)</font>';
  } else {
    vers = "ja12303";
    selectButton.textContent = 'Alpha 1.2.3_03';
  }
}

// Устанавливаем начальный текст кнопки при загрузке страницы
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('select').textContent = 'Alpha 1.2.3_03';
});

function launch() {
  route = `C:\\creepyproject\\java\\${vers}\\preload.bat`;
  ipcRenderer.send('launch', route);
  console.log('routed');
}

// let etc если етк == альфа 12303 то выполнить испрендер лаунч четатам