const canvas = document.getElementById('game_field');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 20;
const speed = 5;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function updatePosition(event) {
    switch (event.key) {
        case 'ArrowUp':
            y -= speed;
            break;
        case 'ArrowDown':
            y += speed;
            break;
        case 'ArrowLeft':
            x -= speed;
            break;
        case 'ArrowRight':
            x += speed;
            break;
    }
    drawCircle();
}

document.addEventListener('keydown', updatePosition);
drawCircle();