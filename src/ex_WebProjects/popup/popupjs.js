function jAlert(text, customokay){
	document.getElementById('jAlert_content').innerHTML = text;
    document.getElementById('jAlert_ok').innerHTML = customokay;
    document.body.style.backgroundColor = "gray";
    document.body.style.cursor="wait";
}



jAlert("Stop! Stop!", "<b>Okay!</b>");

