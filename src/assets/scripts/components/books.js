// import { fetchBooks } from "../api/booksApi";

// let allBooks = []; // Глобальный массив для хранения книг
// let startIndex = 0;

// // Функция для отображения книг
// export function displayBooks(books) {
//   const booksContainer = document.querySelector(".books-wrapper");
//   booksContainer.innerHTML = books
//     .map((book) => {
//       // if (!book.volumeInfo) return "";
//       const volumeInfo = book.volumeInfo;
//       const saleInfo = book.saleInfo;
//       const bookId = book.id;

//       // Обложка
//       // const cover =
//       //   volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail
//       //     ? volumeInfo.imageLinks.thumbnail
//       //     : "https://s3.stroi-news.ru/img/kartinki-dlya-oblozhki-knigi-10.jpg";
//       const cover =
//         "https://api.interior.ru/media/resize/1500/images/setka/2021_04_14/Porter_01.jpg.webp";
//       // Авторы
//       const authors = volumeInfo.authors
//         ? volumeInfo.authors.join(", ")
//         : "Неизвестный автор";
//       // Заголовок
//       const title = volumeInfo.title || "Без названия";
//       // Рейтинг
//       let ratingHtml = "";
//       if (volumeInfo.averageRating) {
//         const rating = Math.round(volumeInfo.averageRating);
//         const reviewCount = volumeInfo.ratingsCount || 0;
//         ratingHtml = `
//         <div class="book-card__rating">
//           ${"&#x2605;".repeat(rating)}${"&#x2606;".repeat(5 - rating)}
//           <span class="book-card__review">${reviewCount} review</span>
//         </div>
//         `;
//       }
//       // Описание
//       let description = volumeInfo.description || "Описание отсутствует";
//       if (description.length > 100) {
//         description = description.substring(0, 100) + "...";
//       }
//       // Цена
//       let priceHtml = "";
//       if (saleInfo.listPrice) {
//         priceHtml = `
//         <p class="book-card__price">${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}</p>
//         `;
//       }

//       return `
//     <div class="book-card" data-id="${bookId}">
//      <img src="${cover}" alt="${title}" class="book-card__cover">
//      <div class="book-card__info">
//         <div>
//         <p class="book-card__authors">${authors}</p>
//         <h3 class="book-card__title">${title}</h3>
//         ${ratingHtml}
//         </div>
//         <p class="book-card__description">${description}</p>
//         ${priceHtml}
//         <button class="btn btn-buy">Buy now</button>
//      </div>
//     </div>
//     `;
//     })
//     .join(" ");
// }

// // Функция для загрузки книг по категориям
// export async function loadBooks(category, reset = true) {
//   const booksContainer = document.querySelector(".books-wrapper");
//   if (reset) {
//     startIndex = 0;
//     allBooks = [];
//     booksContainer.innerHTML = "";
//   }
//   const books = await fetchBooks(category, startIndex);
//   if (books) {
//     allBooks.push(...books);
//     displayBooks(allBooks);
//     startIndex += books.length;
//   }
// }
