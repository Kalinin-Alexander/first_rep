function schot() {
  let urevnenie = eval(document.querySelector('#uravn').innerText);
  document.querySelector('#result').innerText ='';
  document.querySelector('#result').innerText += urevnenie;
}

function sbros() {
  document.querySelector('#uravn').innerText ='';
  document.querySelector('#result').innerText ='';
}

function dobavlenie(a) {
  document.querySelector('#uravn').innerText += a ;
}
