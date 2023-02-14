navToggler = document.querySelectorAll(".navbar-toggler");
navLink = document.querySelectorAll(".nav-link");

navToggler.forEach((toggler) => {
  toggler.addEventListener("click", function () {
    nav = document.getElementById("navbar-nav");
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");

      navLink.forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("show");
        });
      });
    } else {
      nav.classList.add("show");
    }
  });
});

// button = document.getElementById(id);
// if (button.classList.contains("btn-primary")) {
//   button.classList.remove("btn-primary");
//   button.textContent = "Unfollow";
//   button.classList.add("btn-outline-primary");
// } else {
//   button.classList.remove("btn-outline-primary");
//   button.textContent = "Follow";
//   button.classList.add("btn-primary");
// }
