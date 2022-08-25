const numbers = [12, 65, 80, 7, 8, 20];
// const output = [];
// for(const number of numbers){
//     const double = number * 2;
//     output.push(double)
// };
// console.log(output)

function getDoubled(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = doubleItArrow(number);
        output.push(double)
    };
    return output
};

function doubled(number){
    return number * 2;
};

const doubleItArrow = num => num *2 ;

const result = getDoubled(numbers);
// console.log(result)
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* 
purpose :
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

//-----------------------------map()
//map ar kaj olo kunu  array k nibe tar por tar sob element anbe .....  bitore function dile oi function k call kore sob anbe aitay......... tar por result dibe.
const doubleItArrow2 = num => num *2 ;

const makeDoubled = numbers.map(doubleItArrow2)
console.log(makeDoubled)

const makeDoubledDirect = numbers.map(num => num *2)
console.log(makeDoubledDirect)

const makeDoubledDirectSimple = numbers.map(x => x *2)
console.log(makeDoubledDirectSimple)

const fiveTimes = [1,2,3,4,5].map(x => x * 5)
console.log(fiveTimes)