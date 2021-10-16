"use strict";

// home work 1

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]
// };

// console.log(apartment);

// home work 2

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }
// };

// console.log(apartment);

// home work 6

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// home work 7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment.location);

// home work 8

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//     name,
//     price,
//     image,
//     tags,
//   // Change code above this line
// };

// console.log(product.name);

// home work 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {

//     // console.log(key);

//     keys.push(key);
//     // console.log(keys);

//     values.push(apartment[key]);
//     console.log(values);
// }

// home work 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         // console.log(key);
//         // console.log(apartment[key]);

//         keys.push(key);
//     // console.log(keys);

//       values.push(apartment[key]);
//     console.log(values);
//     }

//   // Change code above this line
// }

// home work 12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     let property = [];
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {

//             property.push(key);
//             // console.log(property);

//             propCount = property.length;

//             console.log(propCount);

//         }

//     }

//   // Change code above this line
//   return propCount;
// };

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

// const listOfStudents = ['катя', 'антон', 'оля', 'діма', 'юра', 'костя', 'іра', 'ден', 'міша', 'юля'];

// const newList = listOfStudents.map(name => {
//     let newListSplit = name.split("");
//     // console.log(newListSplit);
//     newListSplit[0] = newListSplit[0].toUpperCase();
//     // console.log(newListSplit);
//     newListSplit = newListSplit.join("");
//     return newListSplit;
// });

// console.log(listOfStudents);
// console.log(newList[0]);

// const name = "Kolia";
// const credit = 123;

// const myCreditCard = {
//     name,
//     credit,

//     addToocard(sum) {
//         this.credit += sum
//         console.log(`Пользователь ${this.name} добавил на карту ${sum}, баланс по карте ${this.credit}`);
//     },

//     withdraw(sum) {
//         this.credit -= sum
//         console.log(`Пользователь ${this.name} снял с карты ${sum}, баланс по карте ${this.credit}`);

//     }

// }
// myCreditCard.name = "Masha";

// myCreditCard.addToocard(1000);
// myCreditCard.withdraw(523);

// const bohdan = {
//     html: 2,
//     css: 2,
//     sass: 1,
//     js: 2,
// }

// const values = Object.values(bohdan);
// console.log(values);

// function addSum(arr) {

//     const tottal = arr.reduce((prewVal, item) => {return prewVal + item}, 0);

//     return tottal;
// }

// const proffit = addSum(values);
// console.log(proffit);

// for (const key in bohdan) {
//     console.log(key);
//     console.log(bohdan[key]);

// }

// ДЗ від ментора
// const addSum1 = (...arr) => { console.log(arr) };

// addSum1(values);

// const myCreditCard = {
//   name: "sergey",
//   cards: {
//     privat: 1000,
//     mono: 2000,
//     aBank: 3600,
//   },
//   total: 100,
//   sumInMyCard() {
//     const cardName = prompt();
//     console.log(cardName);
//     console.log(this.cards[cardName]);
//   },

//   addToCard(sum, nameCard) {
//     this.credits += sum;
//     console.log(
//       `Клиент ${this.name} отправил на карту ${sum}. Баланс ${this.credits}`
//     );
//   },
//   withdraw(sum, nameCard) {
//     this.credits -= sum;
//     console.log(
//       `Клиент ${this.name} снял с карты ${sum}. Баланс ${this.credits}`
//     );
//   },
//   addSum() {
//     const values = Object.values(this.cards);

//     this.total = values.reduce((accum, value) => {
//       return (accum += value);
//     }, this.total);
//     console.log(this.total);
//   },
// };
// myCreditCard.addSum();
// myCreditCard.addSum();

// home work #13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {

//     values.push(apartment[key]);

//     // const values = [apartment[key]];

//     console.log(values);

// };

// home work #14

// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;

//     const keys = Object.keys(object);
//     // console.log(keys);

//     propCount = keys.length;
//     console.log(propCount);

//   return propCount;
//   // Change code above this line
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// home work #16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
//         console.log(totalSalary);
//     }

//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// home work #17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// home work #18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       // console.log(product.price);
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

// home work #19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const result = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) result.push(product[propName]);
//   }
//   return result;

//   // Change code above this line
// }

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");
