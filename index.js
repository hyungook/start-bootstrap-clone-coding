window.addEventListener("scroll", function () {
  let header = document.querySelector("#topNav");
  header.classList.toggle("sticky", window.scrollY);
});

let menuBtn = document.querySelector(".menuBtn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    console.log("test");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

/* 
function aa() {
  let menuBtn = document.querySelector(".menuBtn");
  let topNav__ul = document.querySelector(".topNav__ul ");
  menuBtn.classList.toggle("open");
  topNav__ul.classList.toggle("open");
  }
}
 */
