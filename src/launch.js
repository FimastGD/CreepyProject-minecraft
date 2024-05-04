// Объявляем переменную 'vers' и устанавливаем её начальное значение
let vers = "ja12303";
let size = 16.75;

// Функция для изменения значения 'vers' и текста кнопки
function select() {
  let selectButton = document.getElementById('select');
  if (vers === "ja12303") {
    vers = "ja12303rem";
    size = 37.28;
    selectButton.innerHTML = '<font size="2px">Alpha 1.2.3_03 (Remastered)</font>';
  } else if (vers === "ja12303rem") {
    vers = "ja12303rel";
    size = 4.60;
    selectButton.textContent = 'Alpha 1.2.3_03 (Reloaded)';
  } else if (vers === "ja12303rel") {
    vers = "ja000";
    size = 3.73;
    selectButton.textContent = 'Alpha 0.0.0';
  } else if (vers === "ja000") {
    vers = "jb171";
    size = 13.96;
    selectButton.textContent = 'Beta 1.7.1';
  } else if (vers === "jb171"){
    vers = "err422";
    size = 7.95;
    selectButton.textContent = 'ERROR 422';
  } else if (vers === "err422"){
    vers = "jhex01";
    size = 17.23;
    selectButton.textContent = 'HEX 01';
  } else if (vers === "jhex01"){
    vers = "jb1502";
    size = 3.57;
    selectButton.textContent = 'Beta 1.5_02';
  } else if (vers === "jb1502"){
    vers = "jb101";
    size = 31.08;
    selectButton.textContent = 'Beta 1.0.1';
  } else if (vers === "jb101"){
    vers = "ja12603";
    size = 29.78;
    selectButton.textContent = 'Alpha 1.2.6_03';
  } else if (vers === "ja12603"){
    vers = "ja127";
    size = 80.44;
    selectButton.textContent = 'Alpha 1.2.7';
  } else {
    vers = "ja12303";
    size = 16.75;
    selectButton.textContent = 'Alpha 1.2.3_03';
  }
}


document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('select').textContent = 'Alpha 1.2.3_03';
});

function launch() {
  route = vers;
  size = size;
  ipcRenderer.send('launch', route, size);
  console.log('routed');
}

// let etc если етк == альфа 12303 то выполнить испрендер лаунч четатам