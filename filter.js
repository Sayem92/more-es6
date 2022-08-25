// filter olo cakni moto return ar pore sorto diba oita manbo ja ta result dibo 

const numbers = [12, 36, 58, 59,  11, 5, 6, 45, 9,];
const bigNums = numbers.filter(digit => digit > 30);
const tiny = numbers.filter(d => d < 30);
const even = numbers.filter( num => num % 2 == 0)
// console.log(bigNums)

const products = [
    {id:1, name: 'labtop', price: 75000},
    {id:1, name: 'mobile', price: 80000},
    {id:1, name: 'watch', price: 35000},
    {id:1, name: 'lablet', price: 23000},
];

// const prices = products.filter( pri => pri.price > 100)
// const prices = products.filter( pri => pri.price < 40000)
const prices = products.filter( pri => pri.price > 100000)
// console.log(prices)

