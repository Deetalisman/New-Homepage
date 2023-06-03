

let navbar = document.querySelector('.navbar');
let nav = document.querySelector('.nav');
let body = document.querySelector('body');

navbar.addEventListener('click' ,()=>{
    console.log(body);
    nav.classList.toggle('mobile');
})