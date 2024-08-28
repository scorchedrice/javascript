const input = 5;

let side = 4;
let blank = ' ';
let star = '*';

for (let i = 1; i <= input; i++) {
    var result = blank.repeat(side) + star.repeat(9 - side * 2) + blank.repeat(side);
    console.log(result);
    side = side - 1;
}