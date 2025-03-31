import { fetchBooks } from "./api";
import {
  loadFromStorage,
  addToCard,
  removeFromCart,
  updateCartIcon,
  clearCart,
} from "./storage";

const booksContainer = document.querySelector(".books-wrapper");
const cartIcon = document.querySelector(".cart-icon");
const categoriesList = document.querySelector(".categories-list");
const loadMoreBtn = document.querySelector(".btn-load-more");

let currentCategory = "Architecture";
let allBooks = []; // Глобальный массив для хранения книг
let startIndex = 0;

// Функция для загрузки книг по категориям
async function loadBooks(category, reset = true) {
  if (reset) {
    startIndex = 0;
    allBooks = [];
    booksContainer.innerHTML = "";
  }
  const books = await fetchBooks(category, startIndex);
  if (books) {
    allBooks.push(...books);
    displayBooks(books);
    startIndex += books.length;
  }
}

// Функция для отображения книг
function displayBooks(books) {
  const cart = loadFromStorage("cartItems");
  booksContainer.innerHTML += books
    .map((book) => {
      const volumeInfo = book.volumeInfo;
      const saleInfo = book.saleInfo;
      const bookId = book.id;

      // Обложка
      const cover =
        "https://api.interior.ru/media/resize/1500/images/setka/2021_04_14/Porter_01.jpg.webp";
      // Авторы
      const authors = volumeInfo.authors
        ? volumeInfo.authors.join(", ")
        : "Неизвестный автор";
      // Заголовок
      const title = volumeInfo.title || "Без названия";
      // Рейтинг
      let ratingHtml = "";
      if (volumeInfo.averageRating) {
        const rating = Math.round(volumeInfo.averageRating);
        const reviewCount = volumeInfo.ratingsCount || 0;
        ratingHtml = `
          <div class="book-card__rating"> 
            ${"&#x2605;".repeat(rating)}${"&#x2606;".repeat(5 - rating)} 
            <span class="book-card__review">${reviewCount} review</span>
          </div>
          `;
      }
      // Описание
      let description = volumeInfo.description || "Описание отсутствует";
      if (description.length > 100) {
        description = description.substring(0, 100) + "...";
      }
      // Цена
      let priceHtml = "";
      if (saleInfo.listPrice) {
        priceHtml = `
          <p class="book-card__price">${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}</p>
          `;
      }
      // Кнопки
      const inCart = cart.includes(bookId);
      const buttonText = inCart ? "In the cart" : "Buy now";
      const buttonClass = inCart ? "btn-cart" : "btn-buy";

      return `
      <div class="book-card" data-id="${bookId}">
       <img src="${cover}" alt="${title}" class="book-card__cover">
       <div class="book-card__info">
          <div>
          <p class="book-card__authors">${authors}</p>
          <h3 class="book-card__title">${title}</h3>
          ${ratingHtml}
          </div>
          <p class="book-card__description">${description}</p>
          ${priceHtml}
          <button class="${buttonClass}">${buttonText}</button>
       </div>
      </div>
      `;
    })
    .join(" ");
}

// Установить правильное состояние кнопок "Купить" или "В корзине"
function toggleCartButtons(button, inCart) {
  if (inCart) {
    button.classList.remove("btn-buy");
    button.classList.add("btn-cart");
    button.textContent = "In the cart";
  } else {
    button.classList.remove("btn-cart");
    button.classList.add("btn-buy");
    button.textContent = "Buy now";
  }
}

// Обработчик клика по кнопке "Купить" или "В корзине"
document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("btn-buy") ||
    event.target.classList.contains("btn-cart")
  ) {
    const button = event.target;
    const bookCard = button.closest(".book-card");
    const bookId = bookCard.dataset.id;

    if (button.classList.contains("btn-buy")) {
      addToCard(bookId);
      toggleCartButtons(button, true);
    } else {
      removeFromCart(bookId);
      toggleCartButtons(button, false);
    }
  }
});

// Очистка корзины при клике на иконку
cartIcon.addEventListener("click", clearCart);

// Обработчик клика по кнопке "Загрузить еще"
loadMoreBtn.addEventListener("click", () => {
  loadBooks(currentCategory, false);
});

// Обработчик клика по категориям
categoriesList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    currentCategory = event.target.dataset.category;
    loadBooks(currentCategory);
  }
});

// Загрузка первой категории при запуске
document.addEventListener("DOMContentLoaded", () => {
  updateCartIcon(loadFromStorage("cartItems").length);
  loadBooks(currentCategory);
});
