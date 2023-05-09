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
      delay: 5500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop:true,
})


let newswiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    
    loop:true,
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //     },
    //     640: {
    //         slidesPerView: 2,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     },
    //     1024: {
    //         slidesPerView: 3,
    //     },

    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    
})