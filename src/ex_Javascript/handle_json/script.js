//var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var requestURL = 'data.json'; //with local file
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
};

/*
//When you don't get json object, on need to parse it
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
*/


// Populating Index.html with JSON data
var header = document.querySelector('header');
var section = document.querySelector('section');

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for (i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

function loadJSON(file, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


function load() {
    loadJSON("data.json", function (response) {

        var actual_JSON = JSON.parse(response);
        console.log(actual_JSON.squadName);
        console.log(actual_JSON);
    });

}

//console.log("test");
window.onload = load();


//AJAX Ascynchronous request, can't store the json must use a callback fonction
$.getJSON("data.json", function (data) {
    console.log(data);
});

//AJAX synchronous to get and store json
var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "data.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

//console.log(json);