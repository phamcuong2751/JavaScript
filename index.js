// let math = require('./math');

// console.log(math.sum([1, 2, 3, 4]));
// console.log(math.multi(100, 2));
let fs = require('fs');
let readlineSync = require('readline-sync');
let choseQuestion = readlineSync.question("Which option do you choose?: ");

let students = [];

let isStudent = {};
let fileStudent = fs.readFileSync('./Student.txt');
while (choseQuestion < 4) {
    let choseQuestion = readlineSync.question("Which option do you choose?: ");
    switch (parseInt(choseQuestion)) {
        case 1:
            //Print lish Students
            console.log(students);
            break;
        case 2:
            //Create and addition a new Students
            let isNewStudent = new students;
            console.log("Create and addition a new Students");
            let name = readlineSync.question("What student's name?: ");
            let age = readlineSync.question("Age?: ");
            let weith = readlineSync.question("Weith?: ");
            isNewStudent.name = name;
            isNewStudent.age = age;
            isNewStudent.weith = parseInt(weith);
            students.unshift(isNewStudent);
            break;
        case 3:
            //Save and Exit
            break;
        default:
            choseQuestion = 4;
            break;
    }
}