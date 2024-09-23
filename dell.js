document.querySelector(".ham_logo").addEventListener("click", () => {
  document.querySelector(".ham_brgr_off").classList.toggle("ham_brgr_on");
  document.querySelector("body").classList.toggle("body_height_100");
  document
    .querySelector(".ham_container_off")
    .classList.toggle("ham_container_on");
});

function remove_ham_byonclick_body() {
  document
    .querySelector(".ham_brgr_off ")
    .setAttribute("class", "ham_brgr_off");
  document
    .querySelector(".ham_container_off ")
    .setAttribute("class", "ham_container_off");
  console.log("hello");
  document.querySelector("body").classList.remove("body_height_100");
}
// like any product and its turn into red color  but this is for 1 card only

function heArt(n) {
  document.querySelectorAll(".heart")[n].classList.toggle("heart-red");
}

function count() {
  let counting = document.querySelector(".number_1").innerHTML;

  if (counting < 60) {
    document.querySelector(".number_1").innerHTML = ++counting;
  }
}
var counter = setInterval(count, 30);

function countt() {
  let counting = document.querySelector(".number_2").innerHTML;

  if (counting < 39) {
    document.querySelector(".number_2").innerHTML = ++counting;
  }
}
var counterr = setInterval(countt, 50);

function counttt() {
  let counting = document.querySelector(".number_3").innerHTML;

  if (counting < 64) {
    document.querySelector(".number_3").innerHTML = ++counting;
  }
}
var counterrr = setInterval(counttt, 30);

// modal in dell;
function showmodal() {
  document
    .querySelector(".modal_outer_box")
    .classList.add("modal_outer_box_on");
  document.querySelector("body").classList.add("body_height_100");
}

let close_modal = setTimeout(showmodal, 1500);

function modal_off() {
  document
    .querySelector(".modal_outer_box")
    .classList.remove("modal_outer_box_on");
  document.querySelector("body").classList.remove("body_height_100");
}

// sign in form

document.querySelector(".accordian").addEventListener("click", () => {
  document.querySelector(".accordian").classList.toggle("accordian_on");
  document.querySelector(".plus_icon").classList.toggle("plus_to_cross");
});

document.querySelector(".accordian1").addEventListener("click", () => {
  document.querySelector(".accordian1").classList.toggle("accordian_on");
  document.querySelector(".plus_icon1").classList.toggle("plus_to_cross");
});

document.querySelector(".accordian2").addEventListener("click", () => {
  document.querySelector(".accordian2").classList.toggle("accordian_on");
  document.querySelector(".plus_icon2").classList.toggle("plus_to_cross");
});

4;
document.querySelector(".accordian3").addEventListener("click", () => {
  document.querySelector(".accordian3").classList.toggle("accordian_on");
  document.querySelector(".plus_icon3").classList.toggle("plus_to_cross");
});

document.querySelector(".accordian4").addEventListener("click", () => {
  document.querySelector(".accordian4").classList.toggle("accordian_on");
  document.querySelector(".plus_icon4").classList.toggle("plus_to_cross");
});

// document.querySelector(".signin-buttons-1").addEventListener("click", () => {
//   document.querySelector(".sign_in_form").classList.toggle("sign_in_form_on");
//  window.open()
// });

// hide and show password by eye

function showpass() {
  document.querySelector('[type="password"]').setAttribute("type", "text");
  console.log("Pass visible");
}

function hidepass() {
  document.querySelector('[type="text"]').setAttribute("type", "password");
  console.log("Pass visible");
}

var slides = document.querySelectorAll(".onee");
var Move = 0;

function MoverL() {
  Move++;

  if (Move == slides.length) {
    Move = 0;
  } else if (Move != -1) {
    document.querySelector(".left_bttn").style.backgroundColor = "green";
  }

  sliding();
}

for (let i = 0; i <= slides.length; i++) {
  slides[i].style = `left: ${i * 100}%`;
}
console.log(slides / length);

function MoverR() {
  Move--;
  if (Move == -1) {
    document.querySelector(".left_bttn").style.backgroundColor = "red";

    Move = 0;
  }
  sliding();
}
// function for slider

function sliding() {
  slides.forEach((imge) => {
    imge.style.transform = `translateX(-${Move * 100}%)`;
  });
}
