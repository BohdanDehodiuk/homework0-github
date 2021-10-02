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

function calculateTotal(number) {
 // Change code below this line
  let total = 0;

  for (let i = 0; i <= number; i += 1) {
    total += i;
    // console.log(total);
    
  }
  return total;


  // Change code above this line
}

const res1 = calculateTotal(1);
console.log(res1);

const res2 = calculateTotal(3);
console.log(res2);

const res3 = calculateTotal(7);
console.log(res3);

const res4 = calculateTotal(18);
console.log(res4);

const res5 = calculateTotal(24);
console.log(res5);