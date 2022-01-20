const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const btn = document.querySelector('.navbar_btn');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    btn.classList.toggle('active');
});