var progressB = document.getElementById("progressBar");
var p = 1;


function completion() {
    /* Update the progress bar completion */
    document.getElementById("progressBar").value = p; //works fine
    //progressB.value = p; //returns TypeError cannot set property type to 'null' on jsfiddle
    p++;
}

function progress() {
    /* to complete the progression bar, should implement a stop at some point */
    setInterval(completion, 200);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/*

var canvas = document.getElementById('canvas1');
ctx =canvas.getContext('2d');
ctx.font="bold 22px Tahoma";
ctx.textAlign="start";
ctx.fillText("start", 10, 30);
ctx.translate(100, 150);
ctx.fillText("after translate", 0, 0);
ctx.rotate(1);
ctx.fillText("after rotate", 0, 0);
ctx.scale(1.5, 4);
ctx.fillText("after scale", 0,20);

*/
