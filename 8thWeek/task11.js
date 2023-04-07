/*  Внёс поправки
теперь умножает на заданное число, возвращая новый массив  */

function multiplyNumeric(obj, n) {
    let newObj = obj; 
    for (let key in newObj) {
      if (typeof newObj[key] == 'number') {
        return newObj[key] *= n;
      }
    }
  }
