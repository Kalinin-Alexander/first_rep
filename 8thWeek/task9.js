/*  Переделал
теперь проверяет по кол-ву ключей, после по наличию одинаковых ключей и равных значениях в них  */

function isEqual(first, second) {
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
    }
    for (let key in first) {
        if (second.hasOwnProperty(key) == false) {
            return false;
        }
        if ((first[key] === second[key]) == false) {
            return false;
        }   
    }
    return true; 
} 
