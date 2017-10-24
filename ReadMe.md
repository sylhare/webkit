# webkit  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/3add1f97018e4710ab17fa9c94234508)](https://www.codacy.com/app/Sylhare/webkit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Sylhare/webkit&amp;utm_campaign=Badge_Grade)

Some tests on javascript, CSS and HTML. 
Because at least with github it can be stored online and I know where to find them. 
You know that feeling like "I knew how to do it, where did I put that ... oh right I made a junk repo out of it :+1:". Are you really reading this? :eyes: 

## Start learning

Here are some complete website for web based languages and technologies to learn:

- [w3c Schools](https://www.w3schools.com/)
- [SoloLearn](https://www.sololearn.com/)
- [Kirupa's blog](https://www.kirupa.com/learn/index.htm)
- [MDN learning Area](https://developer.mozilla.org/en-US/docs/Learn)
	- mdn/[learning-area](https://github.com/mdn/learning-area) code example on github

## HTML

Here is a list of nice links for HTML:

- [getting started](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- Simple HTML examples : [samdutton/simpl](https://github.com/samdutton/simpl)

## CSS

Here is a list of nice links for CSS:

- [How to align div](http://www.tipue.com/blog/center-a-div/)
- [CSS Grid for better cross plateform design](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout)
- [CSS tricks](https://css-tricks.com/)

### Responsive navbar

It is default with bootstrap, but here are some explainations on how to do it yourself:

- [pure CSS navbar](http://blog.christopherianmurphy.com/2016/01/responsive-pure-css-menu/)
- [CSS and js responsive navbar](https://www.hongkiat.com/blog/responsive-web-nav/)
- [Basic responsive navbar](https://www.w3schools.com/howto/howto_js_topnav.asp)


### Colors

Make it look good:

- [Color scheme](https://coolors.co/browser/latest/7) 
- [Color's info](http://www.color-hex.com/) 
- [Design-seeds](https://www.design-seeds.com/wander/wanderlust/color-range-2/)
- Müller's Colour Brightness Theory for better colors

## BootStrap

[Bootstrap](http://getbootstrap.com/) is a nice CSS / Javascript framework to build good looking sites, app, blogs, etc.

You can follow the [github](https://github.com/twbs/bootstrap) project here

There are also a lot of layout tools that can be used to either customiser or simplify your life with bootstrap such as :

- [layouit](http://www.layoutit.com/build)
- [Bootstrap design tool](http://bootstrapdesigntools.com/)
- [Bootstrap elements](https://bootsnipp.com/)

### Isolated bootstrap

If you don't want to have everything bootstrapped but rather only the grid or else, you can isolate bootstrap into another class say `.bootstrap-iso` with **less**.

- [Isolate bootstrap with less](https://formden.com/blog/isolate-bootstrap)

And you can install [less](http://lesscss.org/#) with the node.js package manager (npm):

    npm install -g less

For [proxy errors](https://forum.freecodecamp.org/t/npm-behind-a-proxy-server/19386) try this:

    npm config set proxy http://<proxy-server-url>:<port>
    npm config set https-proxy http://<proxy-server-url>:<port>

## Javascript  

Here is a list of nice links for Javascript:

 - [Reading files in JavaScript using the File APIs](https://www.html5rocks.com/en/tutorials/file/dndfiles/)


### Events 

- [Creating and triggering events](https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events )
- [Trigger events with parameters](http://stackoverflow.com/questions/18613456/trigger-event-with-parameters) 
- [Dispatch event with data](http://stackoverflow.com/questions/23725816/dispatch-event-with-data)

### Server requests

I have mostly french documentation for that, how to handle server/application or API communication. `Ajax` and `XMLHttpRequest`:

- [FR: Interrogez un serveur web](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/interrogez-un-serveur-web)
- [FR: Utilisez des API web](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/utilisez-des-api-web)
- [FR: Le fonctionnement de $.ajax()](https://openclassrooms.com/courses/un-site-web-dynamique-avec-jquery/le-fonctionnement-de-ajax)
- [Getting started with Ajax](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
- [FR: L'objet XMLHttpRequest](https://openclassrooms.com/courses/ajax-et-l-echange-de-donnees-en-javascript/l-objet-xmlhttprequest-1)

### Managing JSON

You can [load JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) through an XMLHttpRequest.

When you want to transform a JSON object into string or a string into a JSON.
Write that in the console (ctr + shift + i) in the browser

```javascript
var myJSON = { "name": "John", "level": "27" };
myJSON

var myString = JSON.stringify(myJSON);
myString

var myParsed = JSON.parse(myString);
myParsed
```

## JQuery

[Javascript framework](http://jquery.com/)

How to use, download here the source file Or add this line in your html:

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

## Jekyll

Jekyll is a rubby app that creates static web/blog from text. You define a template and then all you do is add content. It is also widely use to create github page.

- [Jekyll official doc](https://jekyllrb.com/docs/)
- [Configuring Jekyll for github page](http://downtothewire.io/2015/08/15/configuring-jekyll-for-user-and-project-github-pages/)
- [Jekyll on github page](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)
- [Create and publish a Jekyll gem](https://webdesign.tutsplus.com/tutorials/how-to-create-and-publish-a-jekyll-theme-gem--cms-27475)
- [Set up a Jekyll theme](https://webdesign.tutsplus.com/tutorials/how-to-set-up-a-jekyll-theme--cms-26332)

### Liquid

Liquid is made by shopify and is used in jekyll:

- [Shopify liquid wiki](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)

Here some information on how to use liquid for page / collection tags and categories:

- [Use tags and categories in Jekyll](https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/)
- [Alphabetize Jekyll page's tags](https://blog.lanyonm.org/articles/2013/11/21/alphabetize-jekyll-)page-tags-pure-liquid.html
- [Collection pages by tags](https://stackoverflow.com/questions/36958975/listing-jekyll-collection-pages-by-tags)
- [List all posts](https://learn.cloudcannon.com/jekyll/list-posts/)

## cURL

cURL (for client URL request library) is a command line interface tool and library to get online content and data using various protocols. The resource must be designated with an URL and supported by cURL.
It can also create or modify the resource (opposed to wget) and thus can be used as a REST client.

### Installation

On the curl [download page](https://curl.haxx.se/download.html) there's a link to the [download wizard](https://curl.haxx.se/dlwiz/). Complete all the steps as follows:

 1. **Select Type of Package**: *curl executable*
 2. **Select Operating System**: *Windows / Win32* or *Win64*
 3. **Select for What Flavour**: *Generic*
 4. **Select which Win32 Version** (only if you selected *Windows / Win32* in step 2): *Unspecified*

If you chose Windows / Win32 you should end up [here](https://curl.haxx.se/dlwiz/?type=bin&os=Win32&flav=-&ver=-), a page that links to [http://www.paehl.com/open_source/?CURL_x.y.z](http://www.paehl.com/open_source/?CURL_7.54.0) (x.y.z will change as newer versions of curl are released). There you can click the first link (_"Download WITHOUT SSL"_) or second link (_"Download WITH SUPPORT SSL"_) for a zip file with curl.exe. 

If you chose Win64 you should end up [on this page](https://curl.haxx.se/dlwiz/?type=bin&os=Win64&flav=-) which should have direct download links from the https://curl.haxx.se website. These too contain only curl.exe.

Finally, you can copy curl.exe into %windir% and it should become available on the command line.

`curl.exe` is in the `bin` folder of the downloaded / extracted curl folder.


## Miscelaneous 

Here is a website that has a lot of free of use images for your website: [pexels](https://www.pexels.com/)

