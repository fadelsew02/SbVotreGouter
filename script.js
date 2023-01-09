// let burger = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// burger.addEventListener("click", () => {
//     navbar.classList.toggle("active");
// });

// window.onscroll = () => {
//     navbar.classList.remove("active");
// };


const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('navbar-active');
        // burger.classList.toggle('move');
    });
}

navSlide();