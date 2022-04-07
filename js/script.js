const BtnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const FadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

BtnHamburger.addEventListener('click' , function() {
    console.log('open hamburger');

    if (header.classList.contains('open')){//close Hamburger
        header.classList.remove('open');
        body.classList.remove('noscroll');
        FadeElems.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
    }
    else{
    header.classList.add('open');
    body.classList.add('noscroll');
    FadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
    }
})
