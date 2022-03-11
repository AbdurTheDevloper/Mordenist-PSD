const navBar = document.querySelector('#navBar ul');
const menuIcon = document.querySelector('.menu-icon');

navBar.style.right = '-999px';
menuIcon.addEventListener('click', ()=>{
    if(navBar.style.right == '-999px'){
      navBar.style.right = '0px'
  }else{
  navBar.style.right = '-999px';
  }
})