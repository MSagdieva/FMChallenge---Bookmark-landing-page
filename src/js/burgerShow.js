const menu_list=document.querySelector('.menu__list');
const menu=document.querySelector('.menu');
const burger = document.getElementsByClassName('menu__burger-icon')[0];
window.addEventListener('click', function(e){
    let target2 = e.target;
    if ((target2 != document.getElementsByClassName('page')[0])&&(target2.closest('div').classList.contains('menu__burger-icon')) || (target2.classList.contains('menu__burger-icon')))
    {
        menu.classList.toggle('active');
        menu_list.classList.toggle('active');
    }});
