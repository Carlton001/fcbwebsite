let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !navlist.contains(event.target)) {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
});