## Save Game Data in Browser With HTML5 LocalStorage

**It is a copy-paste form [www.gameplaypassion.com](https://web.archive.org/web/20160501000000*/http://www.gameplaypassion.com:80/blog/how-to-save-game-data-in-browser-html5-localstorage/), because the website is no longer available.**

If you close or refresh a web page, all your javascript variables are lost forever unless you use HTML5 LocalStorage.

In this article, I introduce you to localStorage and how you can use it to save game data in the browser.


### LocalStorage in 2 Seconds

LocalStorage is used through the global variable localStorage. 

Setting a value :

	localStorage["playerLevel"] = "1";

Getting a value :

	var playerLevel = localStorage["playerLevel"];

Its so simple that I felt stupid for not learning it earlier !

localStorage only saves string values, so well have to find a solution to save anything we want in it. In PAIRWISE for example, player highscores are structured as a literal javascript object :

```javascript
var playerProgress = {

	veryeasy: {
		highscore: 0
	},

	easy: {
		highscore: 0
	},

	normal: {
		highscore: 0
	},

	// ...
};
```

While it can be tempting to hard-code a function to convert that monster into a string, I found a better solution

### The Better Solution !

Here it is : use JSON (Javascript object notation) ! Especially Mootools JSON class that provides facilities to convert an object to a JSON string and vice-versa.

Lets include Mootools first :

```html
<head>
	<script src="//ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js"></script>
</head>

```
Setting an object value becomes :

	localStorage["GameProgress"] = JSON.encode(playerProgress);

And getting an object value :

	var playerProgress = JSON.decode(localStorage["GameProgress"]);

No localStorage Support ? Bad Browser !

Older browsers lack localStorage support. Yeah, some people just dont want your games to run in their browser. Too bad for them !

I found a solution to prevent your game from crashing in case its executed in the stone age. To see if LocalStorage is supported, I use this function :

```javascript
function isLocalStorageSupported() 
{
  try 
  {
  	return 'localStorage' in window && window['localStorage'] !== null;
  } 
  catch (e) 
  {
    return false;
  }
}
```

If the function returns false, I create a fake localStorage global variable (empty literal js object) that will be used by the game. No data is saved, but at least the game wont crash on an undefined localStorage exception.

In case localStorage is really critical to your game, just ask the player to go download Chrome before playing.

### Wrapping Up

Heres a demo that :

Performs feature detection to check localStorage support (if the box is green, your browsers support is ok).
Lets you save a couple of values in local storage
Load values from localStorage
Input some values and hit save, then press load to retrieve your data.

To see the complete source code, visit the demos page and hit view source (use CTRL+U in Chrome).

Now you have no excuse not to make games that save game data in the browser !

For more info on localStorage : 
[http://diveintohtml5.info/storage.html](http://diveintohtml5.info/storage.html)