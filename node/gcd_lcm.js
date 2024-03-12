function findGcd(a, b) {
    while(b){
        [a, b] = [b, a % b];
    }
    return a;
}

function findLcm(p, q){
    return parseInt(Math.abs(p * q) / findGcd(p, q));
}

console.log("Gcd result:", findGcd(70, 15));
console.log("Lcm result:", findGcd(72, 15));