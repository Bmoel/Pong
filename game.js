let canvas;
let context;
let player1 = {
    x : 0,
    y : 0
}
let ball_rep = {
    x : 0,
    y : 0,
    direction : 0
}
let start = true;
let inMainMenu = true;

window.addEventListener('mousemove', function(e) {
    player1.x = e.x;
    player1.y = e.y;
});

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    context = canvas.getContext("2d");
    draw();
})

function main_menu() {
    context.fillStyle = '#000000';
    context.font = '200pt Times New Roman';
    context.fillText("Pong", window.innerWidth/3.4, window.innerHeight/2);
    var button = document.createElement("button");
    button.innerHTML = "Play Game";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener("click", () => {
        context.clearRect(0,0,canvas.width,canvas.height);
        body.removeChild(button);
        inMainMenu = false;
    })
}

function draw() {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    if (inMainMenu == true) {
        main_menu();
    } else {
        print_constant_field();
        ball();
        players();
        tick();
    }
    
}

function ball() {
    if (start == true) {
        ball_rep.x = window.innerWidth/2;
        ball_rep.y = window.innerHeight/2;
        ball_rep.direction = Math.floor(Math.random() * (2 - 0));
        console.log(ball_rep.direction);
        start = false;
    }
    context.font = '100pt Candara';
    context.fillText(".",ball_rep.x,ball_rep.y);
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

