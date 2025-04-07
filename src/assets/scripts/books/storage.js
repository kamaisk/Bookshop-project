const CART_KEY = "cartItems";

// Сохранить товары в localStorage
export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Загрузить товары из localStorage
export function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Функция добавления книги в корзину
export function addToCard(bookId) {
  const cart = loadFromStorage(CART_KEY) || [];
  if (!cart.includes(bookId)) {
    cart.push(bookId);
    saveToStorage(CART_KEY, cart);
  }
  updateCartIcon(cart.length);
}

// Функция удаления книги из корзины
export function removeFromCart(bookId) {
  const cart = loadFromStorage(CART_KEY) || [];
  const updatedCart = cart.filter((id) => id !== bookId);
  saveToStorage(CART_KEY, updatedCart);
  updateCartIcon(updatedCart.length);
}

// Функция обновления иконки корзины
export function updateCartIcon(count) {
  const cartCount = document.querySelector(".cart-icon__count");
  const cartIcon = document.querySelector(".cart-icon");

  if (count > 0) {
    cartCount.textContent = count;
    cartCount.style.display = "block";
  } else {
    cartCount.style.display = "none";
  }
}

// Очистка корзины
export function clearCart() {
  saveToStorage(CART_KEY, []);
  updateCartIcon(0);
}
