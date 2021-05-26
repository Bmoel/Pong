let canvas;
let context;

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    context = canvas.getContext("2d");
    draw();
})

function draw() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    print_constant_field();
    tick();
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

