// Range Slider
$(".js-range-slider").ionRangeSlider({
  skin: "round",
  min: 250,
  max: 10000,
  from: 2000,
  postfix: " $",
  grid: true,
  onStart: function (data) {
    $("#calcResult").text(Math.round(data.from * 0.32 + data.from) + " $");
  },
  onChange: function (data) {
    $("#calcResult").text(Math.round(data.from * 0.32 + data.from) + " $");
  },
});

// STICKY HEADER
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// WINNERS WIDGET
let winnersData = [{
    name: "Gabriel D.",
    photo: "images/users/male/1.jpg",
    profit: "575"
  },
  {
    name: "Maël B.",
    photo: "images/users/male/2.jpg",
    profit: "315"
  },
  {
    name: "Raphaël A.",
    photo: "images/users/male/3.jpg",
    profit: "455"
  },
  {
    name: "Mathilde C.",
    photo: "images/users/female/1.jpg",
    profit: "425",
  },
  {
    name: "Léon F.",
    photo: "images/users/male/4.jpg",
    profit: "520"
  },
  {
    name: "Théo D.",
    photo: "images/users/male/5.jpg",
    profit: "488"
  },
  {
    name: "Margaux C.",
    photo: "images/users/female/2.jpg",
    profit: "1050",
  },
  {
    name: "Mathis P.",
    photo: "images/users/male/6.jpg",
    profit: "346"
  },
  {
    name: "Noé B.",
    photo: "images/users/male/7.jpg",
    profit: "915"
  },
  {
    name: "Théa G.",
    photo: "images/users/female/3.jpg",
    profit: "864"
  },
  {
    name: "Yanis S.",
    photo: "images/users/male/8.jpg",
    profit: "498"
  },
  {
    name: "Clément F.",
    photo: "images/users/male/9.jpg",
    profit: "624"
  },
  {
    name: "Maëlys Z.",
    photo: "images/users/female/4.jpg",
    profit: "759"
  },
  {
    name: "Marceau V.",
    photo: "images/users/male/10.jpg",
    profit: "886"
  },
  {
    name: "Apolline D.",
    photo: "images/users/female/5.jpg",
    profit: "959",
  },
];

let index = 0;
const winnerName = document.querySelector("#winnerName");
const winnerImg = document.querySelector("#winnerImg");
const winnerProfit = document.querySelector("#winnerProfit");

function change() {
  winnerName.innerHTML = winnersData[index].name;
  winnerImg.src = winnersData[index].photo;
  winnerProfit.innerHTML = winnersData[index].profit;
  index > winnersData.length - 2 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(change, 8000);
};

// NAVIGATION
const scrollToElem = (elem) => {
  document
    .querySelector(elem)
    .scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
};

// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll(".animated");

if (animatedItems.length) {
  function fadeInOnScroll() {
    for (i = 0; i < animatedItems.length; i++) {
      let animatedItem = animatedItems[i];
      let animatedItemHeight = animatedItem.offsetHeight;
      let animatedItemOffset = offset(animatedItem).top;
      let animationStart = 2;

      let animatedItemPoint =
        window.innerHeight - animatedItemHeight / animationStart;

      if (animatedItemHeight > window.innerHeight) {
        animatedItemPoint =
          window.innerHeight - window.innerHeight / animationStart;
      }

      if (
        pageYOffset > animatedItemOffset - animatedItemPoint &&
        pageYOffset < animatedItemOffset + animatedItemHeight
      ) {
        animatedItem.classList.add("fade-in");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }
}

window.addEventListener("scroll", fadeInOnScroll);

// Scroll to link
$(document).ready(function () {
  $("[data-scroll]").on("click", function (e) {
    e.preventDefault();

    const $this = $(this),
      blockId = $(this).data("scroll"),
      blockOffset = $(blockId).offset().top - 200;

    $("html, body").animate({
        scrollTop: blockOffset,
      },
      700
    );
  });
});

// Read More btn
$(".read-more-btn").click(() => {
  var elem = $(".read-more-btn-text").text();
  console.log(elem);
  if (elem.trim() === "read more") {
    //Stuff to do when btn is in the read more state
    $(".read-more-btn-text").text("read less");
    $(".about_hideText").slideDown();
    $(".read-more-btn img").addClass("rotate");
  } else {
    //Stuff to do when btn is in the read less state
    $(".read-more-btn-text").text("read more");
    $(".about_hideText").slideUp();
    $(".read-more-btn img").removeClass("rotate");
  }
});