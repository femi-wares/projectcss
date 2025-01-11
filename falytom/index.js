//calling the element and assigning a variable to each

const menu = document.getElementById('hamburger_menu');
const nav = document.getElementById('navigation');

//calling the event listener 

menu.addEventListener('click', () =>{
    nav.classList.toggle('nav_show');
})

//writing the intersection observer

function intersectionObserver() {
    const form = document.querySelector('.form');
    const interPosition = form.getBoundingClientRect();
    const screenPosition = window.innerHeight;
    if (interPosition < screenPosition) {
        form.classList.add("form_intersect");
    }
}
window.addEventListener("onload", intersectionObserver);



