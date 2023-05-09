let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("menubar");
    navbar.classList.toggle("active");
    
}

window.onscroll = () => {
    menu.classList.remove("menubar");
    navbar.classList.remove("active");
    
}
document.querySelector("#search").onclick = () =>{
    document.querySelector("#search-form").classList.toggle("active");
}

document.querySelector("#close").onclick = () =>{
    document.querySelector("#search-form").classList.remove("active");
}

let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop:true,
})