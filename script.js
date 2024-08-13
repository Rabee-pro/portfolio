const menu = document.querySelector('.fa-bars');
const menulist = document.querySelector('.nav ul');
menu.addEventListener('click',()=>{
    menulist.classList.toggle('showmenu');
})