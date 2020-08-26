//mobile menu

const toggleBtn = document.querySelector(".bars a");
const mobileMenu = document.querySelector(".menu");
const socialMedia = document.querySelector(".social");

toggleBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle("show_menu");
    socialMedia.classList.toggle("show_social");
});


//set date

const date = document.querySelector(".date2");
let currentDate = new Date().getFullYear();
date.innerHTML = currentDate;


//scroll to top

const scrollTop = document.querySelector(".scroll_top");

scrollTop.addEventListener('click', function(){
    window.scrollTo({left: 0, top:0});
});

window.addEventListener('scroll', function(){
    let height = window.pageYOffset;
    if (height > 700) {
        scrollTop.classList.add("show_scroll");
    } else {
        scrollTop.classList.remove("show_scroll");
    }
});


//slider

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const text = document.querySelectorAll(".text_holder");
const blur = document.querySelector(".blur");
const background = document.querySelectorAll(".background_holder");

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function() {
    counter++;
    slider();
});
prevBtn.addEventListener('click', function() {
    counter--;
    slider();
});

function slider(){
    if (counter === slides.length) {
        counter = 0;
    } 
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
};