const sumOfNaturalNumber = n => n <= 0 ? 0 : n === 1 ? 1 : n + sumOfNaturalNumber(n-1);
console.log(sumOfNaturalNumber(5)); // Output: 15 