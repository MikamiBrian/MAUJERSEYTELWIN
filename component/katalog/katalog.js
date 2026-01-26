<!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

  <script>
    // Mobile Menu
    const btnMobile = document.getElementById("btnMobile");
    const mobileMenu = document.getElementById("mobileMenu");
    btnMobile.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // HERO background swiper
    new Swiper(".heroSwiper", {
      loop: true,
      effect: "fade",
      speed: 1200,
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      },
    });

    // Swiper for each product card
    document.querySelectorAll(".productSwiper").forEach((el) => {
      new Swiper(el, {
        loop: true,
        spaceBetween: 10,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: el.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });
    });
  </script>

  <!-- FILTER SCRIPT -->
  <script>
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".product-card");

    function setActive(btn) {
      filterButtons.forEach(b => {
        b.classList.remove("border-cyan-300/40", "bg-cyan-300/10", "text-cyan-200", "font-semibold");
        b.classList.add("border-white/10", "bg-white/5", "text-slate-200");
      });

      btn.classList.remove("border-white/10", "bg-white/5", "text-slate-200");
      btn.classList.add("border-cyan-300/40", "bg-cyan-300/10", "text-cyan-200", "font-semibold");
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        setActive(btn);

        cards.forEach((card) => {
          const category = card.getAttribute("data-category");

          if (filter === "all" || filter === category) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  </script>
