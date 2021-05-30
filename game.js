let canvas;
let context;
let player1 = {
    x : 0,
    y : 0
}
let start = true;
let inMainMenu = true;

window.addEventListener('mousemove', function(e) {
    console.log('x: ' + e.x + '\ny: ' + e.y);
    player1.x = e.x;
    player1.y = e.y;
});

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    context = canvas.getContext("2d");
    main_menu();
})

function main_menu() {
    context.fillStyle = '#000000';
    context.font = '25pt Times New Roman';
    context.fillText("Pong", window.innerWidth/20, window.innerHeight/20);
    var button = document.createElement("button");
    button.innerHTML = "Play Game";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener("click", () => {
        context.clearRect(0,0,canvas.width,canvas.height);
        body.removeChild(button);
        draw();
    })
}

function draw() {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    print_constant_field();
    ball();
    players();
    tick();
}

function ball() {
    if(start == true) {
        seconds = 5;
        setInterval(() => {
            context.fillText("Game begin in " + seconds + " seconds", 150, 400);
            seconds -= 1;
        }, 5000)
    }
}

function players() {
    context.font = '175pt Times New Roman'
    context.fillText("|", 100, player1.y);
    computer();
}

function computer() {

}


function print_constant_field() {
    context.fillStyle = '#000000';
    context.lineWidth = 30;
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(window.innerWidth,0);
    context.lineTo(window.innerWidth,window.innerHeight);
    context.lineTo(0,window.innerHeight);
    context.lineTo(0,0);
    context.stroke();
}

function tick() {
    window.requestAnimationFrame(draw);
}

