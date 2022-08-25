const student = {
    name : 'solim ullah',
    age : 25,
    class : 'Ten',
    marks : {
        math : 90,
        physics : 85,
        chemistry : 78,
    },
}
// . notation di access
const marks = student.marks;
const math = student.marks.math;

// backet di access
const chemistry = student['marks']['chemistry'];

const subject = 'math';
const subjectmarks = student.marks[subject]  // 90 sotik
const subjectmarksBull = student.marks.subject;  // undefined  bull 
console.log(subjectmarksBull)