function isEqual(first,second){
        if(first.length!=second.length)
            return "False";
        else
        {

        for(let i=0;i<first.length;i++)
        if(first[i]!=second[i])
            return "False";
            return "True";
        }
}

let f = [1, 2, 3, 4];
let s = [1, 2, 3, 4];
console.log(isEqual(f,s))