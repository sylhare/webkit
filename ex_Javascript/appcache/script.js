//https://developer.mozilla.org/fr/docs/Web/HTML/Utiliser_Application_Cache
//https://www.html5rocks.com/en/tutorials/appcache/beginner/

function onUpdateReady() {
    "use strict";
    //console.log('nouvelle version trouvée !');
}

window.applicationCache.addEventListener('updateready', onUpdateReady);

if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
    onUpdateReady();
}

window.applicationCache.update();

var appCache = window.applicationCache;
//console.log(appCache);

