window.onload = function () {
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("mid").style.visibility = "hidden";

  //sounds
  music = document.getElementById("music");
  scoreM = document.getElementById("scoreM");
  lose = document.getElementById("lose");
};

function btnStart() {
  document.getElementById("btnStart").style.visibility = "hidden";
  init();
}

//some constants
var music, scoreM, lose;
var count = false;
var num = 0;

function init() {
  //game over
  document.getElementById("mid").style.visibility = "hidden";

  //some canvas work
  var canvas = document.getElementById("canvas");
  var h = (canvas.height = 430);
  var w = (canvas.width = 288);
  var ctx = canvas.getContext("2d");

  //images
  var images = document.getElementsByTagName("img");
  var bg = new Image();
  var fg = new Image();
  var bird = new Image();
  var pN = new Image();
  var pS = new Image();
  //images src
  bg.src = images[0].src;
  bird.src = images[1].src;
  pN.src = images[2].src;
  pS.src = images[3].src;
  fg.src = images[4].src;

  var g = 1.65;
  var run;
  var gap = 100;
  var score = 0,
    level = 0;

  //some components
  var pipe = [];
  pipe[0] = {
    x: w - pN.width - 10,
    y: -35,
  };
  var bX = 25;
  var bY = h / 2;

  //eventListner for clicks

  //touchmove eventListener controls
  function handleTouch(e) {
    e.preventDefault();
    if (count) {
      music.volume = 1;
    } else {
      music.volume = 0;
    }
    g = -g - 2;
  }

  //touchmove eventListener controls
  canvas.addEventListener("touchstart", handleTouch);

  canvas.addEventListener("touchend", handleTouch);

  canvas.addEventListener("mousedown", handleTouch);

  canvas.addEventListener("mouseup", handleTouch);

  //to draw text i.e points
  function drawText(text, x, y) {
    ctx.fillStyle = "#000";
    ctx.font = "27px Aleo";
    ctx.fillText(text, x, y);
  }

  function drawText2(text, x, y) {
    ctx.fillStyle = "#000";
    ctx.font = "50px flappy";
    ctx.fillText(text, x, y);
  }

  //actual draw function
  function draw() {
    ctx.drawImage(bg, 0, -80);
    for (var i = 0; i < pipe.length; i++) {
      ctx.drawImage(pN, pipe[i].x, pipe[i].y);
      ctx.drawImage(pS, pipe[i].x, pN.height + pipe[i].y + gap);

      pipe[i].x -= 1;

      if (pipe[i].x == 150) {
        pipe[pipe.length] = {
          x: w + 5,
          y: -Math.floor(Math.random() * (pN.height - 40)),
        };
      }
      //score system
      if (pipe[i].x + pN.width == bX) {
        score++;
        if (count) {
          scoreM.volume = 1;
          scoreM.play();
        }
      }
      if (pipe[i].x + pN.width == -150) {
        pipe.shift();
      }

      //condition to lose
      if ((bX + 33 > pipe[i].x && bX + 10 < pipe[i].x + pN.width && bY < pN.height + pipe[i].y) || (bX + 33 > pipe[i].x && bX + 10 < pipe[i].x + pN.width && bY > pN.height + pipe[i].y + gap - 27) || bY > h + 13 - fg.height || bY < -5) {
        cancelAnimationFrame(run);
        if (count) {
          music.volume = 0;
          lose.volume = 1;
          lose.play();
        }

        document.getElementById("mid").style.visibility = "visible";
        ctx.drawImage(fg, 0, h - fg.height + 40);
        ctx.drawImage(bird, bX, bY);

        //level and score update
        drawText2("Level : ", 160, h - 20);
        drawText(level + 1, 260, h - 24);

        drawText2("Score : ", 10, h - 22);
        drawText(score, 110, h - 24);

        return 0;
      }
    }
    //gravity to fall
    bY += g;

    //to increase difficulty by decreasing the gap
    level = Math.floor(score / 7);
    if (gap >= 60) {
      gap = 100 - level * 5;
    }

    ctx.drawImage(bird, bX, bY);

    ctx.drawImage(fg, 0, h - fg.height + 40);

    //level and score update
    drawText2("Level : ", 160, h - 20);
    drawText(level + 1, 260, h - 24);

    drawText2("Score : ", 10, h - 22);
    drawText(score, 110, h - 24);

    run = requestAnimationFrame(draw);
  }

  draw();
}

function playAgain() {
  init();
}

function playSound() {
  count = true;
  if (num == 0) {
    num++;
    music.play();
    scoreM.play();
    lose.play();
  }
  scoreM.volume = 0;
  lose.volume = 0;
  music.volume = 0;
  document.getElementById("nosound").style.visibility = "hidden";
  document.getElementById("sound").style.visibility = "visible";
  document.getElementById("info").innerText = "Click to stop music.";
}

function noPlaySound() {
  count = false;
  document.getElementById("sound").style.visibility = "hidden";
  document.getElementById("nosound").style.visibility = "visible";
  document.getElementById("info").innerText = "Click to play music.";
}
