let canvas;
let context;
let inMainMenu = true;

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
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    print_constant_field();
    player1();
    computer_player();
    tick();
}

function player1() {

}

function computer_player() {
    
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

