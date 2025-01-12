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


/*  3d animation aspect of the file */

//calling the 3d animation stuff
const formContainer = document.querySelector('.form');
const form = document.querySelector('form');
const container = document.querySelector('.container');

//calling the event listener for the form container

container.addEventListener('mousemove' , (e) =>{
   let xAxis = (window.innerWidth / 2 - e.pageX) /20;
   let yAxis = (window.innerHeight / 2 - e.pageY)/20;
    form.style.transform = `rotateY(${xAxis}deg) rotateY(${yAxis}deg)`;
} );
//animate in
container.addEventListener('mouseenter' , (e) =>{
    form.style.transition='none';
});

//animate out
container.addEventListener('mouseleave' , (e) =>{
    form.style.transition='all 0.6s ease';
    form.style.transform =`rotateY(0deg) rotatex(0deg)`;
});





