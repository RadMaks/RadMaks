const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
false / true
const findLargestNumber = numbers => Math.max(...numbers);
const removeDuplicates = array => Array.from(new Set(array));
const multiply = (a, b) => a * b;

console.log(getRandomString());
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
false + kiwi
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
