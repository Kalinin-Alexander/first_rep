function makePairs(obj){
    return Object.keys(obj).map((el) => [el, obj[el]]);
}