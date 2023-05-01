let menu=document.querySelector('.menu__list');
let burger = document.getElementsByClassName('menu__burger-icon')[0];
window.addEventListener('click', function(e){
    let target2 = e.target;
    if ((target2 != document.getElementsByClassName('page')[0])&&(target2.closest('div').classList.contains('menu__burger-icon')) || (target2.classList.contains('menu__burger-icon')))
    {
        menu.classList.toggle('active');

    }});
;
const tabs = document.querySelectorAll('.tab-label');
Array.from(tabs).map((tab, i) => {
    tab.addEventListener('click', ()=>{
        const activeTab = document.querySelector('.info-block.active');
        activeTab.classList.remove('active');
        const newActiveTab = document.getElementById(`tab-${i}`);
        newActiveTab.classList.add('active');
    })
});