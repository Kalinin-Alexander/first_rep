/*  Внёс поправки
теперь умножает на заданное число, возвращая новый массив  */

function multiplyNumeric(a, b) {
    obj = {};
    for (let k in a) {
        obj[k] = a[k];
    }
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= b;
        }
    }
    return obj;
}
