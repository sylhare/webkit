if (typeof (Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.

} else {
    // Sorry! No Web Storage support..
    alert("The app won’t work. Your browser does not support HTML5, please try with another one");
}



function setArrayLocal(name, array) {
    /* Transform the array into text to save it in localStorage */
    var text = array.toString();
    localStorage.setItem(name, text);
}

function getArrayLocal(name) {
    /* Take an a string in local storage and return the array parsed from it */
    var text = localStorage.getItem(name);
    return text.split(",");
}


// Enregistre des données dans l'espace de stockage de la session courante
sessionStorage.username = "John";

// Accède à une donnée stockée
alert( "username = " + sessionStorage.username );