var value = 1;
var time = 1;

function wait() {
    var timer = document.getElementsByTagName("timer")[0];
    timer.innerHTML = time;
    time++;
    if (time == 15) {
        document.getElementsByTagName("button")[0].style = "display: inline-block;";
    }
}

function loading() {
    var loadingValue = document.getElementsByTagName("n")[0];
    if (value <= 100) {
        loadingValue.innerHTML = value;
        value++;
    } else {
        document.getElementById("loading-screen").style = "display:none;";
        document.getElementById("text").style = "display:inline-block;";
        document.getElementsByTagName("body")[0].style.background = "#ff9999";

        setTimeout(function () {
            document.getElementsByTagName("body")[0].style.background = "#9999ff";
        }, 5000);
    }
}

function run() {
    document.getElementsByTagName("button")[0].style = "display: none;";
    document.getElementById("loading-screen").style = "display:flex;";
    document.getElementById("text").style = "display:none;";
    value = 1;
    time = 1;
}

setInterval(wait, 800);
setInterval(loading, 100);
