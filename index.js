// document.getElementsByClassName('.back-video').currentTime = .5;

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile__navbar ul');
const menu_item = document.querySelectorAll('.mobile__navbar ul li a');
const hero = document.querySelector('.back-video');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// document.querySelectorAll("")

// document.addEventListener("scroll", ()=> {
//     var scroll_position = window.scrollY;
//     if(scroll_position > 250){
//         hero.style.backgroundColor = '#29323c';
//     }else{
//         hero.style.backgroundColor = "transparent"
//     }
// })

menu_item.forEach(item=> {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});