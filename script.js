console.log('--------#5');
let a = 5;
let b = 6;
a += b;
console.log(a);
a -= b;
console.log(a);
b = b * a;
console.log(b);
b = b / a;
console.log(b);

console.log('--------#6');
for (let x = 1; x < 6; x++) {
    console.log(x);
}

console.log('--------#7');
for (let x = 5; x >= 1; x--) {
    console.log(x);
}

console.log('--------#8');
function getMarkInfo(condition) {
    if (condition == 10) {
        console.log('У вас максимальный балл');
    } else if (condition <= 9) {
        console.log('У вас средний балл');
    }
   }
getMarkInfo(10);
getMarkInfo(1);

console.log('--------#9');
function getDayInfo(position) {
    switch (position) {
        case 0 :
            console.log('Sunday');
            break;
        case 1 :
            console.log('Monday');
            break;
        case 2 :
            console.log('Tuesday');
            break;
        case 3 :
            console.log('Wednesday');
            break;
        case 4 :
            console.log('Thursday');
            break;
        case 5 :
            console.log('Friday');
            break;
        case 6 :
            console.log('Saturday');
            break;
        default :
            console.log('Wrong data');
            break;
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('--------#10');
let arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log(arr);

console.log('--------#11');
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let jointArray = firstArray.concat(secondArray);
console.log(jointArray);

console.log('--------#12.1');
function countNumber(number) {
    return console.log(number * (number + 1) / 2);
}
countNumber(3);

console.log('--------#12.2');
function countNumberSecond(number) {
    return console.log(number * (number + 1) / 2);
}
let result = parseFloat(prompt('Введите любое целое положительное число:'));
if (result > 0 && result % 1 == 0) {
    countNumberSecond(result);
} else {
    console.log('ошибка')
}


console.log('--------#12.3');
function countNumberThird(number) {
    let i = 0;
    let sum = 0;
    while (i <= number) {  
        sum =  sum + i; 
        i++; 
    }
    return console.log(sum);
}
while (true) {
    let result = parseFloat(prompt('Введите любое целое положительное число:'));
    if (result > 0 && result % 1 == 0) {
        countNumberThird(result);
        break;
    } else {
        console.log('ошибка')
    }
}
