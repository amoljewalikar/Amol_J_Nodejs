function main() {
    const n = 25;
    genTable(n);
}

function genTable(n) {
  for(let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(`${n} x ${i} = ${result}`)
  }
}

main();