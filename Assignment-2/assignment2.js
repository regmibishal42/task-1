// Assignment 2 (Javascript Assignment by Info Dev)
// Submitted By Bishal Regmi

// Question No. 1 
const student = {
    name:{
        first_name:'Bishal',
        last_name:'Regmi'
    },
    sclass:{
        class:'BIT',
        semester:7
    },
    rollno:5
};
// listing all Properties
console.log(`Name: ${student.name.first_name} ${student.name.last_name}`);
console.log(`Class ${student.sclass.class} ${student.sclass.semester} semseter `);
console.log(`Roll no: ${student.rollno}`);
// lsiting all Keys
console.log(Object.keys(student));//[ 'name', 'sclass', 'rollno' ]
console.log(Object.entries(student));
/* [
    [ 'name', { first_name: 'Bishal', last_name: 'Regmi' } ],
    [ 'sclass', { class: 'BIT', semester: 7 } ],
    [ 'rollno', 5 ]
  ]
*/

// deleting the roll no 
delete student.rollno;
// length of student object
console.log(Array.from(Object.keys(student)).length);

// Question No . 2
// get volume of a cylinder with four decimal places
let radius = 5;
let height = 5;
let volume = parseFloat(Math.PI*radius*radius*height).toPrecision(7); //returns 392.6991
console.log(volume);

// Question No 3
// program to create a clock,output will come every seconds
function startClock(){
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById('clock').innerText = `${hour} : ${minutes} : ${seconds}`
    setTimeout(startClock,1000);
}

// Question no 4
// javascript function to print all methods of an js object
function ListAllMethods(obj){
    return Object.getOwnPropertyNames(obj).filter((property)=>typeof obj[property] == 'function');
}
let sampleObject = {
    name:'Bishal Regmi',
    getName:function (){ return `My name is ${this.name}`}
}
console.log(ListAllMethods(sampleObject));

// Question No. 5
// function to convert object into list of key value pair
function convertToKeyValuePair(obj){
    return Object.entries(obj);
}
const sampleObejct2 = {
    name:'Bishal Regmi',
    semester:'7'
}
console.log(convertToKeyValuePair(sampleObejct2))
//returns [[name,'Bishal Regmi],[semester,'7']]

// Question No 6
// javascript function to reverse a number
// first and simple method
function reverseNumber(num){
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(1234));// returns 4321

// reversing number proper method 
let reverse = function(x) {
    let reverse = 0;
    let sign = Math.sign(x);
    if (sign === -1) {
        x = x*sign;
    }
    while (x > 0) {
        reverse = (reverse * 10) + (x%10);
        x = parseInt(x/10, 10);
    }
    return reverse * sign;
};

console.log(reverse(1234));
console.log(reverse(-11230));



// Question No 7
// js function that generates all combinations of string
function generateAllCombinations(str){
    let arr = [];
    for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            arr.push(str.slice(i , j));
        }
    }
    return arr;
}
console.log(generateAllCombinations('DOG'));
// returns [ 'D', 'DO', 'DOG', 'O', 'OG', 'G' ]

// Question no 8
// returns string in alphabetical order
function sortLettersInString(str){
    return str.split('').sort().join('');

}
console.log(sortLettersInString('adcb')); //abcd



// Question No. 9 
// finding the longest string in a sentence
// return that string in uppercase
function findLongestString(sentence){
    const arr = sentence.split(' ');
    let longestString = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i].length > longestString.length){
            longestString = arr[i];
        }
    }
    return longestString.toUpperCase();
}
console.log(findLongestString('Web Development Tutorails')); //returns DEVELOPMENT

// Question No . 10
// program to count no. of vowels
 function countVowels(str){
    return str.toLowerCase().split('').filter(letter => 'aeiou'.includes(letter)).length;
 }
console.log(countVowels('aeiougdhs')); //returns 5

// Question No. 11
// generate random number and find its factorial
function fact(num){
    if(num <=0) return 1;
    else return num*fact(num-1);
}
let randomNum = Math.floor(Math.random()*10);
console.log(`Random num is ${randomNum} and factorail is ${fact(randomNum)}`);


// Question no 12
// check if one of two numbers is 50 or their sum is 50
function checkFifty(a,b){
    return (a == 50 || b == 50 || a+b ==50);
}
console.log(checkFifty(24,26));//true
console.log(checkFifty(50,21));//true
console.log(checkFifty(23,99));//false


// sorry i missed question 13 by accident
// here's the solution
// Question No. 13
// create a new string from first three charcters in lowercase ....

const newStringMaker = (str) =>{
    if(str.length <= 3) return str.toLowerCase();
    return str.slice(0,3).toUpperCase();
}
console.log(newStringMaker('Res')); //res
console.log(newStringMaker('Bishal'))//BIS





// Question no. 14
// arrange vowels and consotant in array

function analyzeLetters(str){
    let arr = str.toLowerCase().split('');
    let vowels = [];
    let consonant = [];
    for(let letter of arr){
        if(['a','e','i','o','u'].includes(letter)) vowels.push(letter);
        else consonant.push(letter);
    }
    vowels.sort();
    consonant.sort();
    return {
        vowels,
        consonant
    }
}

let {vowels,consonant} = analyzeLetters('hellothere');
console.log(vowels,consonant);