let nums = [];
let operators = [];
let kolBo = 0;

function dobavlenie(a) {
    document.querySelector('#uravn').innerText += a ;
    if (length.operators != kolBo){
        nums.push(+a);
        kolBo += 1;
    } else{
        nums[kolBo].push(+a);
    }
}

function operator(op) {
    operators.push(op);
    document.querySelector('#uravn').innerText += op ;
}

function sbros() {
    document.querySelector('#uravn').innerText ='';
    document.querySelector('#result').innerText ='';
    nums = [];
    operators = [];
    kolBo = 0;
}

function schot() {
    let otvet;
    operators.forEach (element => {
        switch(element) {
            case '+': 
                otvet = nums.shift() + nums.shift();
                nums[0] = otvet;
                break;
            case '-': 
                otvet = nums.shift() - nums.shift();
                nums[0] = otvet;
                break;
            case '*': 
                otvet = nums.shift() * nums.shift();
                nums[0] = otvet;
                break;
            case '/': 
                otvet = nums.shift() / nums.shift();
                nums[0] = otvet;
                break;
            default:
                otvet = nums.shift();
        }
    })
        
    document.querySelector('#result').innerText ='';
    document.querySelector('#result').innerText += otvet;
}
