function kangaroo(x1, v1, x2, v2) {
    do{
        x1 += v1;
        x2 += v2;
        console.log(x1, x2);
        if(x1 == x2)
            return "YES";
        else if(x1 >= 100000000 || x2 >= 100000000)
            return "NO";
    }while(x1 != x2);
    return "NO";

}

console.log(kangaroo(2081, 8403, 9107, 8400));