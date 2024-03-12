function QuestionsMarks(str) { 
    let add = 0, tmp = [];  
    for(let i = 0; i < str.length; i++) {
        let cnt = 0;
        if(Number(str[i])) {
            // console.log(str.indexOf(str[i]));
            tmp.push(i);
            add += Number(str[i]);
            console.log("AAAAAAAAAA",add, tmp);
            if(add == 10){
                for(let j = tmp[0]; j <= tmp[1]; j++) {
                    // console.log(str[j]);
                    if(str[j] == '?') {
                        cnt++;
                        console.log(cnt);
                        if(cnt == 3)
                            return true;
                        else if(cnt > 3)
                            return false;
                    }
                }
                tmp = [];
                add = 0;
            } else if(add > 10){
              return false;
            }
        }
    }
    return false;
  }
     
  // keep this function call here 
//   console.log(QuestionsMarks('aa6?9'));
  console.log(QuestionsMarks("9???1???9???1???9"));"5??aaaaaaaaaaaaaaaaaaa?5?a??5"