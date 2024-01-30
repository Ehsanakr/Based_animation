

const listItem0 = document.getElementById("listItem0");
const listItem1 = document.getElementById("listItem1");
const listItem2 = document.getElementById("listItem2");
const listItem3 = document.getElementById("listItem3");
const listItem4 = document.getElementById("listItem4");
const listItem5 = document.getElementById("listItem5");
const listItem6 = document.getElementById("listItem6");

listItem0.addEventListener("click", function () {
  counter=0.0;
  startCounter(400); // Set the initial target value
});
listItem1.addEventListener("click", function () {
  startCounter(100, 9); // Set the initial target value and speed
});
listItem2.addEventListener("click", function () {
  startCounter(150, 9); // Set the initial target value and speed
});
listItem3.addEventListener("click", function () {
  startCounter(200, 9); // Set the initial target value and speed
});
listItem4.addEventListener("click", function () {
  startCounter(250, 9); // Set the initial target value and speed
});
listItem5.addEventListener("click", function () {
  startCounter(300, 9); // Set the initial target value and speed
});
listItem6.addEventListener("click", function () {
  startCounter(350, 9); // Set the initial target value and speed
});

// Update colors based on the counter value
function updateColors() {
  if (counter > 50 && counter <= 100) {
    listItem1.classList.add("red");
  } else {
    listItem1.classList.remove("red");
  }

  if (counter > 100 && counter <= 150) {
    listItem2.classList.add("red");
  } else {
    listItem2.classList.remove("red");
  }

  if (counter > 150 && counter <= 200) {
    listItem3.classList.add("red");
  } else {
    listItem3.classList.remove("red");
  }
  if (counter > 200 && counter <= 250) {
    listItem4.classList.add("red");
  } else {
    listItem4.classList.remove("red");
  }

  if (counter > 250 && counter <= 300) {
    listItem5.classList.add("red");
  } else {
    listItem5.classList.remove("red");
  }
  if (counter > 300 && counter <= 350) {
    listItem6.classList.add("red");
  } else {
    listItem6.classList.remove("red");
  }
  if (counter >= 399 ) {
    counter=0; // Set the initial target value
  }

}

//---SCROLLIFY---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// Initialize Scrollify with mandatory snap scrolling
$.scrollify({
  section: "section",
  scrollSpeed: 500,
  scrollbars: false,
  setHeights: false,
  snap: true,
  scrollSnapOffset: 0,
  easing: "easeOutSine",
});

// Dark/Light mode function
const toggleSwitch = document.getElementById("toggleSwitch");
const htmlElement = document.querySelector("html");
toggleSwitch.addEventListener("change", function () {
  htmlElement.style.filter = toggleSwitch.checked
    ? "invert(0%) hue-rotate(0deg)"
    : "invert(100%) hue-rotate(180deg)";
});
//---LOAD FUNCTIONS--
$(document).ready(function () {
  $.scrollify.move("#1");
  $("#reachus").css("pointer-events", "none");
  $("#progressbar").css("height", "0");
});



//---MY MAIN---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const sectionOne = document.getElementById("home").offsetTop;
const sectionTwo = document.getElementById("howItWorks1").offsetTop;
const sectionThree = document.getElementById("howItWorks2").offsetTop;
const sectionFour = document.getElementById("howItWorks3").offsetTop;
const sectionFive = document.getElementById("reachus").offsetTop;
const sectionOneWrap = document.getElementById("sectionOneContent");
const sectionTwoWrap = document.getElementById("sectionTwoContent");
const sectionThreeWrap = document.getElementById("sectionThreeContent");
const sectionFourWrap = document.getElementById("sectionFourContent");
const sectionFiveWrap = document.getElementById("sectionFiveContent");

const darkLightBtn = document.getElementById("darkLightBtn");
const homeBtn = document.getElementById("homeBtn");
const howItWorksBtn = document.getElementById("howItWorksBtn");
const leanMoreBtn = document.getElementById("leanMoreBtn");
homeBtn.addEventListener("click", function () {
  $.scrollify.move("#1");
});
leanMoreBtn.addEventListener("click", function () {
  $.scrollify.move("#5");
});
howItWorksBtn.addEventListener("click", function () {
  $.scrollify.move("#2");
});

const burgerHomeBtn = document.getElementById("burgerHomeBtn");
const burgerHowItWorksBtn = document.getElementById("burgerHowItWorksBtn");
const burgerLearnMore = document.getElementById("burgerLearnMore");
burgerHomeBtn.addEventListener("click", function () {
  $.scrollify.move("#1");
});
burgerHowItWorksBtn.addEventListener("click", function () {
  $.scrollify.move("#2");
});
burgerLearnMore.addEventListener("click", function () {
  $.scrollify.move("#5");
});

//---SCROLLFUNCTIONS---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$(window).scroll(function () {
  //ONE  - section functions based on current section
  if (window.scrollY == sectionOne) {
    sectionOneWrap.style.opacity = 1;
    burgerHomeBtn.style.color = "#ff6464";
    howItWorksBtn.classList.remove("red");
    
    darkLightBtn.style.opacity = 1;
    $("#darkLightBtn").css("pointer-events", "auto");
  } else {
    sectionOneWrap.style.opacity = 0;
    burgerHomeBtn.style.color = "#fff";
    burgerHowItWorksBtn.style.color = "#fff";
    darkLightBtn.style.opacity = 0;
    $("#darkLightBtn").css("pointer-events", "none");
  }

  //TWO  - section functions based on current section
  if (window.scrollY == sectionTwo) {
    sectionTwoWrap.style.opacity = 1;
    howItWorksBtn.classList.add("red");
    burgerHowItWorksBtn.style.color = "#ff6464";
    $("#howItWorks1").css("pointer-events", "auto");
  } else {
    sectionTwoWrap.style.opacity = 0;
    $("#howItWorks1").css("pointer-events", "none");
  }
  //THREE  - section functions based on current section
  if (window.scrollY == sectionThree) {
    sectionThreeWrap.style.opacity = 1;
    $("#howItWorks2").css("pointer-events", "auto");
    
    howItWorksBtn.classList.add("red");
    burgerHowItWorksBtn.style.color = "#ff6464";
  } else {
    sectionThreeWrap.style.opacity = 0;
    $("#howItWorks2").css("pointer-events", "none");
  }
  //FOUR  - section functions based on current section
  if (window.scrollY == sectionFour) {
    sectionFourWrap.style.opacity = 1;
    $("#howItWorks3").css("pointer-events", "auto");

    howItWorksBtn.classList.add("red");
    burgerHowItWorksBtn.style.color = "#ff6464";
  } else {
    sectionFourWrap.style.opacity = 0;
    $("#howItWorks3").css("pointer-events", "none");

  }
  //FIVE  - section functions based on current section
  if (window.scrollY == sectionFive) {
    sectionFiveWrap.style.opacity = 1;
    $("#reachus").css("pointer-events", "auto");
    howItWorksBtn.classList.remove("red");
    burgerHowItWorksBtn.style.color = "#fff";
    leanMoreBtn.classList.add("red");

    burgerLearnMore.style.color = "#ff6464";
  } else {
    sectionFiveWrap.style.opacity = 0;
    $("#reachus").css("pointer-events", "none");
    leanMoreBtn.classList.remove("red");
    burgerLearnMore.style.color = "#fff";
  }

  //scrollbar style
  var scroll = $(window).scrollTop();
  var dh = $(document).height();
  var wh = $(window).height();
  var scrollPercent = (scroll / (dh - wh)) * wh;
  $("#progressbar").css("height", scrollPercent + "px");
});

