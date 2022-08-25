const numbers = [12, 36, 58, 59, 96, 84, 42]
const half = numbers.map( n => n / 2);
const third = numbers.map( x => x / 3)
// console.log(half);
// console.log(third);

const friends = ['Tom cruise', 'tom badly', 'tom solaiman', 'tom baba']
const firstLetter = friends.map(f => f[0])
// console.log(firstLetter)

const nameLength = friends.map(name => name.length)
// console.log(nameLength);

const products = [
    {id:1, name: 'labtop', price: 75000},
    {id:1, name: 'mobile', price: 80000},
    {id:1, name: 'watch', price: 35000},
    {id:1, name: 'lablet', price: 23000},
];
// const items = products.map(product => console.log(product.name))
const items = products.map( product => product.name);
const prices = products.map( p => p.price);
console.log(items)
console.log(prices)