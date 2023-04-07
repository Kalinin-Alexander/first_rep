/*  Переделал
теперь проверяет по кол-ву ключей, после по наличию одинаковых ключей и равных значениях в них  */

function IsEqual(first, second) {
    if (Object.keys(first) == Object.keys(second))
    for (let key in first) {
        if (second.hasOwnProperty(key) && (first[key] !=== second[key])) {
            return false;
        }   
    }
    return true; 
}   
