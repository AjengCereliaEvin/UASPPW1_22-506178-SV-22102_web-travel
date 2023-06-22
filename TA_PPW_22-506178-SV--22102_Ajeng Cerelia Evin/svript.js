let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
};

window.onscroll= () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
};

var swiper =new swiper(".reviews-slider",{
    loop:true,
    navigation: {
        nextE1:".swiper-button-next",
        prevE1:".swiper-button-prev",
    },
})
var swiper =new swiper(".mySwiper",{
    loop:true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints:{
        640:{
            slidePerViews:1,
            
        },
        768:{
            slidePerViews:2,
        
        },
        1024:{
            slidePerViews:3,
           
        },
    }
    });