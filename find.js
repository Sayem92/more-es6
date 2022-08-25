// filter ar bondu but  aita sudu potom sorto modde jake pabe take dibe ar kawke dibe na 
// arekta olo aita kunu array dibe na    just a number dibe

const numbers = [12, 36, 58, 50,  11, 5, 6, 45, 9,];

const fives = numbers.find( num => num % 5 == 0)                // 50
const fivesAll = numbers.filter( num => num % 5 == 0)              // [ 50, 5, 45 ]
// console.log(fivesAll)

const products = [
    {id:1, name: 'labtop', price: 75000},
    {id:1, name: 'mobile', price: 80000},
    {id:1, name: 'watch', price: 35000},
    {id:1, name: 'lablet', price: 23000},
];

const cheap = products.find( pro => pro.price < 40000)  
console.log(cheap)  //{ id: 1, name: 'watch', price: 35000 }