const main = document.getElementById('main');
const point = document.getElementById('point');
const playGame = document.getElementById('playGame');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // 두더지 랜덤 위치

function start() { // 게임시작 버튼을 눌렀을 때
    let num = 0;
    setInterval(function () {
        width = getRandomIntInclusive(0, 2);
        height = getRandomIntInclusive(0, 2);
        main.children[width].children[height].style.backgroundImage = "url('../asset/diglett.jpg')"; // 두더지 생성
        let pointIncrease = true;
        main.children[width].children[height].addEventListener('click', function () {
            if (pointIncrease) {
                main.children[width].children[height].style.backgroundImage = "url('../asset/pain_diglett.jpg')"; // 맞은 두더지 생성
                num++;
            }
            point.innerHTML = `${num}`; // 포인트 띄우기
        })
        setTimeout(function () {
            main.children[width].children[height].style.backgroundImage = "url('../asset/white.jpg')"; // 두더지 삭제
            pointIncrease = false
            width = null;
            height = null;
        }, 500);
    }, 1000);
}


playGame.addEventListener('click', start);