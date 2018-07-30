// ==UserScript==
// @name     yi-changeHeaderColor
// @description Change of Connections Cloud's color.
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){  

  var elt_nav_bar_include = document.getElementById('nav_bar_include');
//　console.log("elt_nav_bar_include=" + elt_nav_bar_include);

  if (elt_nav_bar_include != null) {
    elt_nav_bar_include.setAttribute("style", "background-color: #000;");      
  }
  else {
//    console.log("document.URL=" + document.URL);
    if (new RegExp("/mycontacts").test(document.URL)) {
      var elt_lotusBanner = document.getElementById('lotusBanner');
      if (elt_lotusBanner != null) {
        var mo = new MutationObserver(records => {
          elt_lotusBanner = document.getElementById('nav_bar_include');
          elt_lotusBanner.setAttribute("style", "background-color: #000;");
          mo.disconnect();
        });
        mo.observe(elt_lotusBanner, {childList: true});
      }
    }
    else {
      var elt_ocsBanner = document.getElementById('ocsBanner');
      if (elt_ocsBanner != null) {
        var mo = new MutationObserver(records => {
          elt_nav_bar_include = document.getElementById('nav_bar_include');
          elt_nav_bar_include.setAttribute("style", "background-color: #000;");
          mo.disconnect();
        });
        mo.observe(elt_ocsBanner, {childList: true});    
      }
    }
  }
});
