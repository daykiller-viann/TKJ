// Animasi scroll smooth untuk navigasi
document.addEventListener("DOMContentLoaded", function () {
  // Tangkap semua link navigasi
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  // Tambahkan event listener untuk setiap link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Ambil target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Scroll ke section dengan animasi smooth
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Jika ada tombol "Home" atau "About" di header
  const homeButton = document.querySelector(".home-btn");
  const aboutButton = document.querySelector(".about-btn");
  const praktikumButton = document.querySelector(".praktikum-btn");

  if (homeButton) {
    homeButton.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("header").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  if (aboutButton) {
    aboutButton.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#about").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // Scroll ke section tertentu berdasarkan hash di URL
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }
});

// Alternatif: Animasi scroll manual (jika scrollIntoView tidak sesuai keinginan)
function smoothScrollTo(target, duration = 1000) {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Fungsi easing untuk efek animasi yang halus
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Contoh penggunaan smoothScrollTo:
// document.querySelector('.home-link').addEventListener('click', function(e) {
//     e.preventDefault();
//     smoothScrollTo('#home', 800);
// });

// document.querySelector('.about-link').addEventListener('click', function(e) {
//     e.preventDefault();
//     smoothScrollTo('#about', 800);
// });
