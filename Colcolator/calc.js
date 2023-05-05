let znak = {
    firstChisl: '' ,
    secondChisl: '',
    oper: '',
}

function schot() {
    let urevnenie;
    switch(znak.oper) {
        case '+': 
            urevnenie = +znak.firstChisl + +znak.secondChisl;
            break;
        case '*': 
            urevnenie = +znak.firstChisl * +znak.secondChisl;
            break;
        case '/': 
          urevnenie = +znak.firstChisl / +znak.secondChisl;
          break;
        default:
            urevnenie = znak.firstChisl;
      }
    document.querySelector('#result').innerText ='';
    document.querySelector('#result').innerText += urevnenie;
}
  
function sbros() {
    document.querySelector('#uravn').innerText ='';
    document.querySelector('#result').innerText ='';
    znak = {
        firstChisl: '' ,
        secondChisl: '',
        oper: '',
    }
}
  
function dobavlenie(a) {
    document.querySelector('#uravn').innerText += a ;
    if (znak.oper != ''){
        znak.secondChisl = znak.secondChisl + a;
    } else{
       znak.firstChisl = znak.firstChisl + a; 
    }
}

function operator(op) {
    znak.oper = op;
    document.querySelector('#uravn').innerText += op ;
}