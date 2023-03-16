// To make the navbar sticky
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 100);
});

// Linking to the menu-icon & navlist
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// toggling the menu-icons open
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// removing the menu list once the icon has been clicked
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}






