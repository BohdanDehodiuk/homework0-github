// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// window.addEventListener("click", () => {
//   alert("Window click handler");
// });

// parent.addEventListener("click", () => {
//   alert("Parent click handler");
// });

// child.addEventListener("click", () => {
//   alert("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   alert("Descendant click handler");
// });
// const parent = document.querySelector("#parent");

// =======================================================================

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// =======================================================================

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   //
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   //   event.stopImmediatePropagation();
//   //   event.stopPropagation();
//   alert("Descendant click handler");
// });

// =========================================================================

// const colorPalette = document.querySelector(".color-palette");

// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   //   console.log(selectedColor);
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();
// // console.log(createPaletteItems());

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }
// ===========================================================================
// console.log(getRandomHex());

// const result = _.add(2, 3);
// console.log(result);

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );

// =============================================================================

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
// };

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 5000)
// );

// ============================================================================

// const vanillaOutput = document.querySelector(".output.vanilla");
// const throttledOutput = document.querySelector(".output.throttled");
// const trailingOutput = document.querySelector(".output.trailing");
// const leadingOutput = document.querySelector(".output.leading");
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0,
// };

// // Trailing debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// // Leading debounce
// document.addEventListener(
//   "scroll",
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true }
//   )
// );

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// =========================================================================

// const galleryConteiner = document.querySelector(".gallery");

// const galleryMarkup = createImagesGalleryMarkup(galleryItems);

// galleryConteiner.addEventListener("click", aoClickImageGallery);

// galleryConteiner.insertAdjacentHTML("beforeend", galleryMarkup);

// function createImagesGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//             <a class="gallery__link" href="${original}">
//                 <img
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                 />
//             </a>`;
//     })
//     .join("");
// }

// function aoClickImageGallery(e) {
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   e.preventDefault();
//   console.log(e.target.dataset.source);
// }

// const li = document.querySelectorAll("#li");
// console.log(li);
// const ul = document.querySelector("#ul");
// console.log(ul.children);

// const liToArray = Array.from(li);
// console.log(liToArray);

// function example(params);

// example

// const arrayNumber = [1, 5, 4, 7, 16];
// const someNumbers = arrayNumber.filter((number) => {
//   if (number % 2 === 0) {
//     return number;
//   }
// });

// localStorage.setItem("numbers", JSON.stringify(someNumbers));

// let arr = localStorage.getItem("numbers");
// arr = JSON.parse(arr);

// // let sum = 0;
// // arr.forEach((elem) => {
// //     elem *= elem;
// //     sum += elem;
// // })
// // console.log(sum)

// const newArr = arr.reduce(
//   (previousValue, number) => (previousValue += number *= number),
//   0
// );
// localStorage.setItem("sum", JSON.stringify(newArr));
// const arr = [
//   {
//     name: "card 1",
//     lastUsed: new Date().getTime(),
//     creationDate: new Date().getTime(),
//   },
//   {
//     name: "card 2",
//     lastUsed: new Date().getTime(),
//     creationDate: new Date().getTime(),
//   },
//   {
//     name: "card 3",
//     lastUsed: new Date().getTime(),
//     creationDate: new Date().getTime(),
//   },
//   {
//     name: "card 4",
//     lastUsed: new Date().getTime(),
//     creationDate: new Date().getTime(),
//   },
//   {
//     name: "card 5",
//     lastUsed: new Date().getTime(),
//     creationDate: new Date().getTime(),
//   },
//   {
//     name: "card 6",
//     lastUsed: new Date().getTime(),
//     creationDate: new Date().getTime(),
//   },
//   {
//     name: "card 7",
//     lastUsed: new Date().getTime(),
//     creationDate: new Date().getTime(),
//   },
//   {
//     name: "card 8",
//     lastUsed: new Date().getTime(),
//     creationDate: new Date().getTime(),
//   },
// ];

// console.log(arr);
// const itemUl = document.getElementById("item");
// const children = [...ulItem.itemUl];

// const button = document.getElementById("sort");

// function createMarkup(arr) {
//   const arr.map(({ name }) => `<div><p>"${name}"</p></div>`).join("");
// }

// console.log(createNewDiv(arr));

// const dog = {
//   name: "Mango",
//   age: 3,
//   isHappy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// JSON.stringify(() => console.log("Well, this is awkward")); // undefined

// const first = JSON.stringify(true);
// console.log(first);

// const notJson = JSON.parse(dogJSON);
// console.log(notJson);

// Script will crash during parse
// const data = JSON.parse("Well, this is awkward");
// console.log("❌ You won't see this log");

// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log("✅ This is fine, we handled parse error in try...catch");

// console.log("This message will not appear in the console");

// cos value = 5;

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// console.log(settings);

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// localStorage.setItem("ui-theme", "light");
// console.log(localStorage.getItem("ui-theme")); // "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("sidebar", "expanded");
// localStorage.setItem("notification-level", "mute");
// console.log(localStorage.getItem("ui-theme")); // "light"
// console.log(localStorage.getItem("sidebar")); // "expanded"
// console.log(localStorage.getItem("notification-level")); // "mute"

// localStorage.clear();
// console.log(localStorage.getItem("ui-theme")); // null
// console.log(localStorage.getItem("sidebar")); // null
// console.log(localStorage.getItem("notification-level")); // null

// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// const load = (key) => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };

// export default {
//   save,
//   load,
// };
