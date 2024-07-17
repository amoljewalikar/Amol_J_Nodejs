function processData(input) {
  let arr = input.split('\n');
  for(let i = 1; i <= Number(arr[0]); i++) {
    let evnStr = '', oddStr = ''
    for(let j = 0; j < arr[i].length; j++) {
      if(j%2 == 0) evnStr += arr[i][j];
      else oddStr += arr[i][j];
    }
    console.log(`${evnStr} ${oddStr}`);
  }
}

processData("2\nHacker\nRank");