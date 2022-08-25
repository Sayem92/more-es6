// map  forEach  filter find reduce


//  array modde sob sum korar jonno reduce

const numbers = [ 1, 5, 6, 9,];
//.reduce(accumulatorFunction, initial Value)
// accumulatorFunction use two parameter

// const total = numbers.reduce((previous,current) => previous + current , 0)
const total = numbers.reduce((previous,current) =>{ 
    console.log(previous,current)
    return previous + current }
, 0)
console.log(total)