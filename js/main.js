let btnArriba = document.querySelector('.btnUp');


btnArriba.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


window.addEventListener('scroll', function(e) {
    e.preventDefault();
    let distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (distanciaY > 100) {
        setTimeout(() => btnArriba.style.display = 'flex', 500);
        btnArriba.style.animation = 'btnArribaIn .5s forwards';
    } else {
        setTimeout(() => btnArriba.style.display = 'none', 500);
        btnArriba.style.animation = 'btnArribaOut .5s forwards';
    }
});