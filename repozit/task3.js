function Chunk(arr,n) {
    let afterChunk = [];
    let razn = 0;
    let endpart =[];

    /* Определяем сколько элементов будет в последнем куске нового масива*/
    while(arr.length % n != 0){
        razn++;
    }

    /*Создаём массив с определённой ранее длинной*/
    while (razn >= 1){
       endpart.push(arr.pop());
    }

    /*добавляем его*/
    afterChunk.push(endpart);
    
    /*оставшиеся ровные массивы добавляем*/
    while (arr.length >= n){
        afterChunk.push(afterChunk.pop);
    }
    console.log(afterChunk);
}
  
let arr = [1, 2, 3, 1, 2];
let n = 2;
Chunk(arr,n)