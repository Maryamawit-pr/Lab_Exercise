var x=10;
let y=60;
const z = 70;

x=30;
y=20;

console.log(x+ ' '+y+' '+z); 

function scopeDemo() {
    var a = 50;
    let b = 80;
    console.log(a);
    console.log(b);
  if (true) {
    let b = 100;
    console.log(b);
  }
}
scopeDemo();

for(var i=0; i<5; i++) {  
  if(i%2==0) {
    console.log(i*2);
  }
  else{
    console.log(i);
  }
}

function square(x){
  console.log(x*x);
}
square(5);

var s=function(a=9){
  return a*a;
}
console.log(s);

var squares=(a)=>{
  return a*a;
}
console.log(squares(6));


// 1
function evenodd(a) {
  return a % 2 == 0 ? 'even' : 'odd';
}

console.log(evenodd(3));

//2

function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i--) { 
    console.log(str[i]);
}
}
reverseString('Maryamawit');

//3
function largestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//4
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;      
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }   
  }
  return count;
}
console.log(countVowels('Maryamawit'));

//5
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
multiplicationTable(10);

//6
function noduplicate(arr) {
  const uniqueArray = [];   
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    } 
  }
  return uniqueArray;
} 
console.log(noduplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]));

//7
function sumofdigits(num){
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumofdigits(12345)); 

//8
function palindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log(palindrome('mom')); 


//9
function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = words[0];   
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    } 
  }
  return longest;
}
console.log(longestWord('Maryamawit Mesfin is a computer science student'));

//10
function frequencecounter(str){
  const frequency = {};
  for (var char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
console.log(frequencecounter('Maryamawit Mesfin'));


//without built-in methods
function palindromes(str){
  var r='';
  for(var i=str.length-1; i>=0; i--){
    r += str[i];
  }
  return str === r;
} 
  
console.log(palindromes('noon'));
console.log(palindromes('soon'));


function joinArraysById(arr1, arr2) {
  const map = {};

  // First, take arr1 elements
  for (const obj of arr1) {
    map[obj.id] = { ...obj };
  }

  // Then, merge arr2 elements (override if same id)
  for (const obj of arr2) {
    map[obj.id] = { ...map[obj.id], ...obj };
  }

  // Convert the map back to an array and sort by id
  return Object.values(map).sort((a, b) => a.id - b.id);
}

// Example
const arr1 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, city: 'London' }
];

const arr2 = [
  { id: 2, age: 30, country: 'USA' },
  { id: 4, name: 'Eve' }
];

console.log(joinArraysById(arr1, arr2));

