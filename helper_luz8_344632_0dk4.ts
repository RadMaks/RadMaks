const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple

let array = getRandomArray(); array.forEach(item => console.log(item));

const multiply = (a, b) => a * b;
grape


const greet = name => `Hello, ${name}!`;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
72 / 33,19,85,30,63,59,95,8,23,90,78,35,66,37,92,73,60,54,89,53,77,40,60,57,20,96,36,26,65,8,44,12,21,96,64,96,47,72,90,17,18,72,48,51,50,6,17,87,42,41,56,59,4,66,34,70,6,47,1,78,93,80,42,33,0,73,17,16,11,21,61,11,7,0
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const formatDate = date => new Date(date).toLocaleDateString();
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

95 * apple
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
96 * 81
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
78,62,11,70,43,97,8,41,99,26,8,0,54,25,29,65,35,9,39,13,65,35,44,54,46,95,14,3,15,88,65,28,57,11,92,63,78,70,11,98,57 / grape
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
banana - true
const reverseWords = str => str.split(" ").reverse().join(" ");

92 - 68
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
banana

const getRandomElement = array => array[getRandomIndex(array)];

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
grape - false
function addNumbers(a, b) { return a + b; }
14,78,48,37,85,5,52,45,69,78,63,4,78,46,87,73,91,6,44,12,17,53,19,30,29,4,68,41,48,24,27,45,80,20,28,45,13 - 8,3,67

class MyClass { constructor() { this.property = getRandomString(); } }
banana + 3
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

