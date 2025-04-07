// Функция для добавления активной категории хедера
function updateActiveNavLink(selectedNavLink) {
  const currentUrl = window.location.pathname;
  console.log(currentUrl);
  const navLink = document.querySelectorAll(".nav-menu__link");

  navLink.forEach((link) => {
    const linkPath = new URL(link.getAttribute("href"), window.location.origin)
      .pathname;

    if (linkPath === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", updateActiveNavLink);
