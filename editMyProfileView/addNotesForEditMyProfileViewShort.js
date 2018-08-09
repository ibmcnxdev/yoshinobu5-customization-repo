// ==UserScript==
// @name     yi5-v4: Inserting additional note in editMyProfileView.do
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){

  var noteMain_en = "All personal information provided to this Global Portal shall be used for the following purpose.";

  var noteMain_ja = "当ポータルサイトに提供されるすべての個人情報は、以下の利用目的の範囲内で利用するものとします。";

//	var userLanguage = window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage;
//  var noteMain = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteMain_ja : noteMain_en;
//  var noteLi1  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi1_ja : noteLi1_en;
//  var noteLi2  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi2_ja : noteLi2_en;;
//  var noteLi3  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi3_ja : noteLi3_en;;
//  var noteLi4  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi4_ja : noteLi4_en;;

  var noteMain = (document.documentElement.lang == "ja") ? noteMain_ja : noteMain_en;
	
  //console.log("document.URL=" + document.URL);
  var regexp = new RegExp("/profiles/html/editMyProfileView.do");
  if (regexp.test(document.URL)) {

 		if (typeof XPathResult != "undefined") {
	    //console.log("document.URL=" + document.URL);
  		var regexp = new RegExp("/profiles/html/editMyProfileView.do");
  		if (regexp.test(document.URL)) {
				var res = document.evaluate('//div[@class="lotusTabContainer"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        //console.log("res.snapshotLength=" + res.snapshotLength);
    		if (res.snapshotLength==1) {
      		var node = res.snapshotItem(0);
          if (document.getElementById("yi201805211340") == null) {          
	          var newDivNode = document.createElement("div");
  	        newDivNode.setAttribute("id", "yi201805211340");
//    	  		newDivNode.setAttribute("style", "color:red; font-weight;bold;");
    	  		newDivNode.setAttribute("style", "padding: 0.5em 1em; margin: 2em 0; font-weight: bold; color: #36393c; background: #def1fa; border: solid 2px #4cb0d7; border-radius: 5px;");
      	    var newTextNode = document.createTextNode(noteMain);
      			newDivNode.appendChild(newTextNode);
	          node.parentElement.insertBefore(newDivNode, node);
        	}
    		}
			}
    }
    else {
    	var rootNode1 = document.getElementById('_profileEditScene_div');
   		var node = rootNode1.children[3];
      if (document.getElementById("yi201805211340") == null) {          
	          var newDivNode = document.createElement("div");
  	        newDivNode.setAttribute("id", "yi201805211340");
//    	  		newDivNode.setAttribute("style", "color:red; font-weight;bold;");
    	  		newDivNode.setAttribute("style", "padding: 0.5em 1em; margin: 2em 0; font-weight: bold; color: #36393c; background: #def1fa; border: solid 2px #4cb0d7; border-radius: 5px;");
      	    var newTextNode = document.createTextNode(noteMain);
      			newDivNode.appendChild(newTextNode);
	          node.parentElement.insertBefore(newDivNode, node);
      }
    }//end of else
  }
});