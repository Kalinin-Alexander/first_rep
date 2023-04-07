function IsEqual(first, second) {
    if (first.length !== second.length){
        return false
    }
    for (let key in first) {
        if (first.hasOwnProperty(key) && (first[key] !== second[key])) {
            return false;
        }          
    }
    return true
}    
