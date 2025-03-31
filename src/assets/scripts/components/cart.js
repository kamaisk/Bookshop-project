// import { saveToStorage, loadFromStorage } from "../utils/storage";

// const CART_KEY = "cartItems";

// // Функция добавления книги в корзину
// export function addToCard(bookId) {
//   const cart = loadFromStorage(CART_KEY) || [];
//   if (!cart.includes(bookId)) {
//     cart.push(bookId);
//     saveToStorage(CART_KEY, cart);
//     updateCartIcon(cart.length);
//   }
// }

// // Функция удаления книги из корзины
// export function removeFromCart(bookId) {
//   const cart = loadFromStorage(CART_KEY) || [];
//   const updatedCart = cart.filter((id) => id !== bookId);
//   saveToStorage(CART_KEY, updatedCart);
//   updateCartIcon(updatedCart.length);
// }

// // Функция обновления иконки корзины
// export function updateCartIcon(count) {
//   const cartCountElement = document.querySelector(".cart-icon__count");
//   cartCountElement.textContent = count > 0 ? count : "";
// }

// export function getCartItems() {
//   return loadFromStorage(CART_KEY) || [];
// }
