const arr_mobile_nums = ['9888866444','7834660001', '98768967661'];

function getMobileNumber(arr_mobile_nums){
    for (let i = 0; i < arr_mobile_nums.length; i++) {
        if(arr_mobile_nums[i].length == 10)
            console.log(arr_mobile_nums[i]+ " : " + getNum(arr_mobile_nums[i]));
        else
            console.log(arr_mobile_nums[i]+ " : " + "Not a valid mobile number.");
    }
}

function getNum(str_mobile_num){
    const str_mobile = str_mobile_num;
    let word_mobile = '', d = 'double ', t = 'triple ';
    let i = 0;
    while(i < str_mobile.length) {
        let ele = str_mobile[i];
        let temp = 1;
        if(str_mobile[i+1] == ele){
            temp += 1;
            i++;
            if(str_mobile[i+1] == ele){
                temp += 1;
                i++;
                if(str_mobile[i+1] == ele){
                    temp += 1;
                    i++;
                }
            }
            // console.log(str_mobile[i], ele, i, temp);
        }
        if(temp == 4){
            for (let j = 0; j < 2; j++) {
                word_mobile += d + getWord(str_mobile[i]);
            }
        }else if(temp == 3){
            word_mobile += t + getWord(str_mobile[i]);
            // console.log("3: ",str_mobile[i], i);
        }else if(temp == 2){
            word_mobile += d + getWord(str_mobile[i]);
        }else{
            word_mobile += getWord(str_mobile[i]);
        }
        // console.log("4: ",str_mobile[i], temp);
        i++;
    }
    return word_mobile;
}

function getWord(num){
    switch(num){
        case '0': return "zero ";
        case '1': return "one ";
        case '2': return "two ";
        case '3': return "three ";
        case '4': return "four ";
        case '5': return "five ";
        case '6': return "six ";
        case '7': return "seven ";
        case '8': return "eight ";
        case '9': return "nine ";
        case 'default': return " NaN ";
    }
}


getMobileNumber(arr_mobile_nums);