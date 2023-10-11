
window.onclick = function (event) {
  document.getElementById("livesearch2").style.display = "none";
}

//Testimonial swiper
var swiper = new Swiper('.slide-content', {
  // speed: 2000,
  slidesPerView: 3,   
  spaceBetween:30,
  // slidesPerGroup:3,   
  loop: true,
  centerSlide: true,
  fade:true,
  grabCursor:true,
  loopFillGroupWithBlank:true,
  pagination:{
    el:".swiper-pagination",
    clickable:true,
    dynamicBullets:true,
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },

  breakpoints:{
    0:{
      slidesPerView:1,
    },
    520:{
      slidesPerView:2,
    },
    950:{
      slidesPerView:3,
    },
  },
});

$(document).ready(function () {

  $('#popdiv-bg2').hide();
  $('#show_div').hide();


});

$("#close-btn2").click(function () {
  $('#popdiv-bg2').hide();
});

$("#searchbtnn").click(function () {
  $('#popdiv-bg2').show();
});

function onSubmitClick1() {
  $('#popdiv-bg2').hide();
  event.stopPropagation();
}

function show_delivery_modal() {
  $('#popdiv-bg2').show();
}



function toggleText14() {
  var x = document.getElementById("Myid14");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleText10() {
  var x = document.getElementById("Myid10");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleText11() {
  var x = document.getElementById("Myid11");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleText12() {
  var x = document.getElementById("Myid12");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleText13() {
  var x = document.getElementById("Myid13");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function () {
  if ($(window).width() < 767) {
    $("a.no-link").attr("href", "#")
  }
});

$(function () {
  switchable({
    $element: $('#slides'),
    interval: 3500,
    animateSpeed: 2000

  });
  switchable({
    $element: $('#slides1'),
    interval: 3500,
    effect: 'fade'
  });
  switchable({
    $element: $('#scroll_wrap'),
    interval: 3500,
    showNav: true,
    effect: 'fade',
    type: 'imgScroll',
    imgScroll: {
      num: 2
    }
  });
});





const pc = [...document.querySelectorAll('.wrapper')];
const nb = [...document.querySelectorAll('.nxt-btn')];
const pb = [...document.querySelectorAll('.pre-btn')];

pc.forEach((item,i)=>{
  let condi = item.getBoundingClientRect();
  let conwi = condi.width;

  nb[i].addEventListener('click',()=>{
    item.scrollLeft += conwi;
  })
  pb[i].addEventListener('click',()=>{
    item.scrollLeft -= conwi;
  })

})

