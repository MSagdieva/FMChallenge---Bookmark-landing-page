@@include('burgerShow.js');
const tabs = document.querySelectorAll('.tab-label');
Array.from(tabs).map((tab, i) => {
    tab.addEventListener('click', ()=>{
        const activeTab = document.querySelector('.info-block.active');
        activeTab.classList.remove('active');
        const newActiveTab = document.getElementById(`tab-${i}`);
        newActiveTab.classList.add('active');
    })
});