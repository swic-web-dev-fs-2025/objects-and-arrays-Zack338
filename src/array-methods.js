// Array Methods Exercise

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Map
const squares = numbers.map((n) => n * n);

// Filter
const evens = numbers.filter((n) => n % 2 === 0);

// Find
const firstOverFive = numbers.find((n) => n > 5);

// Reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Chaining example
const avgOfSquaresOver20 = numbers
  .map((n) => n * n)
  .filter((n) => n > 20)
  .reduce((acc, n, _, arr) => acc + n / arr.length, 0);

console.log({ squares, evens, firstOverFive, sum, avgOfSquaresOver20 });

