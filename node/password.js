function minimumNumber(n, password) {
    let p = password;
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";

    let cntNum = 0, cntLc = 0, cntUc = 0, cntSc = 0, missChar = 0;
    if(n >= 1){
        for(let i = 0; i < p.length; i++){
            if(numbers.includes(p[i]))
                cntNum++;
            else if(lower_case.includes(p[i]))
                cntLc++;
            else if(upper_case.includes(p[i]))
                cntUc++;
            else if(special_characters.includes(p[i]))
                cntSc++;
        }
        if(cntNum == 0)
            missChar += 1;
        if(cntLc == 0)
            missChar += 1; 
        if(cntUc == 0)
            missChar += 1; 
        if(cntSc== 0)
            missChar += 1;
        // console.log(missChar, cntNum, cntLc, cntUc, cntSc);
        if(missChar && n < 6){
            let d = 6 - n;
            if(d > missChar)
                return d;
            return missChar;
        }else if(!missChar && n < 6){
            // console.log(">>>>",missChar);
            return 6 - n;
        }
        else if(missChar && n >= 6){
            return missChar;
        }
        else if(!missChar && n >= 6){
            return 0;
        }
    }
}

let myObj = {1: [100, `G0N1+93Gy0C!J4ECIc53+30O9az$K-TgDO^051y2+Qfvt94qI!k)lS(-8g65^A9mt%eRL5WP#f8R)i4O33j#&LNk6H%-pr-@d^*Z`], 
2: [4, `4700`], 3: [3, 'Ab1'], 4: [11, "#HackerRank"], 5: [5, '55542'], 6: [6, "VkmBAd"], 36: [4, "g1A!"] }

for(let key in myObj){
    console.log(minimumNumber(myObj[key][0], myObj[key][1]),":",myObj[key][1]);
}
