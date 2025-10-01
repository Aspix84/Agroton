const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', function() {
    const menuList = document.querySelector('.menu__list');
    menuList.classList.toggle('menu__active');
});