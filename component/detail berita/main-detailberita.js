document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnMobile");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});
