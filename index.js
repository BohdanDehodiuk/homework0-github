"use strict";

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// const res1 = checkPassword("mangohackzor");
// console.log(res1);

// const res2 = checkPassword("polyhax");
// console.log(res2);

// const res3 = checkPassword("jqueryismyjam");
// console.log(res3);

// Pflfxf #3

// function checkStorage(available, ordered) {
//   // Change code below this line
//   // let message;

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
  
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
  
//   return "The order is accepted, our manager will contact you";
  
// }

// const res1 = checkStorage(100, 50);
// console.log(res1);

// const res2 = checkStorage(100, 130);
// console.log(res2);

// const res3 = checkStorage(70, 0);
// console.log(res3);

// const res4 = checkStorage(200, 20);
// console.log(res4);

// const res5 = checkStorage(200, 250);
// console.log(res5);

// const res6 = checkStorage(150, 0);
// console.log(res6);

// home - work #4

// const fruits = ["apple", "plum", "pear", "orange"]

// home-work #5
// const fruits = ["apple", "plum", "pear", "orange"]

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// home-work #6

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// home-work #7

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// home-work #8

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];
// console.log(fruits[lastElementIndex]);

// home-work #9

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const indexLastElement = array.length - 1;
//   const lastElement = array[array.length - 1];
//   const result = [firstElement, lastElement];
//   return result;

//   // Change code above this line
// }

// const res1 = getExtremeElements([1, 2, 3, 4, 5]);
// console.log(res1);

// const res2 = getExtremeElements(["Earth", "Mars", "Venus"]);
// console.log(res2);

// const res3 = getExtremeElements(["apple", "peach", "pear", "banana"]);
// console.log(res3);
// варыант 1
// function filterArray(numbers, value) {
//   const newArr = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] >= value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function filterArray(numbers, value) {
//   // Change code below this line
//   let filter = [];
  
// for (const number of numbers) {
//     numbers += number;
//     if (number > value) {
//       filter.push(number);
//     }
//   }

//   // console.log(filter);
//   return filter;
// }

// home-work #23
// function filterArray(numbers, value) {
//   const newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
// }
// const res1 = filterArray([1, 2, 3, 4, 5], 3);
// console.log(res1);

// const res2 = filterArray([1, 2, 3, 4, 5], 4);
// console.log(res2);

// const res3 = filterArray([1, 2, 3, 4, 5], 5);
// console.log(res3);

// const res4 = filterArray([12, 24, 8, 41, 76], 38);
// console.log(res4);

// const res5 = filterArray([12, 24, 8, 41, 76], 20);
// console.log(res5);


// function filterArray(numbers, value) {
//   const newArr = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] >= value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// home-work #10

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);

//   // Change code above this line
//   return words;
// }

// const res1 = splitMessage("Mango hurries to the train", " ");
// console.log(res1);

// const res2 = splitMessage("Mango", "");
// console.log(res2);

// const res3 = splitMessage("best_for_week", "_");
// console.log(res3);

// home-work #11

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const words = message.split(" ");
//   console.log(words);

//   const wordNumber = words.length;
//   console.log(wordNumber);

//   const totalPrice = wordNumber * pricePerWord;
//   console.log(totalPrice);

//   return totalPrice;



//    // Change code above this line
// }

// const res1 = calculateEngravingPrice("JavaScript is in my blood", 10);
// console.log(res1);

// const res2 = calculateEngravingPrice("JavaScript is in my blood", 20);
// console.log(res2);

// const res3 = calculateEngravingPrice("Web-development is creative work", 40);
// console.log(res3);

// const res4 = calculateEngravingPrice("Web-development is creative work", 20);
// console.log(res4);

// home-work #12

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);



//   // Change code above this line
//   return string;
// }

// const res1 = makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// console.log(res1);

// const res2 = makeStringFromArray(["M", "a", "n", "g", "o"], "");
// console.log(res2);

// const res3 = makeStringFromArray(["top", "picks", "for", "you"], "_");
// console.log(res3);

// home-work #13

// function slugify(title) {
//   // Change code below this line
//   // let newSlug;

//   // newSlug = title.join('-');
//   // console.log(newSlug)
//   // return slug.toLowerCase();

//   // return title.tolowerCase().join("-");

//   return title.split(" ").join("-").toLowerCase();

//   // Change code above this line
// }

// const res1 = slugify("Arrays for begginers");
// console.log(res1);

// const res2 = slugify("English for developer");
// console.log(res2);

// const res3 = slugify("Ten secrets of JavaScript");
// console.log(res3);

// const res4 = slugify("How to become a JUNIOR developer in TWO WEEKS");
// console.log(res4);

// home-work #14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(2);
// console.log(lastThreeEls);

// home-work#18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
//   const creditsLeft = customerCredits - totalPrice;
//  if ( totalPrice > customerCredits){
//  message = "Insufficient funds!";
   
//  } else {
//    message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
//  }
//   // Change code above this line
//   return message;
// }

// home-work #16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const newArrey = firstArray.concat(secondArray);
//   // console.log(newArrey);

//   if (newArrey.length > maxLength) {
//     return newArrey.slice(0, maxLength);
//   }

//   return newArrey;



//     // Change code above this line
// }
  
// const res1 = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// console.log(res1);

// const res2 = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// console.log(res2);

// const res3 = makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// console.log(res3);

// const res4 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// console.log(res4);

// const res5 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// console.log(res5);

// const res6 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// console.log(res6);

// home-work #18

// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;

//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//     // console.log(total);    
//   }
//   return total;


//   // Change code above this line
// }

// const res1 = calculateTotal(1);
// console.log(res1);

// const res2 = calculateTotal(3);
// console.log(res2);

// const res3 = calculateTotal(7);
// console.log(res3);

// const res4 = calculateTotal(18);
// console.log(res4);

// const res5 = calculateTotal(24);
// console.log(res5);

// home-work #19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// home-work #20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// const res1 = calculateTotalPrice([12, 85, 37, 4]);
// console.log(res1);

// const res2 = calculateTotalPrice([164, 48, 291]);
// console.log(res2);

// const res3 = calculateTotalPrice([412, 371, 94, 63, 176]);
// console.log(res3);

// home-work #21

// function findLongestWord(string) {
//   // Change code below this line
//   let arrString = string.split(" ");
//   let worldLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrString.length; i += 1) {
//     worldLength = arrString[1].length;
//     // console.log(worldLength);

//     if (arrString[i].length > worldLength) {
//       longestWord = arrString[i];
      
//       return longestWord;
//     }

//   }
  
//   // Change code above this line
// }

// const res1 = findLongestWord("The quick brown fox jumped over the lazy dog");
// console.log(res1);

// const res2 = findLongestWord("Google do a roll");
// console.log(res2);

// const res3 = findLongestWord("May the force be with you");
// console.log(res3);

// home-work #22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     console.log(i);
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// const res1 = createArrayOfNumbers(1, 3);
// console.log(res1);

// const res2 = createArrayOfNumbers(14, 17);
// console.log(res2);

// const res3 = createArrayOfNumbers(29, 34);
// console.log(res3);

// home-work #23
// function filterArray(numbers, value) {
//    // Change code below this line
//   const newArrey = [];

//   for (const number of numbers) {
//     if (number > value) {
//       newArrey.push(number);
//     }
//   }

//   return newArrey;
//   // Change code above this line
// }

// const res1 = filterArray([1, 2, 3, 4, 5], 3);
// console.log(res1);

// const res2 = filterArray([1, 2, 3, 4, 5], 4);
// console.log(res2);

// const res3 = filterArray([1, 2, 3, 4, 5], 5);
// console.log(res3);

// const res4 = filterArray([12, 24, 8, 41, 76], 38);
// console.log(res4);

// const res5 = filterArray([12, 24, 8, 41, 76], 20);
// console.log(res5);

// home-work #25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArrey = [];

//   for (const number of array1) {

//     if (array2.includes(number)) {
//       newArrey.push(number);

      
//     }
//   }
//   return newArrey;
//  // Change code above this line
// }

// const res1 = getCommonElements([1, 2, 3], [2, 4]);
// console.log(res1);

// const res2 = getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// console.log(res2);

// const res3 = getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// console.log(res3);

// const res4 = getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// console.log(res4);

// const res5 = getCommonElements([1, 2, 3], [10, 20, 30]);
// console.log(res5);

// home-work #26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (const price of order) {
//     total += price;
//   }

//   // Change code above this line
//   return total;
// }

// home-work #27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (const number of numbers) {
    
//     if (number > value) {

//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// home-work #27

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const allNumber = [];
//   for (let i = start; i <= end; i += 1) {
    
//     if (i % 2 === 0) {
//       allNumber.push(i);
//     }
//   }


//   return allNumber;
//     // Change code above this line
// }
  
// const res1 = getEvenNumbers(2, 5);
// console.log(res1);

// const res2 = getEvenNumbers(3, 11);
// console.log(res2);

// const res3 = getEvenNumbers(6, 12);
// console.log(res3);

// const res4 = getEvenNumbers(8, 8);
// console.log(res4);

// const res5 = getEvenNumbers(7, 7);
// console.log(res5);

// home-work #31

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   // let number;

//   // for (let i = start; i < end; i += 1) {
//   //   if (i % divisor === 0) {
//   //     number = i;
//   //     break;
//   //   }
//   // }

//   // return number;
//   for (let i = start; i <= end; i += 1) {

//     if (i % divisor === 0) {
//       return i;

//     }
//   }
  
//   // Change code above this line
// }

// const res1 = findNumber(2, 6, 5);
// console.log(res1);

// const res2 = findNumber(8, 17, 3);
// console.log(res2);

// const res3 = findNumber(6, 9, 4);
// console.log(res3);

// const res4 = findNumber(16, 35, 7);
// console.log(res4);

// home-work #32

// function includes(array, value) {
//   // Change code below this line
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }

//   }

//   return false;
//   // Change code above this line
// }

// const res1 = includes([1, 2, 3, 4, 5], 3);
// console.log(res1);

// const res2 = includes([1, 2, 3, 4, 5], 17);
// console.log(res2);

// const res3 = includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// console.log(res3);

// const res4 = includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// console.log(res4);

// const res5 = includes(["apple", "plum", "pear", "orange"], "plum");
// console.log(res5);

// const res6 = includes(["apple", "plum", "pear", "orange"], "kiwi");
// console.log(res6);