// get the button for hamburger menu
// add an eventlistners to it
// when you click it will toggle a class on the ul


const hamburger = document.querySelector('.hamburgerMenu');

hamburger.addEventListener('click', function(e){
    e.preventDefault();

    const ulElement = document.querySelector('nav ul')
    ulElement.classList.toggle('hideMe');
    ulElement.classList.toggle('showMe');
})



