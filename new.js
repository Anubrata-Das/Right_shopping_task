
window.onclick = function (event) {
  document.getElementById("livesearch2").style.display = "none";
}
$('.owl-carousel').owlCarousel({
  loop:true,
  // margin:100,
  nav:false,
  dots:false,
  autoplay:false,
  autoplayTimeout:1000,
  // stagePadding:50,
  responsive:{
      0:{
          items:1
      },
      320:{
          items:2
      },

      480:{
          items:3
          // autoplay:true
      },
      600:{
          items:3
          // autoplay:true
      },
      800:{
        items:4,
        // spaceBetween:20
      },
      1400:{
          items:5
      }
  }
})
//Testimonial swiper
var swiper = new Swiper('.slide-content', {
  // speed: 2000,
  slidesPerView: 4,   
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
      slidesPerView:2,
    },
    520:{
      slidesPerView:3,
    },
    950:{
      slidesPerView:4,
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


// for flowers button 
const toggleButton = document.getElementById("dropdown2");
const hiddenDiv = document.getElementById("Myid10");

toggleButton.addEventListener("click", () => {
  // toggleButton.style.backgroundColor="red";
  if (hiddenDiv.style.display === "none") {
      hiddenDiv.style.display = "block";
  } else {
      hiddenDiv.style.display = "none";
  }
});

toggleButton.addEventListener("mouseover", () => {
  // toggleButton.style.backgroundColor="red";
  hiddenDiv.style.display = "block";
  toggleButton.addEventListener("mouseout", () => {
    hiddenDiv.style.display = "none";
  });
});

hiddenDiv.addEventListener("mouseover", () => {
  hiddenDiv.style.display = "block";
});
hiddenDiv.addEventListener("mouseout", () => {
  hiddenDiv.style.display = "none";
});

// Gifts 

const toggleButton1 = document.getElementById("dropdown3");
const hiddenDiv1 = document.getElementById("Myid11");

toggleButton1.addEventListener("mouseover", () => {
  hiddenDiv1.style.display = "block";
  toggleButton1.addEventListener("mouseout", () => {
    hiddenDiv1.style.display = "none";
  });
});

hiddenDiv1.addEventListener("mouseover", () => {
  hiddenDiv1.style.display = "block";
});
hiddenDiv1.addEventListener("mouseout", () => {
  hiddenDiv1.style.display = "none";
});

toggleButton1.addEventListener("click", () => {
    if (hiddenDiv1.style.display === "none") {
        hiddenDiv1.style.display = "block";
    } else {
        hiddenDiv1.style.display = "none";
    }
});

// Occasions 
const toggleButton2 = document.getElementById("dropdown4");
const hiddenDiv2 = document.getElementById("Myid12")

toggleButton2.addEventListener("mouseover", () => {
  hiddenDiv2.style.display = "block";
  toggleButton2.addEventListener("mouseout", () => {
    hiddenDiv2.style.display = "none";
  });
});

hiddenDiv2.addEventListener("mouseover", () => {
  hiddenDiv2.style.display = "block";
});
hiddenDiv2.addEventListener("mouseout", () => {
  hiddenDiv2.style.display = "none";
});

toggleButton2.addEventListener("click", () => {
    if (hiddenDiv2.style.display === "none") {
        hiddenDiv2.style.display = "block";
    } else {
        hiddenDiv2.style.display = "none";
    }
});

// location 
const toggleButton3 = document.getElementById("dropdown5");
const hiddenDiv3 = document.getElementById("Myid13")

toggleButton3.addEventListener("mouseover", () => {
  hiddenDiv3.style.display = "block";
  toggleButton3.addEventListener("mouseout", () => {
    hiddenDiv3.style.display = "none";
  });
});

hiddenDiv3.addEventListener("mouseover", () => {
  hiddenDiv3.style.display = "block";
});
hiddenDiv3.addEventListener("mouseout", () => {
  hiddenDiv3.style.display = "none";
});

toggleButton3.addEventListener("click", () => {
    if (hiddenDiv3.style.display === "none") {
        hiddenDiv3.style.display = "block";
    } else {
        hiddenDiv3.style.display = "none";
    }
});

// Services 
const toggleButton4 = document.getElementById("dropdowntopheader");
const hiddenDiv4 = document.getElementById("dropdown-contenttopheader")



toggleButton4.addEventListener("click", () => {
    if (hiddenDiv4.style.display === "none") {
        hiddenDiv4.style.display = "block";
    } else {
        hiddenDiv4.style.display = "none";
    }
});



const toggleButton5 = document.getElementById("currency");
const hiddenDiv5 = document.getElementById("dropdown-content")

toggleButton5.addEventListener("click", () => {
    if (hiddenDiv5.style.display === "none") {
        hiddenDiv5.style.display = "block";
    } else {
        hiddenDiv5.style.display = "none";
    }
});




































































$(document).ready(function () {
  if ($(window).width() < 600) {

  }
});





$(document).ready(function () {
  if ($(window).width() < 767) {
    $("a.no-link").attr("href", "#")
  }
});

// $(function () {
//   switchable({
//     $element: $('#slides'),
//     interval: 3500,
//     animateSpeed: 2000

//   });
//   switchable({
//     $element: $('#slides1'),
//     interval: 3500,
//     effect: 'fade'
//   });
//   switchable({
//     $element: $('#scroll_wrap'),
//     interval: 3500,
//     showNav: true,
//     effect: 'fade',
//     type: 'imgScroll',
//     imgScroll: {
//       num: 2
//     }
//   });
// });






