function multiplierTable(i) {
    return n => n * i;
}
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const table = num.map(multiplierTable(5));
console.log("result:", table);