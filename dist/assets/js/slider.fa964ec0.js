(()=>{"use strict";var __webpack_modules__={"./src/assets/images/png/slide-1.png":(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "assets/img/slide-1.954eb8e0.png";\n\n//# sourceURL=webpack://bookshop-project/./src/assets/images/png/slide-1.png?')},"./src/assets/images/png/slide-2.png":(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "assets/img/slide-2.1a602fa1.png";\n\n//# sourceURL=webpack://bookshop-project/./src/assets/images/png/slide-2.png?')},"./src/assets/images/png/slide-3.png":(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "assets/img/slide-3.86308ff2.png";\n\n//# sourceURL=webpack://bookshop-project/./src/assets/images/png/slide-3.png?')},"./src/assets/scripts/slider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Images_png_slide_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Images/png/slide-1.png */ "./src/assets/images/png/slide-1.png");\n/* harmony import */ var Images_png_slide_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Images/png/slide-2.png */ "./src/assets/images/png/slide-2.png");\n/* harmony import */ var Images_png_slide_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Images/png/slide-3.png */ "./src/assets/images/png/slide-3.png");\n\n\n\nconst images = [{\n  url: Images_png_slide_1_png__WEBPACK_IMPORTED_MODULE_0__,\n  title: "Rostov-on-Don, Admiral",\n  city: ["Rostov-on-Don", "LCD admiral"],\n  apartmentArea: "81 m2",\n  repairTime: "3.5 months",\n  repairCost: "Upon request"\n}, {\n  url: Images_png_slide_2_png__WEBPACK_IMPORTED_MODULE_1__,\n  title: "Sochi Thieves",\n  city: ["Sochi", "Thieves"],\n  apartmentArea: "105 m2",\n  repairTime: "4 months",\n  repairCost: "Upon request"\n}, {\n  url: Images_png_slide_3_png__WEBPACK_IMPORTED_MODULE_2__,\n  title: "Rostov-on-Don Patriotic",\n  city: ["Rostov-on-Don", "Patriotic"],\n  apartmentArea: "93 m2",\n  repairTime: "3 months",\n  repairCost: "Upon request"\n}];\nfunction initSlider(options) {\n  //проверяем, что пришедший с сервера массив с проектами не пустой\n  if (!images || !images.length) return;\n  options = options || {\n    titles: true,\n    dots: true,\n    arrows: true,\n    description: false,\n    autoplay: false\n  };\n  const sliderImages = document.querySelector(".slider__images");\n  const sliderDots = document.querySelector(".slider__dots");\n  initImages();\n  if (options.arrows) {\n    initArrows();\n  }\n  if (options.titles) {\n    initTitles();\n  }\n  if (options.dots) {\n    initDots();\n  }\n  if (options.description) {\n    initDescription();\n  }\n  if (options.autoplay) {\n    initAutoplay();\n  }\n\n  // Вывод изображений из массива в html\n  function initImages() {\n    images.forEach((image, index) => {\n      let imageDiv = document.createElement("div");\n      imageDiv.className = `image n${index} ${index === 0 ? "active" : ""}`;\n      imageDiv.style.backgroundImage = `url(${image.url})`;\n      imageDiv.setAttribute("data-index", index);\n      sliderImages.appendChild(imageDiv);\n    });\n  }\n\n  // УПРАВЛЕНИЕ СТРЕЛКАМИ\n  function initArrows() {\n    sliderNav.querySelectorAll(".slider__arrow").forEach(arrow => {\n      arrow.addEventListener("click", () => {\n        let curNumber = +sliderImages.querySelector(".active").dataset.index;\n        let nextNumber;\n        if (arrow.classList.contains("left")) {\n          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;\n        } else {\n          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;\n        }\n        moveSlider(nextNumber);\n      });\n    });\n  }\n\n  // УПРАВЛЕНИЕ ТОЧКАМИ переключения слайдера\n  function initDots() {\n    images.forEach((image, index) => {\n      let dotDiv = document.createElement("div");\n      dotDiv.className = `slider__dot-item n${index} ${index === 0 ? "active" : ""}`;\n      dotDiv.setAttribute("data-index", index);\n      sliderDots.appendChild(dotDiv);\n    });\n    sliderDots.querySelectorAll(".slider__dot-item").forEach(dot => {\n      dot.addEventListener("click", function () {\n        moveSlider(this.dataset.index);\n      });\n    });\n  }\n\n  // УПРАВЛЕНИЕ ССЫЛКАМИ над слайдером\n  function initTitles() {\n    images.forEach((image, index) => {\n      let captionDiv = document.createElement("div");\n      captionDiv.className = `slider__caption-item slider__title n${index} ${index === 0 ? "active" : ""}`;\n      captionDiv.textContent = image.title;\n      captionDiv.setAttribute("data-index", index);\n      sliderCaptions.appendChild(captionDiv);\n    });\n    sliderCaptions.querySelectorAll(".slider__caption-item").forEach(caption => {\n      caption.addEventListener("click", function () {\n        moveSlider(this.dataset.index);\n      });\n    });\n  }\n\n  // ВЫВОД ОПИСАНИЯ СЛАЙДЕРА\n\n  function createInfoElement(container, text, index) {\n    let element = document.createElement("p");\n    element.className = `slider__info-text slider__text n${index} ${index === 0 ? "active" : ""}`;\n    element.textContent = text;\n    element.setAttribute("data-index", index);\n    container.appendChild(element);\n  }\n  function initDescription() {\n    images.forEach((image, index) => {\n      createInfoElement(sliderInfoCity, Array.isArray(image.city) ? image.city.join(", ") : image.city, index);\n      createInfoElement(sliderInfoApartmentArea, image.apartmentArea, index);\n      createInfoElement(sliderInfoRepairTime, image.repairTime, index);\n      createInfoElement(sliderInfoRepairCost, image.repairCost, index);\n    });\n  }\n\n  // АВТОМАТИЧЕСКОЕ ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ\n  function initAutoplay() {\n    setInterval(() => {\n      let curNumber = +sliderImages.querySelector(".active").dataset.index;\n      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;\n      moveSlider(nextNumber);\n    }, options.interval);\n  }\n\n  // ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ\n  function updateActiveClass(container, num) {\n    const activeItem = container.querySelector(".active");\n    if (activeItem) activeItem.classList.remove("active");\n    container.querySelector(".n" + num).classList.add("active");\n  }\n  function moveSlider(num) {\n    updateActiveClass(sliderImages, num);\n    updateActiveClass(sliderDots, num);\n    // updateActiveClass(sliderCaptions, num);\n    // updateActiveClass(sliderInfoCity, num);\n    // updateActiveClass(sliderInfoApartmentArea, num);\n    // updateActiveClass(sliderInfoRepairTime, num);\n    // updateActiveClass(sliderInfoRepairCost, num);\n  }\n}\nlet sliderOptions = {\n  titles: false,\n  dots: true,\n  arrows: false,\n  description: false,\n  autoplay: true,\n  interval: 5000\n};\ndocument.addEventListener("DOMContentLoaded", () => {\n  initSlider(sliderOptions);\n});\n\n//# sourceURL=webpack://bookshop-project/./src/assets/scripts/slider.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var i=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](i,i.exports,__webpack_require__),i.exports}__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="/";var __webpack_exports__=__webpack_require__("./src/assets/scripts/slider.js")})();