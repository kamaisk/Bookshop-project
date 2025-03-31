// import "./components/buttons";
// import { loadBooks } from "./components/books";
// import { getCartItems, updateCartIcon } from "./components/cart";
// // import "./components/cart";
// import { updateButtons } from "./components/buttons";
// import { saveToStorage } from "./utils/storage";

// const categoriesList = document.querySelector(".categories-list");
// let currentCategory = "Architecture";

// // Обработчик клика по категориям
// categoriesList.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     currentCategory = event.target.dataset.category;
//     loadBooks(currentCategory);
//   }
// });

// // Загрузка первой категории при запуске
// document.addEventListener("DOMContentLoaded", () => {
//   updateCartIcon(getCartItems().length);
//   loadBooks(currentCategory);
//   updateButtons();
// });

// // Функция очистки корзины при нажатии на иконку Корзины
// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("cart-icon")) {
//     saveToStorage(CART_KEY, []);
//     updateCartIcon(0);
//   }
// });
