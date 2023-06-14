

/*  -- skill-links script---- */
var abtLinks = document.getElementsByClassName("about-links");
var contents = document.getElementsByClassName("contents");

function openContent(idname) {
  for (links of abtLinks) {
    links.classList.remove("active");
  }
  for (item of contents) {
    item.classList.remove("active-content");
  }

  document.getElementById(idname).classList.add("active-content");
}
/* --- menu-bar toggle--- */
let menuIcon = document.querySelector("#hmb-menu");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');