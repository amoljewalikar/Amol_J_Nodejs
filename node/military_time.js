function militaryTime(s){
    let arrS = s.split(':');
    let n = parseInt(arrS[0]);
    let check = arrS[2].split('')[2];
    let t = '';
    if(check == 'P')
        t = 'PM';
    else if(check == 'A')
        t = 'AM';
    arrS[2] = arrS[2].replace(t, '');
    console.log(arrS[2]);
    if(n < 12 && check == 'P'){
        n += 12;
        arrS[0] = arrS[0].replace(arrS[0], String(n));
    }else if(n == 12 && check == 'A'){
        arrS[0] = arrS[0].replace(arrS[0], '00');
    }
    return arrS.join(':');
}

let s = '12:45:54PM';
console.log("TIme:", militaryTime(s));