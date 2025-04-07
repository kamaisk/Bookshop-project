import slide1 from "Images/png/slide-1.png";
import slide2 from "Images/png/slide-2.png";
import slide3 from "Images/png/slide-3.png";

const images = [
  {
    url: slide1,
    title: "Rostov-on-Don, Admiral",
    city: ["Rostov-on-Don", "LCD admiral"],
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
  },
  {
    url: slide2,
    title: "Sochi Thieves",
    city: ["Sochi", "Thieves"],
    apartmentArea: "105 m2",
    repairTime: "4 months",
    repairCost: "Upon request",
  },
  {
    url: slide3,
    title: "Rostov-on-Don Patriotic",
    city: ["Rostov-on-Don", "Patriotic"],
    apartmentArea: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
  },
];

function initSlider(options) {
  //проверяем, что пришедший с сервера массив с проектами не пустой
  if (!images || !images.length) return;

  options = options || {
    titles: true,
    dots: true,
    arrows: true,
    description: false,
    autoplay: false,
  };

  const sliderImages = document.querySelector(".slider__images");
  const sliderDots = document.querySelector(".slider__dots");

  initImages();

  if (options.arrows) {
    initArrows();
  }

  if (options.titles) {
    initTitles();
  }

  if (options.dots) {
    initDots();
  }

  if (options.description) {
    initDescription();
  }

  if (options.autoplay) {
    initAutoplay();
  }

  // Вывод изображений из массива в html
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = document.createElement("div");
      imageDiv.className = `image n${index} ${index === 0 ? "active" : ""}`;
      imageDiv.style.backgroundImage = `url(${image.url})`;
      imageDiv.setAttribute("data-index", index);
      sliderImages.appendChild(imageDiv);
    });
  }

  // УПРАВЛЕНИЕ СТРЕЛКАМИ
  function initArrows() {
    sliderNav.querySelectorAll(".slider__arrow").forEach((arrow) => {
      arrow.addEventListener("click", () => {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  // УПРАВЛЕНИЕ ТОЧКАМИ переключения слайдера
  function initDots() {
    images.forEach((image, index) => {
      let dotDiv = document.createElement("div");
      dotDiv.className = `slider__dot-item n${index} ${
        index === 0 ? "active" : ""
      }`;
      dotDiv.setAttribute("data-index", index);
      sliderDots.appendChild(dotDiv);
    });
    sliderDots.querySelectorAll(".slider__dot-item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  // УПРАВЛЕНИЕ ССЫЛКАМИ над слайдером
  function initTitles() {
    images.forEach((image, index) => {
      let captionDiv = document.createElement("div");
      captionDiv.className = `slider__caption-item slider__title n${index} ${
        index === 0 ? "active" : ""
      }`;
      captionDiv.textContent = image.title;
      captionDiv.setAttribute("data-index", index);
      sliderCaptions.appendChild(captionDiv);
    });
    sliderCaptions
      .querySelectorAll(".slider__caption-item")
      .forEach((caption) => {
        caption.addEventListener("click", function () {
          moveSlider(this.dataset.index);
        });
      });
  }

  // ВЫВОД ОПИСАНИЯ СЛАЙДЕРА

  function createInfoElement(container, text, index) {
    let element = document.createElement("p");
    element.className = `slider__info-text slider__text n${index} ${
      index === 0 ? "active" : ""
    }`;
    element.textContent = text;
    element.setAttribute("data-index", index);
    container.appendChild(element);
  }
  function initDescription() {
    images.forEach((image, index) => {
      createInfoElement(
        sliderInfoCity,
        Array.isArray(image.city) ? image.city.join(", ") : image.city,
        index
      );
      createInfoElement(sliderInfoApartmentArea, image.apartmentArea, index);
      createInfoElement(sliderInfoRepairTime, image.repairTime, index);
      createInfoElement(sliderInfoRepairCost, image.repairCost, index);
    });
  }

  // АВТОМАТИЧЕСКОЕ ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ
  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.interval);
  }

  // ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ
  function updateActiveClass(container, num) {
    const activeItem = container.querySelector(".active");
    if (activeItem) activeItem.classList.remove("active");
    container.querySelector(".n" + num).classList.add("active");
  }

  function moveSlider(num) {
    updateActiveClass(sliderImages, num);
    updateActiveClass(sliderDots, num);
    // updateActiveClass(sliderCaptions, num);
    // updateActiveClass(sliderInfoCity, num);
    // updateActiveClass(sliderInfoApartmentArea, num);
    // updateActiveClass(sliderInfoRepairTime, num);
    // updateActiveClass(sliderInfoRepairCost, num);
  }
}

let sliderOptions = {
  titles: false,
  dots: true,
  arrows: false,
  description: false,
  autoplay: true,
  interval: 5000,
};

document.addEventListener("DOMContentLoaded", () => {
  initSlider(sliderOptions);
});
