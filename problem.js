                                    DONE
//-----------------Q-1-----------------------------------
const oddNumbers = [ 1, 3, 5, 7, 9 ]
const evenNumbers = oddNumbers.map(num => num +1);
// console.log(evenNumbers); //[ 2, 4, 6, 8, 10 ]
// or 
for( let i = 0; i < oddNumbers.length; i++){
    const even = oddNumbers[i] +1;
    // console.log(even)
};

//-----------------Q-2----------------------------------
const arrayNumber =  [33, 50, 79, 78, 90, 101, 30 ];
const getElement = arrayNumber.filter(num => num % 10 == 0);
// console.log(getElement);  // [ 50, 90, 30 ]

//-----------------Q-3-----------------------------------
const arrayNumber3 =  [33, 50, 79, 78, 90, 101, 30 ];
const getElement3 = arrayNumber3.find(num => num % 10 == 0);
//  console.log(getElement3);   // 50

//compare : filter and array
//filter use kolle jare jare divide kora jay sob out put asbe....output--[]
// find use kolle condition ar potom ta dibe ar dibe na ...aita akta number a output.

//-----------------Q-4-----------------------------------
const reduceArray = [ 1, 9, 17, 22 ];
const sumElement = reduceArray.reduce((previous,current) => previous + current , 0);
// console.log(sumElement);   //  49
// OR 
    let sum = 0;
for(let i = 0; i < reduceArray.length; i++ ){
    sum = sum + reduceArray[i];
}
// console.log(sum);     //49

//-----------------Q-5-----------------------------------
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22},
];
const a1 = people[0].age;
const a2 = people[1].age;
const a3 = people[2].age;
const allarray = [];
allarray.push(a1,a2,a3);

const sumAll = allarray.reduce((previous,current) => previous + current,0)
//  console.log(sumAll);           /// 57

//-----------------Q-6-----------------------------------
const student = {
    name : "Fredie",
    age : 26
};
// console.log(student.age);   //  26

//-----------------Q-7-----------------------------------
let data = {
    location : [
        {
            latitude : '34.5 , 37.8',
            longitude : '98.77 , 58.7',
            city : 'Hyderabad',
            country : 'India',
        }
    ]
};
// console.log(data.location[0].city);   // hyderabad


//-----------------Q-8-----------------------------------
const users = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  };
  console.log(users.email);
  console.log(users.address);
  console.log(users.address.city);
  console.log(users.address.geo.lat);
  console.log(users.company.name);    // below the ans

//   Sincere@april.biz
// {
//   street: 'Kulas Light',
//   suite: 'Apt. 556',
//   city: 'Gwenborough',
//   zipcode: '92998-3874',
//   geo: { lat: '-37.3159', lng: '81.1496' }
// }
// Gwenborough
// -37.3159
// Romaguera-Crona


//---------------------------------------Q baki written