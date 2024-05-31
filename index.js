let opa;
let signl;
let haha = signl;
let test;
let audio1 = new Audio("whistle.mp3");
let audio = new Audio("ballkick.mp3");
let audio2 = new Audio("ballkick1.mp3");
let audio3 = new Audio("against (1).mp3");
let audio4 = new Audio("Goal.mp3");
let audio5 = new Audio("Win.mp3");
let audio6 = new Audio("Lose (1).mp3");
let x;
let y;
let movelimit;
let leftright;
let updown;
let downlimit;
let rightlimit;
let fit;
let flagnewround = false;
let level = "easy";
let round = 1;
let namee;
let flagstart = false;
let flagclear = false;
let playerheight;
let ball;
let balll;
let booot;
let boot = 0;
let player = 0;
let increase;
let time = 250;
let ph = "";
let signs = [-1, 1];
document.getElementById("st").onclick = function() {
    if (screen.width >= 480 && screen.width < 1000) {
        timerleft = 272;
        roundleft = 180;
        roundsize = 70;
        goleft = 222;
        gosize = 100;
    } else {
        timerleft = 362.5;
        roundleft = 242
        roundsize = 100;
        goleft = 283.5;
        gosize = 150;
    }
    document.body.style.cursor = "none";
    namee = document.getElementById("na").value;
    if (namee == "") {
        document.getElementById("na").style.borderColor = "red";
        document.getElementById("ll").style.color = "red";
    } else {
        let hidee = document.getElementsByClassName("hidee");
        for (let i = 0; i < hidee.length; i++) {
            hidee[i].style.opacity = 0;
            hidee[i].style.display = "none";
        }
        setTimeout(() => {
            let audio = new Audio("Timer.mp3");
            audio.play();
            document.getElementById("timer").style.left = timerleft + "px";
            document.getElementById("timer").textContent = "3";
        }, 500)
        setTimeout(() => { document.getElementById("timer").textContent = "2"; }, 1500)
        setTimeout(() => { document.getElementById("timer").textContent = "1"; }, 2500)
        setTimeout(() => {
            document.getElementById("timer").style.transition = "0s";
            document.getElementById("timer").textContent = `Round${round}`;
            document.getElementById("timer").style.fontSize = roundsize + "px";
            document.getElementById("timer").style.left = roundleft + "px"
        }, 3500)
        setTimeout(() => {
            document.getElementById("timer").style.fontSize = gosize + "px";
            document.getElementById("timer").textContent = "Go!";
            document.getElementById("timer").style.left = goleft + "px";
            let audio = new Audio("start.mp3");
            audio.play();
        }, 4500)
        setTimeout(() => {
            document.getElementById("tutorial").style.opacity = "0";
            document.getElementById("timer").textContent = "";
            let hide = document.getElementsByClassName("hide");
            for (let i = 0; i < hide.length; i++) {
                hide[i].style.opacity = 1;
                document.getElementById("result").style.direction = "rtl";
                document.getElementById("result").textContent = `${namee} ${player}-${boot} Computer`;
            }
        }, 5500)
        setTimeout(start, 6500)
    }
    setInterval(() => {
        if (flagnewround) {
            setTimeout(() => {
                document.body.style.cursor = "auto";
                let hide = document.getElementsByClassName("hide");
                for (let i = 0; i < hide.length; i++) {
                    hide[i].style.opacity = 0;
                }
                document.getElementById("st").style.opacity = 1;
                document.getElementById("container").style.opacity = 1;
                document.getElementById("container").style.display = "block";
                document.getElementById("st").style.display = "block";
                if (boot == 5 && level == "easy") {
                    document.getElementById("result").textContent = "wear your glasses"
                } else if (player == 5 && level == "easy") {
                    document.getElementById("result").textContent = "Easy beezy!"
                } else if (boot == 5 && level == "medium") {
                    document.getElementById("result").textContent = "you are very humble!"
                } else if (player == 5 && level == "medium") {
                    document.getElementById("result").textContent = "kind of good"
                } else if (boot == 5 && level == "hard") {
                    document.getElementById("result").textContent = "Lol! is this your last?!"
                } else if (player == 5 && level == "hard") {
                    document.getElementById("result").textContent = "This was great!"
                } else if (boot == 5 && level == "conquer") {
                    document.getElementById("result").textContent = "haha! could you beat me?!"
                } else if (player == 5 && level == "conquer") {
                    document.getElementById("result").textContent = "you are the king of this game!!"
                }
                if (boot == 5)
                    audio6.play();
                else if (player == 5)
                    audio5.play();
                round = 1;
                boot = 0;
                player = 0;
                flagnewround = false;
            }, 1000)
        }
    }, 1)
    setInterval(() => {
        if (flagclear) {
            clear();
            coloring();
            document.getElementById("result").textContent = `${namee} ${player}-${boot} Computer`;
            if (!flagnewround) {
                setTimeout(() => {
                    let hide = document.getElementsByClassName("hide");
                    for (let i = 0; i < hide.length; i++) {
                        hide[i].style.opacity = 0;
                    }
                }, 1000)
                setTimeout(() => {
                    document.getElementById("timer").style.left = timerleft + "px";
                    document.getElementById("timer").textContent = "3";
                    let audio = new Audio("Timer.mp3");
                    audio.play();
                }, 2000)
                setTimeout(() => { document.getElementById("timer").textContent = "2"; }, 3000)
                setTimeout(() => { document.getElementById("timer").textContent = "1"; }, 4000)
                setTimeout(() => {
                    document.getElementById("timer").style.transition = "0s";
                    document.getElementById("timer").textContent = `Round${round}`;
                    document.getElementById("timer").style.fontSize = roundsize + "px";
                    document.getElementById("timer").style.left = roundleft + "px"
                }, 5000)
                setTimeout(() => {
                    document.getElementById("timer").style.fontSize = gosize + "px";
                    document.getElementById("timer").textContent = "Go!";
                    document.getElementById("timer").style.left = goleft + "px";
                    let audio = new Audio("start.mp3");
                    audio.play();
                }, 6000)
                setTimeout(() => {
                    document.getElementById("timer").textContent = "";
                    let hide = document.getElementsByClassName("hide");
                    for (let i = 0; i < hide.length; i++) {
                        hide[i].style.opacity = 1;
                    }
                }, 7000)
                setTimeout(start, 7000)
            }
            flagclear = false;
        }
    }, 1);
    document.body.onmousemove = function(event) {
        x = event.screenX;
        y = event.screenY;
        y = y - fit;
        if (y < 0) {
            y = 0
        } else if (y > movelimit) {
            y = movelimit;
        }
        if (flagstart) {
            document.getElementById("player").style.top = y + "px";
        }
    }
    document.body.ontouchmove = function(event) {
        x = event.touches[0].screenX;
        y = event.touches[0].screenY;
        y = y - fit;
        if (y < 0) {
            y = 0
        } else if (y > movelimit) {
            y = movelimit;
        }
        if (flagstart) {
            document.getElementById("player").style.top = y + "px";
        }
    }

    function clear() {
        clearInterval(ball);
        clearInterval(balll);
        clearInterval(booot);
        clearInterval(colorrr);
        document.getElementById("ball").style.opacity = "1";
        clearInterval(hidden);
        clearInterval(incre);
        if (opa != undefined)
            clearTimeout(opa);
        clearInterval(tcolor);
    }

    function coloring() {
        document.body.style.backgroundColor = "white";
        document.getElementById("ball").style.backgroundColor = "black";
        document.getElementById("player").style.backgroundColor = "black";
        document.getElementById("boot").style.backgroundColor = "black";
        document.getElementById("line").style.backgroundColor = "black";
        document.getElementById("game").style.borderColor = "black";
        document.getElementById("center").style.borderColor = "black";
        document.getElementById("right").style.borderColor = "black";
        document.getElementById("left").style.borderColor = "black";
        document.getElementById("corner1").style.borderColor = "black";
        document.getElementById("corner2").style.borderColor = "black";
        document.getElementById("corner3").style.borderColor = "black";
        document.getElementById("corner4").style.borderColor = "black";
        document.getElementById("result").style.color = "black";
    }

    function start() {
        increase = 2;
        document.getElementById("result").textContent = `${namee} ${player}-${boot} Computer`;
        document.getElementById("result").style.opacity = 1;
        flagclear = false;
        let bootmove = document.getElementById("boot").style.top;
        incre = setInterval(() => {
            increase += 1;
        }, 20000);
        flagstart = true;
        if (screen.width >= 480 && screen.width < 1000) {
            updown = 115;
            downlimit = 230;
            leftright = 290;
            rightlimit = 561;
            playerheight = 90;
            fit = 165;
            movelimit = 170;
        } else {
            updown = 215;
            downlimit = 430;
            leftright = 390;
            rightlimit = 760;
            playerheight = 105;
            fit = 215;
            movelimit = 350;
        }
        let signu = signs[Math.floor(Math.random() * 2)];
        balll = setInterval(function() {
            if (updown <= 0 || updown >= downlimit) {
                signu *= -1;
            }
            updown += increase * signu;
            document.getElementById("ball").style.top = updown + "px";
        }, 10)
        signl = signs[Math.floor(Math.random() * 2)];
        ball = setInterval(function() {
            test = leftright;
            if (test < 19) {
                test = 19;
            } else if (test > rightlimit) {
                test = rightlimit;
            }
            if ((test == 19 && updown >= y - 5 && updown <= y + playerheight && signl == -1) || (test == rightlimit && updown >= bootmove - 5 && updown <= bootmove + playerheight && signl == 1)) {
                signl *= -1;
                if (signl == -1) {
                    leftright--;
                    audio2.play();
                } else {
                    leftright++;
                    audio.play();
                }
            } else if (leftright <= 0) {
                flagclear = true;
                boot++;
                round++;
                audio1.play();
                audio3.play();
            } else if (leftright >= rightlimit + 20) {
                flagclear = true;
                player++;
                round++;
                audio1.play();
                audio4.play();
            }
            leftright += increase * signl;
            document.getElementById("ball").style.left = leftright + "px";
            if (player == 5 || boot == 5) {
                flagnewround = true;
            }
        }, 10)
        booot = setInterval(function() {
            bootmove = updown;
            bootmove -= 50;
            if (bootmove < 0) {
                bootmove = 0;
            } else if (bootmove > movelimit) {
                bootmove = movelimit;
            }
            document.getElementById("boot").style.top = bootmove + "px";
        }, retime());
        hidden = setInterval(() => {
            setTimeout(() => {
                document.getElementById("ball").style.opacity = 0;
            }, 1000)
            setTimeout(() => {
                document.getElementById("ball").style.opacity = 1;
            }, 1250)
            setTimeout(() => {
                document.getElementById("ball").style.opacity = 0;
            }, 1500)
            setTimeout(() => {
                let pa = new Audio("disappear.mp3");
                pa.play();
            }, 1800);
            setTimeout(() => {
                document.getElementById("ball").style.opacity = 1;
            }, 1750)
            setTimeout(() => {
                document.getElementById("ball").style.opacity = 0;
            }, 2000)
            setTimeout(() => {
                let pa = new Audio("appear.mp3");
                pa.play();
            }, 2500);
            opa = setTimeout(() => {
                document.getElementById("ball").style.opacity = 1;
            }, 3500)
        }, 20000)
        tcolor = setInterval(() => {
            p = new Audio("Black (1).mp3")
            p.play();
        }, 44500)
        colorrr = setInterval(() => {
            document.body.style.backgroundColor = "black";
            document.getElementById("ball").style.backgroundColor = "white";
            document.getElementById("player").style.backgroundColor = "white";
            document.getElementById("boot").style.backgroundColor = "white";
            document.getElementById("line").style.backgroundColor = "white";
            document.getElementById("game").style.borderColor = "white";
            document.getElementById("center").style.borderColor = "white";
            document.getElementById("right").style.borderColor = "white";
            document.getElementById("left").style.borderColor = "white";
            document.getElementById("corner1").style.borderColor = "white";
            document.getElementById("corner2").style.borderColor = "white";
            document.getElementById("corner3").style.borderColor = "white";
            document.getElementById("corner4").style.borderColor = "white";
            document.getElementById("result").style.color = "white";
        }, 45000)
        color = setInterval(() => {
            coloring();
        }, 65000)
    }
}

function retime() {
    return time;
}

document.getElementById("e").onclick = function() {
    document.getElementById("e").style.opacity = 1;
    document.getElementById("m").style.opacity = 0;
    document.getElementById("c").style.opacity = 0;
    document.getElementById("h").style.opacity = 0;
    time = 250;
    level = "easy";
}
document.getElementById("m").onclick = function() {
    document.getElementById("m").style.opacity = 1;
    document.getElementById("e").style.opacity = 0;
    document.getElementById("c").style.opacity = 0;
    document.getElementById("h").style.opacity = 0;
    time = 100;
    level = "medium";
}
document.getElementById("h").onclick = function() {
    document.getElementById("h").style.opacity = 1;
    document.getElementById("e").style.opacity = 0;
    document.getElementById("c").style.opacity = 0;
    document.getElementById("m").style.opacity = 0;
    time = 50;
    level = "hard";
}
document.getElementById("c").onclick = function() {
    document.getElementById("c").style.opacity = 1;
    document.getElementById("m").style.opacity = 0;
    document.getElementById("h").style.opacity = 0;
    document.getElementById("e").style.opacity = 0;
    time = 1;
    level = "conquer";
}

document.getElementById("e").onmouseover = function() {
    document.getElementById("es").style.textShadow = " 1px 6px 11px black";
}
document.getElementById("e").onmouseleave = function() {
    document.getElementById("es").style.textShadow = " 0px 0px 0px black";
}
document.getElementById("m").onmouseover = function() {
    document.getElementById("mm").style.textShadow = " 1px 6px 11px black";
}
document.getElementById("m").onmouseleave = function() {
    document.getElementById("mm").style.textShadow = " 0px 0px 0px black";
}
document.getElementById("h").onmouseover = function() {
    document.getElementById("hr").style.textShadow = " 1px 6px 11px black";
}
document.getElementById("h").onmouseleave = function() {
    document.getElementById("hr").style.textShadow = " 0px 0px 0px black";
}
document.getElementById("c").onmouseover = function() {
    document.getElementById("q").style.textShadow = " 1px 6px 11px black";
}
document.getElementById("c").onmouseleave = function() {
    document.getElementById("q").style.textShadow = " 0px 0px 0px black";
}
