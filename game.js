let canvas;
let context;
let player1 = {
    x : 0,
    y : 0,
    upper_bound : 0,
    lower_bound : 0
}
let computer = {
    x : 0,
    y : 0,
    upper_bound : 0,
    lower_bound : 0
}
let ball_rep = {
    x : 0,
    y : 0,
    directionX : 0, //1 = right, 0 = left
    directionY : 0  //1 = up, 0 = down
}
let score = {
    player1 : 0,
    computer : 0
}
let start = true;
let inMainMenu = true;

window.addEventListener('mousemove', function(e) {
    player1.x = Math.floor(e.x);
    player1.y = Math.floor(e.y);
    player1.upper_bound = Math.floor(e.y - window.innerHeight/9);
    player1.lower_bound = Math.floor(e.y + window.innerHeight/9);
});

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#myCanvas");
    context = canvas.getContext("2d");
    draw();
})

function draw() {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    if (inMainMenu == true) {
        main_menu();
    } 
    else
    {
        print_constant_field();
        ball();
        players();
        tick();
    }
    
}

function main_menu() {
    context.fillStyle = '#000000';
    context.font = '200pt Times New Roman';
    context.fillText("Pong", window.innerWidth/3.25, window.innerHeight/2.5);
    var button = document.createElement("button");
    button.innerHTML = "Play Game";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener("click", () => {
        context.clearRect(0,0,canvas.width,canvas.height);
        body.removeChild(button);
        inMainMenu = false;
        draw();
    })
}

function ball() {
    if (start == true) {
        ball_rep.x = window.innerWidth/2;
        ball_rep.y = window.innerHeight/2;
        ball_rep.directionX = Math.floor(Math.random() * (2 - 0));
        ball_rep.directionY = Math.floor(Math.random() * (2 - 0));
        start = false;
    }
    //Determine X direction
    if (ball_rep.directionX == 1) {
        ball_rep.x += 5;
    }
    else if (ball_rep.directionX == 0) {
        ball_rep.x -= 5;
    }
    //Determine Y direction
    if (ball_rep.directionY == 1) {
        ball_rep.y -= 5;
    }
    else if (ball_rep.directionY == 0) {
        ball_rep.y += 5;
    }
    //Guards for walls
    if (ball_rep.x < 0) {
        ball_rep.directionX = 1;
    }
    else if (ball_rep.x > window.innerWidth) {
        ball_rep.directionX = 0;
    }
    else if (ball_rep.y < 0) {
        ball_rep.directionY = 0;
    }
    else if (ball_rep.y > window.innerHeight) {
        ball_rep.directionY = 1;
    }
    //If ball hits player 1 
    if (ball_rep.x == 100 && ball_rep.y >= player1.upper_bound && ball_rep.y <= player1.lower_bound) {
        ball_rep.directionX = 1;
    }
    //If ball hits computer
    if (ball_rep.x == computer.x && ball_rep.y >= computer.upper_bound && ball_rep.y <= computer.lower_bound) {
        ball_rep.directionX = 0;
    }
    //Updates Score
    if (ball_rep.x == 0 && ball_rep.directionX == 0) {
        score.computer += 1;
    }
    else if (ball_rep.x == window.innerWidth && ball_rep.directionX == 0) {
        score.player1 += 1;
    }
    //Prints ball
    context.font = '75pt Candara';
    context.fillText(".",ball_rep.x,ball_rep.y);
}

function players() {
    num = Math.floor(window.innerHeight/6);
    context.font = 'bold ' + num + 'px Times New Roman';
    context.fillText("|", 100, player1.y);
    draw_computer();
}

function draw_computer() {
    computer.x = window.innerWidth - 100;
    let variation = Math.floor(Math.random() * (105 - 100) + 100);
    computer.y = ball_rep.y + variation;
    computer.upper_bound = Math.floor(computer.y - window.innerHeight/9);
    computer.lower_bound = Math.floor(computer.y + window.innerHeight/9);
    context.fillText("|", computer.x, computer.y);
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
    context.font = 'bold 50pt Candara'
    context.fillText("Score", window.innerWidth/2.35, window.innerHeight/10);
    context.fillText(score.player1 + " : " + score.computer, window.innerWidth/2.27, window.innerHeight/6);
}

function tick() {
    window.requestAnimationFrame(draw);
}

