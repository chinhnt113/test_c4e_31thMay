function isPrime(a) {
    for (let j = 2; j <= Math.sqrt(a); j++) {
        if( a % j === 0) return false;
    } return true;
}

function findPrime(e) {
    event.preventDefault();
    let a = document.getElementById('numA').value;
    let b = document.getElementById('numB').value;
    let result = document.querySelector('.result');
    
    if (a > b) {
        // console.log(a, b);
        let temp = a;
        a = b;
        b = temp;
        // console.log(a, b, temp);
    }
    let res = [];
    for (let i = a; i <= b; i++){
        if(isPrime(i)){
            res.push(i);
        }
    }
    // console.log(res);
    result.innerHTML = `Cac so nguyen to trong khoang ${a} va ${b} la ` + res.join(', ') + '.';
}