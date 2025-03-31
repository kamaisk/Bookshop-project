// import { addToCard, removeFromCart } from "./cart";
// import { loadBooks } from "./books";

// const loadMoreBtn = document.querySelector(".btn-load-more");

// // Обработчик клика по кнопке "Купить"
// document.addEventListener("click", (event) => {
//   if (
//     event.target.classList.contains("btn-buy") ||
//     event.target.classList.contains("btn-cart")
//   ) {
//     const button = event.target;
//     const bookCard = button.closest(".book-card");
//     const bookId = bookCard.dataset.id;

//     if (button.classList.contains("btn-buy")) {
//       addToCard(bookId);
//       button.classList.remove("btn-buy");
//       button.classList.add("btn-cart");
//       button.textContent = "In the cart";
//     } else {
//       removeFromCart(bookId);
//       button.classList.remove("btn-cart");
//       button.classList.add("btn-buy");
//       button.textContent = "Buy now";
//     }
//   }
// });

// // Обработчик клика по кнопке "Загрузить еще"
// loadMoreBtn.addEventListener("click", () => {
//   let currentCategory = "Architecture";
//   loadBooks(currentCategory, false);
// });

// // Установить правильное состояние кнопок "Купить" или "В корзине"
// export function updateButtons() {
//   const cart = loadFromStorage(CART_KEY) || [];
//   const buttons = document.querySelectorAll(".btn-buy");

//   buttons.forEach((button) => {
//     const bookId = button.dataset.bookId;
//     if (cart.includes(bookId)) {
//       button.classList.remove("btn-buy");
//       button.classList.add("btn-cart");
//       button.textContent = "In the cart";
//     }
//   });
// }
