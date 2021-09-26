"use strict";

// const productName = "Droid";

// const pricePerItem = 2000;


// console.log(productName);

// console.log(pricePerItem);

// let productName = "Droid";
// let pricePerItem = 2000;

// // kljhkjbbb

// productName = "Repair droid";

// pricePerItem = 3500;

// console.log(productName);

// console.log(pricePerItem);

// const topSpeed = 160;

// let distance = 617.54;

// let login = "mango935";

// const isOnLine = true;

// const isAdmin = false;

// console.log(isAdmin);
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;

// const orderedQuantity = 6;

// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }

// sayHi()

// / Change code below this line
// function add() {
//   console.log();
//   // Change code above this line
// }

// const add = function (a, b, c) {
//     const result = a + b + c;
//     console.log(add)
//     console.log("Addition result equals", result);
// }

// add()
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   // Change code below this line
    
//     console.log(add);
//     const result = a + b + c;
//     console.log(result);
//   	return a + b + c;


//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));.

// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// home work

// unction add(a, b, c) {
//   // Change code below this line
// 	console.log(add);
  
//   	const result = a + b + c;
//     console.log(result);
  
//   	return a + b + c;


//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
// function add(a, b, c) {
//   // Change code below this line
//   console.log(add);
  
//   return result;



//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage (name, price) {
//   // Change code below this line
//     const productName = "name";
//     const productPrice = "price";

//     const message = `You picked ${productName}, price per item is ${productPrice} credits`;
//     console.log(message);
//   // Change code above this line
//   return message;
// };

// makeMessage();

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee


//   // Change code above this line
//   return message;
// }

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//     const isMatch = isValidPassword === SAVED_PASSWORD;
//     console.log(isMatch);

//   // Change code above this line
//   return isMatch;
// }

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//     }
    
//     console.log(message);

//   return message;
// }

// checkAge(20)
// checkAge(8)
// checkAge(14)
// checkAge(38)

// home-work #16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//       if (available >= ordered) { // Change this line
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//     }    
//     console.log(message);
    

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(200, 50)
// checkStorage(100, 50)
// checkStorage(100, 50)

// home-work #18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;

//     if (totalPrice <= customerCredits) {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     } else {
//         message = "Insufficient funds!";
//     }
    
//     console.log(message);

//     return message;
// }

// makeTransaction(3000, 5, 23000)
// makeTransaction(1000, 3, 15000)
// makeTransaction(5000, 10, 8000)
// makeTransaction(2000, 8, 10000)
// makeTransaction(500, 10, 5000)

// home - work #20

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (ordered === 0) {
//         message = "There are no products in the order!";
//     } else if (available < ordered) {
//         message = "Your order is too large, there are not enough items in stock!";
//     } else {
//         message = "The order is accepted, our manager will contact you";
//     }

//     console.log(message);

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(70, 0)
// checkStorage(200, 20)
// checkStorage(200, 250)
// checkStorage(150, 0)

// home-work #24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent <= 49999) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent <= 19999) {
//         discount = BRONZE_DISCOUNT;
//     } else if (totalSpent <= 4999) {
//         discount = BASE_DISCOUNT;
//     }
    
//     console.log(discount);

//   // Change code above this line
//   return discount;
// }

// getDiscount(137000)
// getDiscount(46900)
// getDiscount(8250)
// getDiscount(1300)
// getDiscount(5000)
// getDiscount(20000)
// getDiscount(50000)

// home - work #25

// function checkStorage(available, ordered) {
//   let message;
// //   // Change code below this line

// //   if (ordered > available) {
// //     message = "Not enough goods in stock!";
// //   } else {
// //     message = "The order is accepted, our manager will contact you";
// //     }

//     let message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    
//     console.log(message)

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(200, 20)
// checkStorage(200, 150)
// checkStorage(150, 180)

// hohome-work #26

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
    
//     message = ADMIN_PASSWORD === password ? "Access is allowed" : "Access denied, wrong password!";
    
//     console.log(message);

//   // Change code above this line
//   return message;
// }

// checkPassword("jqueryismyjam")
// checkPassword("angul4r1sl1f3")
// checkPassword("r3actsux")

// home-work #28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// //   if (password === null) {
// //     message = "Canceled by user!";
// //   } else if (password === ADMIN_PASSWORD) {
// //     message = "Welcome!";
// //   } else {
// //     message = "Access denied, wrong password!";
// //     }

//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
        
//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
        
//         default:
//             message = "Access denied, wrong password!";
//     }
    
//     console.log(message);

//   // Change code above this line
//   return message;
// }

// checkPassword("mangohackzor")
// checkPassword(null)
// checkPassword("polyhax")
// checkPassword("jqueryismyjam")

// home-work #29

// 

// const productName = "Repair droid";

// // Если в переменной хранится строка
// console.log(productName[2]); // 12

// home - work #31

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// Change code above this line

// home - work #32

// function getSubstring(string, length) {
//     const substring = string.slice(string, length); // Change this line
    
//     console.log(substring)

//   return substring;
// }

// getSubstring("Hello world", 3)
// getSubstring("Hello world", 6)
// getSubstring("Hello world", 8)
// getSubstring("Hello world", 11)
// getSubstring("Hello world", 0)

// home - work #33

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//     if (message.length <= maxLength) {
//         result = message;
//     } else if (message.length > maxLength) {
//         result = message.slice(message, maxLength) + "...";
//     }
//     console.log(result);

//   /// Change code above this line
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16)
// formatMessage("Curabitur ligula sapien", 23)
// formatMessage("Vestibulum facilisis purus nec", 20)
// formatMessage("Vestibulum facilisis purus nec", 30)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)

//  home-work #35

// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
    
//     console.log(result);
//   return result;
// }

// checkForName("Egor Kolbasov", "Egor")
// checkForName("Egor Kolbasov", "egor")
// checkForName("Egor Kolbasov", "egOr")
// checkForName("Egor Kolbasov", "Zhenya")
// checkForName("Vadim Nekrasov", "Vadim")
// checkForName("Vadim Nekrasov", "vadim")
// checkForName("Vadim Nekrasov", "Dima")

// home-work #36

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//     result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//     console.log(result);
//   // Change code above this line
//   return result;
// }

// checkForSpam("Latest technology news")
// checkForSpam("JavaScript weekly newsletter")
// checkForSpam("Get best sale offers now!")
// checkForSpam("Amazing SalE, only tonight!")
// checkForSpam("Trust me, this is not a spam message")
// checkForSpam("Get rid of sPaM emails. Our book in on sale!")
// checkForSpam("[SPAM] How to earn fast money?")