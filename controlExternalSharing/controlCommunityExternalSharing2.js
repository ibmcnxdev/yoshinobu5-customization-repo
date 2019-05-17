// ==UserScript==
// @name controlCommunityExternalSharing2.js
// @description Control external sharing for Customer.
// @version  1
// @grant    none
// ==/UserScript==

//window.addEventListener('load', function(){
document.addEventListener('DOMContentLoaded', function(){
  console.log("tdk-getExternalSharingDisabledByDefault: Event is fired. (document.URL=" + document.URL + ")");

  if (new RegExp("https://apps.ap.collabserv.com/communities/service/html/communitycreate").test(document.URL) ||
      new RegExp("https://apps.ce.collabserv.com/communities/service/html/communitycreate").test(document.URL) ||
      new RegExp("https://apps.na.collabserv.com/communities/service/html/communitycreate").test(document.URL)) {

    var elt_allowExternal = document.getElementById('allowExternal');
    //console.log("elt_allowExternal=" + elt_allowExternal);
    elt_allowExternal.checked=false;
    elt_allowExternal.setAttribute("disabled", "disabled");
    elt_allowExternal.parentElement.setAttribute("style", "display: none;");

    var allCookies = document.cookie.split(';');
    //console.log("array_cookie=" + array_cookie);
    var _ids = allCookies.filter(function(element, index, allCookies) {
        return element.trim().startsWith("ids");
    });
    //console.log("_ids=" + _ids);
    var myUserID = (_ids[0].split('='))[1].split(':')[0];
    console.log("myUserID=" + myUserID);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://apps.ap.collabserv.com/files/form/api/library/ad0d984b-3282-4259-a9e8-5b6251d2f96a/document/5d28a198-cd58-43dd-aa66-2c2af25f9f89/media/userslist.txt', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var res_data = JSON.parse(xhr.responseText);
            console.log("res_data=" + res_data);
            var res_data_filtered = res_data.filter(function(item, index){
                if (item.id == myUserID) return true;
            });
            console.log("res_data_filtered.length=" + res_data_filtered.length);
            if (res_data_filtered != null && res_data_filtered.length >= 1) {
                elt_allowExternal.removeAttribute("disabled");
                elt_allowExternal.parentElement.setAttribute("style", "");
                console.log("##### Display? ######");
            }
        }
    };
    xhr.send(null);
    console.log("##### xhr.send #####");
  }
});
