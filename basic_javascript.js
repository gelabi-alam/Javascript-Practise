// /**Data Types
//  * 
//  * 1. Primative Data Type
//  * String, Number, Null, Undefined, Symbol
//  * 
//  * 2. Reference Data Type
//  * Array, Object Literals, Function, Date
//  * 

// **/
// const intNumber = 21;
// const floatingPoint = 23.001;
// const str = "Hello World";
// const boolTrue = true;
// const boolFalse = false;
// const Null = null;
// const Undefined = undefined;

// console.log("Number: ", typeof intNumber, "Float: ", typeof floatingPoint, "String: ", typeof str, "True Boolean: ", typeof boolTrue, "Flase Boolean: ", typeof boolFalse, "Null: ", typeof null, "Undefined: ", typeof undefined);


// const sym = Symbol();
// console.log("Symbol is: ",typeof sym);

// //Array
// const hobbies = [
//     "Quran",
//     "Garden"
// ];
//console.log("Array is:",  typeof hobbies);

// //Date Object
// const today = new Date();
// console.log("Date is: ", typeof today);

// //Math Object

// let val = Math.PI;
// console.log("PI: ", val);

// val = Math.round(2.6);
// console.log("Round: ", val);

// val = Math.sqrt(64);
// console.log("Square of 64 is: ", val);

// val = Math.pow(9, 2);
// console.log("Power of 9 is: ", val);

// val = Math.random();
// console.log("Random Numberis: ", val);

// //..............**********........................

// //Concatenation

// const firstName = "Tahsan";
// const lastName = "Foysal";

// let name = firstName + lastName;
// console.log(name);

// //concat
// name = firstName + " " + lastName;
// console.log(name);

// //Alternative way of Concat Function

// name = firstName.concat(" ", lastName);
// console.log(name);

// //Append
// name = "Tahsan ";
// name += "Foysal";

// console.log(name);

// name = "Hey there, I'm Tahsan Foysal "+ "I say: "+str+"!";
// console.log(name);

// //Escapeing (\)

// name = 'Hey there, I\'m Tahsan Foysal.';
// console.log(name);

// //Length
// console.log(name.length);

// //Change Case
// name = firstName.toUpperCase();
// console.log(name);

// name = firstName.toLowerCase();
// console.log(name);

// name = str.split(" ");
// console.log(name);

// //only coma splited
// const commaSplit = "Hey there, I'm Tahsan, Foysal";
// name = commaSplit.split(",");
// console.log(name);

// //..............**********........................

// //Template String
// const nameOne = "Tahsan Foysal";
// const ageOne = "23";
// const job = "Web Developer";
// const city = "Bogura";

// let html;
// html = `
//         <ul>
//             <li>Name: ${nameOne}</li>
//             <li>Age: ${ageOne}</li>
//             <li>Job: ${job}</li>
//             <li>City: ${city}</li>
//         </ul>
//     `
// document.body.innerHTML = html;

// //Conditional Logic

// const id = 100;

// if(id < 100){
//     console.log("\nCorrect");
// }
// else
//     console.log("Incorrect");

// if(id > 100){
//     console.log("\nCorrect");
// }
// else
//     console.log("Incorrect");

// if(id == 100){
//     console.log("\nCorrect");
// }
// else
//     console.log("Incorrect");

// if(id != 100){
//     console.log("\nCorrect");
// }
// else
//     console.log("Incorrect");



// //Value & data Type if both are true then will be correct 
// if(id === 100){
//     console.log("\nCorrect");
// }
// else
//     console.log("Incorrect");

// if(id === "100"){
//     console.log("\nCorrect");
// }
// else
//     console.log("Incorrect");

// if(id !== "100"){
//     console.log("\nCorrect");
// }
// else
//     console.log("Incorrect");


// //test of undefined

// if(typeof d !== "undefined"){
//     console.log(`(Undefined) The ID is: ${d}`);
// }
// else 
//     console.log("(Undefined) No ID");

// //..............**********........................

// // Switch Case

// const fruit = "Watermelon";

// switch(fruit){
//     case "Grapes":
//         console.log("The Fruit is: ", fruit+".");
//         break;
//     case "Pineapple":
//         console.log("The Fruit is: ", fruit+".");
//         break;
//     case "Watermelon":
//         console.log("The Fruit is: ", fruit+".");
//         break;
//     case "Pear":
//         console.log("The Fruit is: ", fruit+".");
//         break;
//     case "Guava":
//         console.log("The Fruit is: ", fruit+".");
//         break;
//         default: 
//         console.log("Unknown Fruit(s).");
//         break;
// }

// //Anothor example of Switch case

// let day;
// switch(new Date().getDay()){
//     case 0:
//         day = "Sunday";
//         break;
        
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Satarday";
//         break;
// }
// console.log(`Today is: ${day}`);

// //..............**********........................

//Array

const ary = [12, 34, 44, 55, 56];
console.log(ary);

//Another way of Array Declartion
const ary2 = new Array(12, 12, 34, 55, 67, 60);
console.log(ary2);

//Array Element added
ary.push(100);
console.log(ary);

//Array Element removed
ary.pop();
console.log(ary);

//Array Element added into front
ary.unshift(90);
console.log(ary);

//Array Element removed into front
ary.shift();
console.log(ary);

//Array?
let ary3 = Array.isArray(ary);
console.log(ary3);

//length
console.log(ary.length);

//find out array Elements
console.log(ary[2]);

//find out Array Index
console.log(ary.indexOf(44));

//Changing Element
ary[2] = 444;
console.log(ary);

//Sorting
const sorting = ["Google", "Microsoft", "Facebook", "LinkedIn"];
sorting.sort();
console.log(sorting);

//Reversing
sorting.reverse();
console.log(sorting);

// //..............**********........................

//Object

const obj = {
    name: "Tahsan Foysal",
    age: 23,
    job: "Web Developer",
    Location: "Dhaka",
    hobbies: ["Book", "Gardening"]
};

console.log(obj);
