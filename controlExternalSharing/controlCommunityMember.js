// ==UserScript==
// @name tdk-controlAddCommunityMember
// @description Controlling show and hide "Add community member" button control.
// @version  1
// @grant    none
// ==/UserScript==

//window.addEventListener('load', function(){
document.addEventListener('DOMContentLoaded', function(){
  console.log("controlAddCommunityMember: Event is fired. (document.URL=" + document.URL + ")");
  var allowedExternalSharingURL = 'https://apps.ap.collabserv.com/files/form/api/library/ad0d984b-3282-4259-a9e8-5b6251d2f96a/document/5d28a198-cd58-43dd-aa66-2c2af25f9f89/media/userslist.txt';

  if (new RegExp("https://apps.ap.collabserv.com/communities").test(document.URL) ||
      new RegExp("https://apps.ce.collabserv.com/communities").test(document.URL) ||
      new RegExp("https://apps.na.collabserv.com/communities").test(document.URL)) {

    var elt_memberAddButton = document.getElementById('memberAddButton');
    console.log("controlAddCommunityMember: elt_memberAddButton=" + elt_memberAddButton);    
    if (elt_memberAddButton != null) {
        elt_memberAddButton.setAttribute("style", "display: none;");
    }

    var elt_widgetContainerFullpage = document.getElementById('widget-container-fullpage');
    console.log("controlAddCommunityMember: elt_widgetContainerFullpage=" + elt_widgetContainerFullpage);
    if (elt_widgetContainerFullpage != null) {
        var mo_elt_widgetContainerFullpage = new MutationObserver(function(records){
            var elt_memberAddButton = document.getElementById('memberAddButton');
            console.log("controlAddCommunityMember: elt_memberAddButton=" + elt_memberAddButton);
            if (elt_memberAddButton != null) {
                //var style_elt_memberAddButton = elt_memberAddButton.getAttribute("style");
                elt_memberAddButton.setAttribute("style", "display: none;");                
            }

            var elt_filterRow = document.getElementById('filterRow');
            console.log("controlAddCommunityMember: elt_filterRow=" + elt_filterRow);
            var elt_lotusLeft = elt_filterRow.children[0].children[0];
            console.log("controlAddCommunityMember: elt_lotusLeft=" + elt_lotusLeft);
            if (elt_lotusLeft != null) {
                elt_lotusLeft.setAttribute("style", "display: none;");
            }

            var allCookies = document.cookie.split(';');
            //console.log("controlAddCommunityMember: allCookies=" + allCookies);
            var _ids = allCookies.filter(function(element, index, allCookies) {
                return new RegExp(/^ids/i).test(element.trim());
            });
            console.log("controlAddCommunityMember: _ids=" + _ids);
            var myUserID = (_ids[0].split('='))[1].split(':')[0];
            console.log("controlAddCommunityMember: myUserID=" + myUserID);
          
            var xhr = new XMLHttpRequest();
            xhr.open('GET', allowedExternalSharingURL, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var res_data = JSON.parse(xhr.responseText);
                    console.log("controlAddCommunityMember: res_data=" + res_data);
                    var res_data_filtered = res_data.filter(function(item, index){
                        if (item.id == myUserID) return true;
                    });
                    console.log("controlAddCommunityMember: res_data_filtered.length=" + res_data_filtered.length);
                    if (res_data_filtered != null && res_data_filtered.length >= 1) {
                        mo_elt_widgetContainerFullpage.disconnect();
                        console.log("controlAddCommunityMember: mo_elt_widgetContainerFullpage disconnected.");
                        if (elt_memberAddButton != null) {
                            elt_memberAddButton.setAttribute("style", "");
                        }
                        if (elt_lotusLeft != null) {
                            elt_lotusLeft.setAttribute("style", "");
                        }
                        console.log("controlAddCommunityMember: elt_memberAddButton and elt_lotusLeft are shown.");
                    }
                }
            };
            xhr.send(null);
        });
        mo_elt_widgetContainerFullpage.observe(elt_widgetContainerFullpage, {childList: true, subtree: true}); 
    }
  }
});
