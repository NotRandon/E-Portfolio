document.getElementById("toggle-mode").addEventListener("click", () => {
  const container = document.getElementById("container");
  const isDark = container.classList.contains("dark");
  container.classList.toggle("dark", !isDark);
  container.classList.toggle("light", isDark);
  document.getElementById("toggle-mode").textContent = isDark ? "🌙" : "☀️";
});

const pages = document.querySelectorAll(".page");
document.getElementById("page-select").addEventListener("change", (e) => {
  pages.forEach((page) => page.classList.add("hidden"));
  const selected = e.target.value;
  document.getElementById(selected).classList.remove("hidden");
});

// Set default page on load
document.getElementById("welcome").classList.remove("hidden");
