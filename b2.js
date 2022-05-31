const numberOneTriangle = (a) =>{
    var res = '';
    if (a>1 && a <10){
        for (let i = 1; i<= a; i++){
            res += '*';
            console.log(res);
        }
    } else {
        console.log('Vui long nhap so trong khoang (1,10)');
    }
}