"use strict";
// const country= 'I love Bangladesh';
// console.log(country);
// let playerName= 'Mashrafi';
// //playerName = 34;
// console.log(playerName);
// let playerName;
// playerName= 'Sakib';
// playerName= 33;
// console.log(playerName);
// function multiple(a: number, b: number){
// return a * b;
// }
// console.log(multiple(3, 4));
//array
// let mixed = ["apple", true, 3 ];
// mixed.push(35);
// mixed.push(false);
// // mixed.push({
// //   name: "Diya",
// // });
// console.log(mixed);
//object
// let person={
//     name: 'Mashrafi',
//     age: 35,
//     isCaptain: true,
// }
//person.age= ''
//person.country='Bangladesh'
//function
const myFunc = (a, b, c = "true") => {
    console.log(c);
    console.log(`Hello ${a} ${b}`);
};
myFunc("A", "B");
//function signature
let add;
add = (a, b) => {
    return a + b;
    //console.log(a+b)
};
// let calculation: (x: number, y: number, z: string)=> number;
// calculation= (a: number, b: number, c: string )=>{
//     if(c == 'add'){
//         return a + b;
//     }
//     else{
//         return a - b;
//     }
// }
// console.log(calculation(5, 6, 'minus'));
class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const mashrafi = new player("Mashrafi", 35, "Bangladesh");
const sakib = new player("Sakib", 40, "Bangladesh");
sakib.name = 'Mashrafi';
console.log(sakib.name);
sakib.age = 50;
console.log(sakib.age);
mashrafi.country = 'Englang';
//console.log(mashrafi.name);
console.log(sakib.age);
console.log(mashrafi.country);
const players = [];
players.push(sakib);
players.push(mashrafi);
