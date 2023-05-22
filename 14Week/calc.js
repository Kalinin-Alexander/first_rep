let nums = [];
let operators = [];


let currentNum = '';
function addNumber(a) {
    document.querySelector('#uravn').innerText += a ;
    currentNum = currentNum + a;
}

function addOperator(op) {
    operators.push(op);
    nums.push(Number(currentNum));
    currentNum = '';
    document.querySelector('#uravn').innerText += op ;
}

function emptyResult() {
    document.querySelector('#uravn').innerText ='';
    document.querySelector('#result').innerText ='';
    nums = [];
    operators = [];
    currentNum = '';
}

function getResult() {
    nums.push(Number(currentNum));
    currentNum = '';
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        switch(operators[i -1]) {
            case '+': 
                result = result + nums[i];
                break;
            case '-': 
                result = result - nums[i];
                break;
            case '*': 
                result = result * nums[i];
                break;
            case '/': 
                result = result / nums[i];
                break;
        }
    }

    document.querySelector('#result').innerText ='';
    document.querySelector('#result').innerText = result;
}
