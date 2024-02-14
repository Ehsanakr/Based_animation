<script>
$.scrollify({
  section: "section",
  scrollSpeed: 1100,
  scrollbars: true,
  easing: "easeOutSine",
  touchScroll:true,
});
</script>

<script>
const listItem0 = document.getElementById("listItem0");
const listItem1 = document.getElementById("listItem1");
const listItem2 = document.getElementById("listItem2");
const listItem3 = document.getElementById("listItem3");
const listItem4 = document.getElementById("listItem4");
const listItem5 = document.getElementById("listItem5");
const listItem6 = document.getElementById("listItem6");
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
const homeBtn = document.getElementById("homeBtn");
const howItWorksBtn = document.getElementById("howItWorksBtn");
const leanMoreBtn = document.getElementById("leanMoreBtn");
const scrollDownElement = document.getElementById("scrollDown-wrapper");
const playButton =document.getElementById('myElement');



$(document).ready(function () {
	playButton.classList.add('active');
  sectionOneWrap.style.position = 'fixed';
  sectionTwoWrap.style.position = 'fixed';
  sectionThreeWrap.style.position = 'fixed';
  sectionFourWrap.style.position = 'fixed';
  sectionFiveWrap.style.position = 'fixed';
});





//---scrollbar style---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var dh = $(document).height();
  var wh = $(window).height();
  var scrollPercent = (scroll / (dh - wh)) * wh;
  $("#progressbar").css("height", scrollPercent + "px");
});



$(document).ready(function() {
      $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      1500
    );

  const sectionOffsets = {};
  
  // Store offsets of all sections with id starting with "section"
  $("[id^='section']").each(function() {
    sectionOffsets[$(this).attr("id")] = $(this).offset().top;
  });
  
  // Snapping to sections on button click
  $("#homeBtn").on("click", function() {
    scrollToSection("home");
  });

  $("#howItWorksBtn").on("click", function() {
    scrollToSection("howItWorks1");
  });

  $("#leanMoreBtn").on("click", function() {
    scrollToSection("reachus");
  });

  $("#scrollDown-wrapper").on("click", function() {
    const currentScroll = $(window).scrollTop();
    let targetSection = "";
    
    // Find the next section to scroll to based on current scroll position
    for (const section in sectionOffsets) {
      if (currentScroll < sectionOffsets[section] - 50) {
        targetSection = section;
        break;
      }
    }
    
    // If no section found, scroll back to the first section
    if (!targetSection) {
      targetSection = Object.keys(sectionOffsets)[0];
    }
    
    scrollToSection(targetSection);
  });

  // Function to smoothly scroll to a section
  function scrollToSection(sectionId) {
    $("html, body").animate({
      scrollTop: $("#" + sectionId).offset().top
    }, 1000);
  }
  
});

$(document).ready(function () {

  $("#homeBtn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      1500
    );
  });
  $("#howItWorksBtn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#howItWorks1").offset().top,
      },
      1500
    );
  });

  $("#leanMoreBtn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#reachus").offset().top,
      },
      1500
    );
  });
 
 
 
 
 
  $("#scrollDown-wrapper").on("click", function () {
  	if (window.scrollY < sectionTwo-50 ) {
    $("html, body").animate(
      {
        scrollTop: $("#howItWorks1").offset().top,
      },
      1000
    );
		} else if (window.scrollY < sectionThree-50 ) {
		$("html, body").animate(
      {
        scrollTop: $("#howItWorks2").offset().top,
      },
      1000
    );
    } else if (window.scrollY < sectionFour-50 ) {
    $("html, body").animate(
      {
        scrollTop: $("#howItWorks3").offset().top,
      },
      1000
    );
		} else if (window.scrollY < sectionFive-50 ) {
    $("html, body").animate(
      {
        scrollTop: $("#reachus").offset().top,
      },
      1000
    );
		} else if (window.scrollY >= sectionFive-50 ) {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      1000
    );
		}
    
	});

});

</script>