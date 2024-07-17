function diagonalDifference(arr) {
    let absDiff = 0, d1 = 0, d2 = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i == j)
                 d1 += arr[i][j];     
        }
        for(let k = 0; k < arr.length; k++) {
            if((i + k) == (arr.length - 1)) 
                d2 += arr[i][k];
        }
    }
    console.log("diagonal_1:", d1, "diagonal_2:", d2);
    absDiff = d1 - d2;
    return Math.abs(absDiff);
 }
 
let a = [[6,6,7,-10,9,-3,8,9,-1],
[9,7,-10,6,4,1,6,1,1],
[-1,-2,4,-6,1,-4,-6,3,9],
[-8,7,6,-1,-6,-6,6,-7,2],
[-10,-4,9,1,-7,8,-5,3,-5],
[-8,-3,-4,2,-3,7,-5,1,-5],
[-2,-7,-4,8,3,-1,8,2,3],
[-3,4,6,-7,-7,-8,-3,9,-6],
[-2,0,5,4,4,4,-3,3,0]];
// [[1,2, 3, 4], [11,12,13,14], [21,22,23,24],[31,32,33,34]];
console.log("Absolute Difference:", diagonalDifference(a));

