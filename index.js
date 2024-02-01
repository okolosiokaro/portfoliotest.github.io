const profile = document.querySelector('#profile');


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}

window.onload = function() {
const homePic = document.querySelector('#home-pic');
homePic.classList.add('animate__animated', 'animate__fadeInLeft');

const homeText = document.querySelector('#home-text');
homeText.classList.add('animate__animated', 'animate__fadeInRight');
};


