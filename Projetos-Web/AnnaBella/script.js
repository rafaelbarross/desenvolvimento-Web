window.addEventListener('scroll', function () {
    // código para mostrar ou esconder o botão
    // obtém a posição atual do scroll
    var scrollPos = window.scrollY;

    // verifica se a posição atual do scroll é maior que a metade da altura da página
    if (scrollPos > (document.body.offsetHeight / 3.5)) {
        // mostra o botão
        document.querySelector('.btn-top').style.display = 'block';
    } else {
        // esconde o botão
        document.querySelector('.btn-top').style.display = 'none';
    }
});

document.querySelector('.btn-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});