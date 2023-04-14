let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mult() {
      return this.a * this.b;
    },
  
    read() {
      this.a = Number(document.getElementById('num1').value);
      this.b = Number(document.getElementById('num2').value);
    }
};
function schot() {
    let r;
    calculator.read();
    switch (op) {
        case '+':
            r = calculator.sum();
            break;
        case '*':
            r = calculator.mult();
            break;
    }
    document.getElementById('resultat').innerHTML = r;
}