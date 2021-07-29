const main = document.getElementById('main');
const point = document.getElementById('point');
const playGame = document.getElementById('playGame');

let num = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function start() {
    setInterval(function () {
        width = getRandomIntInclusive(0, 2);
        height = getRandomIntInclusive(0, 2);
        main.children[width].children[height].style.backgroundImage = "url('../asset/diglett.jpg')";
        let pointIncrease = true;
        main.children[width].children[height].addEventListener('click', function () {
            if (pointIncrease) {
                main.children[width].children[height].style.backgroundImage = "url('../asset/pain_diglett.jpg')";
                num++;
            }
            point.innerHTML = `${num}`;
        })
        setTimeout(function () {
            main.children[width].children[height].style.backgroundImage = "url('../asset/white.jpg')";
            pointIncrease = false
            width = null;
            height = null;
        }, 500);
    }, 1000);
}


playGame.addEventListener('click', start);