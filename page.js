const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");

menuBtn.addEventListener("click" , (e)=> {
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "uil uil-bars");
});

navLinks.addEventListener("click" , (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "uil uil-bars");
});

const scrollRevealOption={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content .section-description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-content .header-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".special", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
});

ScrollReveal().reveal(".banner-card", {
    ...scrollRevealOption,
    delay: 1100,
    interval: 900,
});

ScrollReveal().reveal(".chef-image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".chef-content .section-header", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
});

ScrollReveal().reveal(".special-container .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".special-container .section-description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".special-card", {
    ...scrollRevealOption,
    delay:1200,
    interval: 900,
});


ScrollReveal().reveal(".list", {
    ...scrollRevealOption,
    origin: "left",
    interval: 900,
    delay: 1000,
});

ScrollReveal().reveal(".client-container .section-header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".client-container .section-description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".client-swiper", {
    ...scrollRevealOption,
    delay: 1500,
});

const swiper= new Swiper(".swiper", {
    loop:true,
    pagination:{
        el: ".swiper-pagination",
    },
});