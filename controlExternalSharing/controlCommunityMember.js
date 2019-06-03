// ==UserScript==
// @name tdk-controlCommunityMember
// @description Turn the checkbox for "Allow External" off by default.
// @version  1
// @grant    none
// ==/UserScript==

//window.addEventListener('load', function(){
document.addEventListener('DOMContentLoaded', function(){
  console.log("controlCommunityMember: Event is fired. (document.URL=" + document.URL + ")");
  //var allowedExternalSharingURL = 'https://apps.ap.collabserv.com/files/form/api/library/ad0d984b-3282-4259-a9e8-5b6251d2f96a/document/5d28a198-cd58-43dd-aa66-2c2af25f9f89/media/userslist.txt';

  if (new RegExp("https://apps.ap.collabserv.com/communities").test(document.URL) ||
      new RegExp("https://apps.ce.collabserv.com/communities").test(document.URL) ||
      new RegExp("https://apps.na.collabserv.com/communities").test(document.URL)) {

    var elt_memberAddButton = document.getElementById('memberAddButton');
		console.log("controlCommunityMember: elt_memberAddButton=" + elt_memberAddButton);    
    if (elt_memberAddButton != null) {
        elt_memberAddButton.setAttribute("style", "display: none;");
    }

    var elt_widgetContainerFullpage = document.getElementById('widget-container-fullpage');
    console.log("controlCommunityMember: elt_widgetContainerFullpage=" + elt_widgetContainerFullpage);
    if (elt_widgetContainerFullpage != null) {
        var mo_elt_widgetContainerFullpage = new MutationObserver(function(records){
            var elt_memberAddButton = document.getElementById('memberAddButton');
            console.log("controlCommunityMember: elt_memberAddButton=" + elt_memberAddButton);
            if (elt_memberAddButton != null) {
                var style_elt_memberAddButton = elt_memberAddButton.getAttribute("style");
                elt_memberAddButton.setAttribute("style", "display: none;");                
            }

            var elt_filterRow = document.getElementById('filterRow');
            console.log("controlCommunityMember: elt_filterRow=" + elt_filterRow);
            var elt_lotusLeft = elt_filterRow.children[0].children[0];
            console.log("controlCommunityMember: elt_lotusLeft=" + elt_lotusLeft);
            if (elt_lotusLeft != null) {
                elt_lotusLeft.setAttribute("style", "display: none;");
            }
          
        });
        mo_elt_widgetContainerFullpage.observe(elt_widgetContainerFullpage, {childList: true, subtree: true}); 
    }
  }
});
