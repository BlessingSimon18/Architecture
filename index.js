// document.getElementsByClassName('.back-video').currentTime = .5;

const hamburger = document.querySelector('.header .header_wrapper .mobile__navbar .hamburger');
const mobile_menu = document.querySelector('.header .header_wrapper .mobile__navbar ul');
const menu_item = document.querySelectorAll('.header .header_wrapper .mobile__navbar ul li a');
const hero = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// document.querySelectorAll("")

document.addEventListener("scroll", ()=> {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        hero.style.backgroundColor = '#29323c';
    }else{
        hero.style.backgroundColor = "transparent"
    }
});

menu_item.forEach(item=> {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 50) {
//             $(".header").addClass("active");
//         } else {
//             $(".header").removeClass("active");
//         }
//     });
// });

