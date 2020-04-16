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


    switch (choseQuestion) {
        case 1:
            //Print lish Students
            console.log(students);
            break;
        case 2:
            //Create and addition a new Students
            console.log("Create and addition a new Students");
            let name = readlineSync.question("What student's name?: ");
            let age = readlineSync.question("Age?: ");
            let weith = readlineSync.question("Weith?: ");
            isStudent.name = name;
            isStudent.age = age;
            isStudent.weith = parseInt(weith);
            console.log(isStudent);
            students.join(isStudent);
            break;
        case 3:
            //Save and Exit
            break;
        default:
            choseQuestion = 4;
            break;
            //Mới thêm code ở đây nè

    }
}