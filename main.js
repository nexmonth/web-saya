document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const targetId = event.target.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
      });
    });
  });

  console.log("Halaman Sejarah Islam siap digunakan!");
});