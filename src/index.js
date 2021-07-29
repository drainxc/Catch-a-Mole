const main = document.getElementById('main');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval (function (){
    width = getRandomIntInclusive(0, 2);
    height = getRandomIntInclusive(0, 2);
    main.children[width].children[height].style.backgroundColor = "red";
}, 1000);