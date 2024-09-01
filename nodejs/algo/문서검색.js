const input = require('fs').readFileSync("../input.txt").toString().replace(/\r/g, "").trim().split('\n');

// const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const lst = input[0].split('');
const block = input[1].split('');

console.log(lst, block)

// console.log(lst.slice(0,2)) : idx 0과 1