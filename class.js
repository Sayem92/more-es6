// case sensative
//syntactic suger

class Instuctor{
    name;
    designation = 'Web Course Instructor';
    team = 'Web team';
    location;
    constructor(name,location){
        this.name = name
        this.location = location
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please creat quiz for module ${module}`)
    }
}

const aamir = new Instuctor('aamir','mumbai')
aamir.startSupportSession(9.00)
aamir.createQuiz(60)
// console.log(aamir)


const solaiman = new Instuctor('Solaiman khan', 'Dhaka');
console.log(solaiman)
solaiman.startSupportSession(11.00)
solaiman.createQuiz(45)