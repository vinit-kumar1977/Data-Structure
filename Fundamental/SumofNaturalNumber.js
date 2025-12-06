const sumOfNaturalNumber = n => {
    if (n <= 0) return 0;
    return n + sumOfNaturalNumber(n - 1);
}
console.log(sumOfNaturalNumber(5)); // Output: 15