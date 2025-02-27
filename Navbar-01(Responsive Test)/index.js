let burgerMenuShow = document.querySelector('.menu-icon-show');
let burgerMenuHide = document.querySelector('.menu-icon-hide');
let navbar = document.querySelector('.navbar');

// function menu() { 
//     navbar.style.display = 'block';
//     alert('Clicked!');
// }

burgerMenuShow.onclick = function() {
    navbar.style.display = 'flex';
    burgerMenuShow.style.display = 'none';
    burgerMenuHide.style.display = 'block'
}

burgerMenuHide.onclick = function() {
    navbar.style.display = 'none';
    burgerMenuShow.style.display = 'block';
    burgerMenuHide.style.display = 'none'
}