// Объявляем переменную 'vers' и устанавливаем её начальное значение
let vers = "ja12303";

// Функция для изменения значения 'vers' и текста кнопки
function select() {
  let selectButton = document.getElementById('select');
  if (vers === "ja12303") {
    vers = "ja12303rem";
    selectButton.innerHTML = '<font size="2px">Alpha 1.2.3_03 (Remastered)</font>';
  } else if (vers === "ja12303rem") {
    vers = "ja12303rel";
    selectButton.textContent = 'Alpha 1.2.3_03 (Reloaded)';
  } else if (vers === "ja12303rel") {
    vers = "ja000";
    selectButton.textContent = 'Alpha 0.0.0';
  } else if (vers === "ja000") {
    vers = "jb171";
    selectButton.textContent = 'Beta 1.7.1';
  } else if (vers === "jb171"){
    vers = "err422";
    selectButton.textContent = 'ERROR 422';
  } else if (vers === "err422"){
    vers = "jhex01";
    selectButton.textContent = 'HEX 01';
  }else {
    vers = "ja12303";
    selectButton.textContent = 'Alpha 1.2.3_03';
  }
}

// Устанавливаем начальный текст кнопки при загрузке страницы
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('select').textContent = 'Alpha 1.2.3_03';
});

function launch() {
  route = vers;
  ipcRenderer.send('launch', route);
  console.log('routed');
}

// let etc если етк == альфа 12303 то выполнить испрендер лаунч четатам