// // Функция для загрузки книг из Google Books API
// export async function fetchBooks(category, startIndex = 0, maxResults = 6) {
//   const API_KEY = "AIzaSyC6l1iFpKRJljJ0m2Uq-4mqOk6qN2opkD0";
//   const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
//   const url = `${BASE_URL}?q=subject:${category}&key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`); // Обработка ошибок
//     }
//     const data = await response.json();
//     return data.items || [];
//   } catch (error) {
//     console.error("Ошибка загрузки книг:", error);
//     return [];
//   }
// }
