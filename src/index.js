const main = document.getElementById('main');
const point = document.getElementById('point');

let num = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function () {
    width = getRandomIntInclusive(0, 2);
    height = getRandomIntInclusive(0, 2);
    main.children[width].children[height].style.backgroundColor = "red";
    let pointIncrease = true;
    main.children[width].children[height].addEventListener('click', function () {
        if (pointIncrease)
        num++;
        point.innerHTML = `${num}`;
    })
    setTimeout(function () {
        main.children[width].children[height].style.backgroundColor = "white";
        pointIncrease = false
        width = null;
        height = null;
    }, 500);
}, 1000);