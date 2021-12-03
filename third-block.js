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

// home work #20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       console.log(totalPrice);

//       return totalPrice;
//     }
//   }
//   console.log(totalPrice);
//   return 0;
//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// home work #21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// home work #22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// home work #23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// home work #24

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);

//   rgbColors.push(rgb);
// }

// home work #25
// Глубокая деструктуризация

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// home work #26
// Паттерн, обект настроек
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   //   const todayLow = forecast.today.low;
//   //   const todayHigh = forecast.today.high;
//   //   const tomorrowLow = forecast.tomorrow.low;
//   //   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });
// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// });

// home work #27
// ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(Math.min(...scores));

// home work #28
// ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// home work #29
// ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// home work #30
// ЗАДАЧА. КАРТОЧКИ ЗАДАЧ

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   //   const { text } = data;
//   //   const newObject = {
//   //     ...data,
//   //     category: category,
//   //     priority: priority,
//   //     completed: completed,
//   //   };
//   //   console.log(newObject);
//   //     return newObject;
//   console.log({
//     category: category,
//     priority: priority,
//     completed: completed,
//     ...data,
//   });
//   return {
//     category: category,
//     priority: priority,
//     completed: completed,
//     ...data,
//   };

//   // Change code above this line
// }

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// home work #31
// ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ
// Change code below this line
// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const par of args) {
//     total += par;
//   }
//   return total;
//   // Change code above this line
// }

// home work #32
// ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ

// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstNumber < arg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// home work #33
// ЗАДАЧА. МАССИВ СОВПАДЕНИЙ
// Change code below this line
// function findMatches(arr, ...numbers) {
//   const matches = []; // Don't change this line
//   for (const el of numbers) {
//     if (arr.includes(el)) matches.push(el);
//   }

//   // Change code above this line
//   return matches;
// }

// home work #34
// МЕТОДЫ ОБЪЕКТА

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// home work #35
// ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     let bookIndex = this.books.indexOf(oldName);
//     let newBook = this.books.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };

// home work #36
// const atTheOldToad = {
//   // Change code below this line
//   potions: [],

//   // Change code above this line
// };

// home work #37
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   // Change code above this line
// };

// home work #38
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// home work #39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const removeProperty = this.potions.indexOf(potionName);

//     return this.potions.splice(removeProperty, 1);
//   },
// };

// home work #40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);

//     // Change code above this line
//   },
// };

// home work #41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name.includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//       }
//     }
//     return `Potion ${potionName} is not inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
