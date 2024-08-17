let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 95;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
