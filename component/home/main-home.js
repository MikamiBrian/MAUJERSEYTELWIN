document.addEventListener("DOMContentLoaded", () => {
  const btnMobile = document.getElementById("btnMobile");
  const mobileMenu = document.getElementById("mobileMenu");

  if (btnMobile) {
    btnMobile.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
