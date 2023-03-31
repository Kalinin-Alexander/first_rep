function Unique(a) {
    let unique = a.filter((item, i, a) => a.indexOf(item) === i); 
console.log(unique); 
}
  
let arr = [1, 2, 3, 1, 2, 5, 10, 5]; 
Unique(arr)