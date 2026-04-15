function calculater(a, b, op) {
    if (op == '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return a / b;
}

console.log(calculater(5 , 3, '+'));