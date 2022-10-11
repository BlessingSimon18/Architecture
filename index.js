// document.getElementsByClassName('.back-video').currentTime = .5;

const hamburger = document.querySelector('.header .header_wrapper .mobile__navbar .hamburger');
const mobile_menu = document.querySelector('.header .header_wrapper .mobile__navbar ul');
const menu_item = document.querySelectorAll('.header .header_wrapper .mobile__navbar ul li a');
const hero = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    // menu_item.classList.toggle('active');
});

// document.querySelectorAll("")

document.addEventListener("scroll", ()=> {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        hero.style.backgroundColor = '#29323c';
        // hero.style.border = '#d18f00 4px solid'
    }else{
        hero.style.backgroundColor = "transparent"
    }
});

menu_item.forEach(item=> {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
        // hero.classList.toggle('active');
    });
});

function googleTranslateElementInit()
{
    new google.translate.TranslateElement({
        pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, '.languageMenu_item');
}

// clients

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("client");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 50) {
//             $(".header").addClass("active");
//         } else {
//             $(".header").removeClass("active");
//         }
//     });
// });


