const gcd = (a, b) => a % b == 0 ? b : gcd(b, a % b);

function gcdL(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

console.log(`(12, 18) ==> ${gcd(12, 18)}`);
console.log(`(24, 9) ==> ${gcd(24, 9)}`);
console.log(`(9, 6) ==> ${gcdL(9, 6)}`);
console.log(`(6, 3) ==> ${gcd(6, 3)}`);