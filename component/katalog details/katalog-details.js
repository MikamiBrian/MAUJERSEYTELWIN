<!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // ===== YEAR (kalau ada id year di tempat lain) =====
      // (tidak dipakai di footer versi ini, tapi aman)

      // ===== Mobile menu =====
      const btnMobile = document.getElementById("btnMobile");
      const mobileMenu = document.getElementById("mobileMenu");
      btnMobile?.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // ===== SWIPER =====
      const swiper = new Swiper(".productSwiper", {
        loop: true,
        speed: 850,
        effect: "fade",
        fadeEffect: { crossFade: true },

        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });

      // ===== THUMB ACTIVE UI =====
      const thumbButtons = document.querySelectorAll(".thumbBtn");

      function setActiveThumb(realIndex) {
        thumbButtons.forEach(btn => btn.classList.remove("thumb-active"));
        const activeBtn = document.querySelector(`.thumbBtn[data-index="${realIndex}"]`);
        activeBtn?.classList.add("thumb-active");
      }

      setActiveThumb(0);

      // ===== PAUSE AUTOPLAY SAAT USER PILIH =====
      let resumeTimer = null;
      const RESUME_DELAY = 6000;

      function pauseAutoplayTemporarily() {
        swiper.autoplay.stop();
        clearTimeout(resumeTimer);

        resumeTimer = setTimeout(() => {
          swiper.autoplay.start();
        }, RESUME_DELAY);
      }

      function animateCurrentSlide() {
        const activeSlide = document.querySelector(".productSwiper .swiper-slide-active img");
        if (!activeSlide) return;

        activeSlide.classList.remove("fade-pop");
        void activeSlide.offsetWidth;
        activeSlide.classList.add("fade-pop");
      }

      thumbButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const index = Number(btn.dataset.index || 0);

          pauseAutoplayTemporarily();
          swiper.slideToLoop(index, 700);

          setActiveThumb(index);
          setTimeout(() => animateCurrentSlide(), 80);
        });
      });

      swiper.on("slideChange", () => {
        setActiveThumb(swiper.realIndex);
        setTimeout(() => animateCurrentSlide(), 80);
      });

      // ===== ACCORDION FIX (pasti jalan) =====
      const accButtons = document.querySelectorAll(".accBtn");

      function closeAllAccordion() {
        accButtons.forEach(b => b.setAttribute("aria-expanded", "false"));
        document.querySelectorAll(".accPanel").forEach(p => {
          p.classList.remove("is-open");
          p.style.maxHeight = "0px";
        });
      }

      function openAccordion(btn, panel) {
        btn.setAttribute("aria-expanded", "true");
        panel.classList.add("is-open");

        // set maxHeight setelah panel diberi class
        requestAnimationFrame(() => {
          panel.style.maxHeight = panel.scrollHeight + 24 + "px";
        });
      }

      accButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const targetId = btn.getAttribute("data-target");
          const panel = document.getElementById(targetId);
          if (!panel) return;

          const expanded = btn.getAttribute("aria-expanded") === "true";

          if (expanded) {
            // kalau klik yang sedang open -> close
            btn.setAttribute("aria-expanded", "false");
            panel.classList.remove("is-open");
            panel.style.maxHeight = "0px";
            return;
          }

          closeAllAccordion();
          openAccordion(btn, panel);
        });
      });

      // Open first accordion by default
      const firstBtn = document.querySelector('.accBtn[data-target="acc1"]');
      const firstPanel = document.getElementById("acc1");
      if (firstBtn && firstPanel) {
        closeAllAccordion();
        openAccordion(firstBtn, firstPanel);
      }
    });
  </script>