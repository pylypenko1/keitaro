// 01/01/2022
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
const currentDate = document.querySelectorAll(".current-date");
currentDate.forEach((el) => {
  el.innerText = dd + "/" + mm + "/" + yyyy;
});

// NUMBERS
const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
let peopleOnline = randomInt(56, 99);
document.querySelectorAll(".people-online-number").forEach((el) => {
  el.innerText = peopleOnline;
});

// REVEALING ON SCROLL
const the_animation = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      // else {
      //     entry.target.classList.remove('active')
      // }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// YEAR
document.querySelectorAll(".year").forEach((el) => {
  el.innerText = new Date().getFullYear();
});

// NAVIGATION
const scrollToElem = (elem) => {
  document.querySelector(elem).scrollIntoView({ behavior: "smooth" });
};

// MODAL
const licenseModalCall = document.querySelectorAll(".modal-call");
const licenseModalClose = document.querySelector(".close-icon");
const licenseModal = document.querySelector(".form-modal");
const modalContent = document.querySelector(".modal-content");

function openModal() {
  licenseModal.classList.add("active");
}

function closeModal() {
  if (licenseModal.classList.contains("active")) {
    licenseModal.classList.remove("active");
  }
}

licenseModalCall.forEach((el) => el.addEventListener("click", openModal));

licenseModalClose.addEventListener("click", closeModal);

licenseModal.addEventListener("click", closeModal);

modalContent.addEventListener("click", (e) => e.stopPropagation());
