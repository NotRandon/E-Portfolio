document.addEventListener("DOMContentLoaded", () => {
  const pageSelect = document.getElementById("page-select");
  const pages = document.querySelectorAll(".page");

  function showPage(pageId) {
    pages.forEach(page => {
      if (page.id === pageId) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  }

  showPage("welcome");

  pageSelect.addEventListener("change", (e) => {
    showPage(e.target.value);
  });
});
