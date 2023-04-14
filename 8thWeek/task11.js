/*  Внёс поправки
теперь умножает на заданное число, возвращая новый массив  */

function multiplyNumeric(a, b) {
    let nevobj = {};
    for (let k in a) {
        nevobj[k] = a[k];
    }
    for (let key in nevobj) {
        if (typeof (nevobj[key]) == 'number') {
            nevobj[key] *= +b;
        }
    }
    return nevobj;
}
