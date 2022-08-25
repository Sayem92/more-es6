// let var const
// breakup with var
const numbers = [ 12, 852, 8, 855, 895]
let salary = 1000;
    salary = 1500;

//no parameter
const calcute = () => //console.log('nai')

// default parameter
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remain = salary - salary*tax;
    const total = remain + bonus;
    return total;

}

//template type
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address :</p>
    <p>Salary : ${calculateSalary(1000, 0, 0)}</p>
    <p>Others : ${numbers[2]}</p>
<div/>
`

// arrow function 
const doubleIt = x => x * 2;
const salarayCalculation = (salary, tax, bonus) => salary - salary*tax + bonus;
 
// spread
const num1 = [14, 89, 89, 99, 77]
const newArray = [00, 99, ...num1, 45, 87, 96 , 55]

// destructuring
const {x, y, z, ...c} = {x:5, y:6, z:8, name:'sakib', age: 45, adress:'moidail'};
const [jami, kami, tumi] = [45, 5555, 'imran', 99, 'kamran']

//
