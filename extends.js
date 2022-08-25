class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name
        this.location = location
    }
    provideFedBack(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instuctor extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web team';
    constructor(name,location){
        super(name,location)
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please creat quiz for module ${module}`)
    }
   
}

class Developer extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web team';
    tech;
    constructor(name,location,tech){
        super(name,location)
        this.tech = tech
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
}


class JobPlacement extends TeamMember{
    designation = 'Job placement commandos';
    team = 'Job Placement';
    region;
    constructor(name,location,region){
       super(name,location)
        this.region = region
    }
    provideResum(feature){
        console.log(`Please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`Please release the version ${version}`)
    }
}

const alia = new Developer('Alia Bhatt','Dhaka','React');
console.log(alia);
alia.provideFedBack();

const bipasa = new JobPlacement('Bipasa dev','Kolkata','India');
console.log(bipasa);