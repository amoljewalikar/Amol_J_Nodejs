// condition 1 : num, check_next (next_Num % 5 == 0) => Y : (next_Num - num) < 3 => Y : num = next_Num
// condition 2 :                                                              l-=> N : use num
// condition 3 : num >= 38 to round upto 40 and (next_Num - num) < 3
function gradingStudents(grades) {
    let resultGrade = [];
    for (let i = 0; i < grades.length; i++){
        if (grades[i] < 38) {
            resultGrade.push(grades[i]);
        } else if(grades[i] >= 38) {
            if(grades[i]%5 != 0) {
                let chkDiff = 0, temp = grades[i];
                while (temp%5 != 0) {
                    temp += 1;
                    chkDiff = temp - grades[i];
                    if (temp%5 == 0 && chkDiff < 3){
                        grades[i] = temp;
                        resultGrade.push(grades[i]);
                    }else if (chkDiff == 3){
                        resultGrade.push(grades[i]);
                    }
                }            
            } else if(grades[i]%5 == 0) {
                resultGrade.push(grades[i]);
            }      
        }
        
    }
    return resultGrade;
}


let grade = [86, 30, 0, 16, 51, 55, 42, 50, 22, 70, 12, 27, 34, 24, 95, 16, 32, 22, 52, 56, 71, 95, 73, 67, 38, 33, 90, 46];
console.log(grade.length);
console.log("Result:\n", gradingStudents(grade));

// for (let i = 0; i < grade.length; i++) {
//     console.log(grade[i]," : ", gradingStudents(grade));
// }