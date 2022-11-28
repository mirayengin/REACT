export {};
console.log("Hello TypeScript!");
// let a = 5;
let a:number = 5;
// a="5"
a = 42;

console.log(a);

let myVar: any = "cw";

myVar = 77;
console.log(myVar);


//! Data Type(Enum) 

enum Roles {  Manager = 1, Instructor, Mentor, Student };

console.log(Roles.Instructor);


//? Js karşılığı
// var Roles;
// (function (Roles) {
//     Roles[Roles["Manager"] = 1] = "Manager";
//     Roles[Roles["Instructor"] = 2] = "Instructor";
//     Roles[Roles["Mentor"] = 3] = "Mentor";
//     Roles[Roles["Student"] = 4] = "Student";
// })(Roles || (Roles = {}));

// console.log(Roles.Instructor);