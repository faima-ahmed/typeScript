import { player } from "./classes/player.js";
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
// const myFunc = (a: string, b: string, c: string = "true") => {
//   console.log(c);
//   console.log(`Hello ${a} ${b}`);
// };
// myFunc("A", "B");

//function signature
let add: (x: number, y: number) => number;
add = (a: number, b: number) => {
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

//class acccess modifiers
/*class player {
  private name: string;
  public age: number;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }*/


const mashrafi = new player("Mashrafi", 35, "Bangladesh");
const sakib = new player("Sakib", 40, "Bangladesh");
// sakib.name= 'Mashrafi';
// console.log(sakib.name);
sakib.age = 50;
console.log(sakib.age);
//mashrafi.country= 'Englang';
//console.log(mashrafi.name);
console.log(sakib.age);
console.log(mashrafi.country);

const players: player[] = [];
players.push(sakib);
players.push(mashrafi);

// object of interfaces
interface RectangleOptions{
  width: number;
  length: number;
}
function drawRectangle(options: RectangleOptions){
  let width= options.width;
  let length= options.length

}
// drawRectangle({
//   width: 30,
//   length: 20,
//   height: 10,
// })
let extraValue= {
  width: 30,
  length: 20,
  height: 10,
}
drawRectangle(extraValue);