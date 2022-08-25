const users = [ {name: 'sami', id: 1, job: 'doctor'} ];

// console.log(users[0].name)

const data = {
    count : 5000,
    data : [
        { id: 2, name : 'babul', job: 'giter'},
        { id: 3, name : 'halim', job: 'leader'}
    ],
};
const firstJob = data.data[0].job
// console.log(firstJob)

const user = {
    id: 50002,
    name : 'Thomas alba editon',
    address : {
        street : {
            first : '35/A kocuket lane',
            second : 'Third floor',
            third: 'Right side'
        },
        postOffice : 'Cantonment',
        city : 'Dhaka'
    }
}
const side = user.address.stret?.third  //exchange mark diba taile man na paile samne jabe na-------
// const side = user.address.street.third
console.log(side)