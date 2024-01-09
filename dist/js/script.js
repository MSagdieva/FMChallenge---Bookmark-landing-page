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
;
const tabs = document.querySelectorAll('.tab-label');
tabs[0].classList.add('active');
Array.from(tabs).map((tab, i) => {
    tab.addEventListener('click', ()=>{
        Array.from(tabs).map((tab, i) => {
            tab.classList.remove('active');});
        const activeTab = document.querySelector('.info-block.active');
        activeTab.classList.remove('active');
        const newActiveTab = document.getElementById(`tab-${i}`);
        newActiveTab.classList.add('active');
        tab.classList.add('active');
    })
});
const spoilerInputs = document.querySelectorAll("input[type='checkbox']");
Array.from(spoilerInputs).map((inp, i) => {
    inp.addEventListener('change',()=>{
        (inp.parentElement.parentElement).classList.toggle("active");
    })});

const submitButton = document.getElementById("contact-form__submit");
const emailSubtext = document.getElementById("email__subtext");
const emailFieldCont = document.getElementById("email__field-container");
submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    validate("contact","email");
})

function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
        emailSubtext.classList.add('error');
        emailFieldCont.classList.add('error');
        return false;
    }
    else{
        emailSubtext.classList.remove('error');
        emailFieldCont.classList.remove('error');
    }
 }