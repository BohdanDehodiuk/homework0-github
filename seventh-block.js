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


const galleryConteiner = document.querySelector(".gallery");

const galleryMarkup = createImagesGalleryMarkup(galleryItems);

galleryConteiner.addEventListener("click", aoClickImageGallery);

galleryConteiner.insertAdjacentHTML("beforeend", galleryMarkup);

function createImagesGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>`;
    })
    .join("");
}

function aoClickImageGallery(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  console.log(e.target.dataset.source);
}