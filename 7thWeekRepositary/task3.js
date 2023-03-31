function Chunk(a, n) {
    let newArr = [];
    let i = 0; 
    while (i < a.length) {
        newArr.push(a.slice(i, n + i))
        i += n; 
    }
    console.log(newArr); 
}
  
let arr = [1, 2, 3, 1, 2]; 
let n = 2; 
Chunk(arr, n)