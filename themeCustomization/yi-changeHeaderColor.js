// ==UserScript==
// @name     yi-changeHeaderColor
// @description Change of Connections Cloud's color.
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){  
  console.log("yi-changeHeaderColor: Event is fired. document.URL=" + document.URL);
  if (new RegExp("https://apps.ap.collabserv.com").test(document.URL) || new RegExp("https://apps.na.collabserv.com").test(document.URL) || new RegExp("https://apps.ce.collabserv.com").test(document.URL)) {
    
//  var style_text = "background-color: #000;"
  var style_text = "color: #ff0000 !important; background-color: #000;"

  var elt_nav_bar_include = document.getElementById('nav_bar_include');
　console.log("yi-changeHeaderColor: elt_nav_bar_include=" + elt_nav_bar_include);

  if (elt_nav_bar_include != null) {
    elt_nav_bar_include.setAttribute("style", style_text);      
  }
  else {
    console.log("yi-changeHeaderColor: document.URL=" + document.URL);
    if (new RegExp("/mycontacts").test(document.URL)) {
      console.log("yi-changeHeaderColor: /mycontants is true.");
      var elt_lotusBanner = document.getElementById('lotusBanner');
      if (elt_lotusBanner != null) {
        var mo = new MutationObserver(records => {
          elt_nav_bar_include = document.getElementById('nav_bar_include');
          console.log("yi-changeHeaderColor: MutationObserver event is fired. [if(document.URL=/myconnect)] elt_nav_bar_include=(" + elt_nav_bar_include + ")");
          elt_nav_bar_include.setAttribute("style", style_text);
          mo.disconnect();
        });
        mo.observe(elt_lotusBanner, {childList: true});
      }
    }
    else {
      console.log("yi-changeHeaderColor: /mycontants is false.");
      var elt_ocsBanner = document.getElementById('ocsBanner');
      if (elt_ocsBanner != null) {
        var mo = new MutationObserver(records => {
          elt_nav_bar_include = document.getElementById('nav_bar_include');
          console.log("yi-changeHeaderColor: MutationObserver event is fired. [else] elt_nav_bar_include=(" + elt_nav_bar_include + ")");
          elt_nav_bar_include.setAttribute("style", style_text);
          mo.disconnect();
        });
        mo.observe(elt_ocsBanner, {childList: true});    
      }
    }
  }

  }  
});
