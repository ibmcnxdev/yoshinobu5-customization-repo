// ==UserScript==
// @name     yi5-v4: Inserting additional note in editMyProfileView.do
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){

  var noteMain_en = "All personal information provided to this Global Portal shall be used for the following purpose.";
  var noteLi1_en  = "To search for the right associate and experts up to business activity beyond the scope of organizations and conservative frameworks contributes to accelerate our business process, to improve its efficiency.";
  var noteLi2_en  = "To search for individual abilities and KNOW-HOW contributes to accelerate our problem solving and challenge achievements, to create new values.";
  var noteLi3_en  = "To visualize and share individual knowledge and KNOW-HOW.";
  var noteLi4_en  = "To accelerate communication among associates.";

  var noteMain_ja = "5b2T44Od44O844K/44Or44K144Kk44OI44Gr5o+Q5L6b44GV44KM44KL44GZ44G544Gm44Gu5YCL5Lq65oOF5aCx44Gv44CB5Lul5LiL44Gu5Yip55So55uu55qE44Gu56+E5Zuy5YaF44Gn5Yip55So44GZ44KL44KC44Gu44Go44GX44G+44GZ44CC";
  var noteLi1_ja  = "5qWt5YuZ44Gr6Zai6YCj44GZ44KL5Lq644KE5bCC6ZaA5a6244KS44CB57WE57mU44KE5b6T5p2l44Gu5p6g57WE44G/44KS6LaK44GI44Gm5o6i44GX44CB5qWt5YuZ44Gu44K544OU44O844OJ44Ki44OD44OX44KE5Yq5546H44Ki44OD44OX44Gr44Gk44Gq44GS44KL44CC";
  var noteLi2_ja  = "5b6T5qWt5ZOh5YCL5Lq644Gu44K544Kt44Or44KE44OO44Km44OP44Km44KS5o6i44GX44CB5ZWP6aGM6Kej5rG644KE6Kqy6aGM6YGU5oiQ44Gu44K544OU44O844OJ44Ki44OD44OX44GK44KI44Gz5paw5L6h5YCk44Gu5Ym16YCg44Gr44Gk44Gq44GS44KL44CC";
  var noteLi3_ja  = "5b6T5qWt5ZOh5YCL5Lq644Gu55+l6K2Y44O755+l6KaL44O744OO44Km44OP44Km562J44KS5Y+v6KaW5YyW44GX44CB5YWx5pyJ44GZ44KL44CC";
  var noteLi4_ja  = "5b6T5qWt5ZOh6ZaT44Gu44Kz44Of44Ol44OL44Kx44O844K344On44Oz44KS5rS75oCn5YyW44GZ44KL44CC";

//	var userLanguage = window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage;
//  var noteMain = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteMain_ja : noteMain_en;
//  var noteLi1  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi1_ja : noteLi1_en;
//  var noteLi2  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi2_ja : noteLi2_en;;
//  var noteLi3  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi3_ja : noteLi3_en;;
//  var noteLi4  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi4_ja : noteLi4_en;;

  var noteMain = (document.documentElement.lang == "ja") ? noteMain_ja : noteMain_en;
  var noteLi1  = (document.documentElement.lang == "ja") ? decodeURIComponent(escape(window.atob(noteLi1_ja))) : noteLi1_en;
  var noteLi2  = (document.documentElement.lang == "ja") ? decodeURIComponent(escape(window.atob(noteLi2_ja))) : noteLi2_en;
  var noteLi3  = (document.documentElement.lang == "ja") ? decodeURIComponent(escape(window.atob(noteLi3_ja))) : noteLi3_en;
  var noteLi4  = (document.documentElement.lang == "ja") ? decodeURIComponent(escape(window.atob(noteLi4_ja))) : noteLi4_en;
	
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
          	var newUlNode = document.createElement("ul");
      			newUlNode.setAttribute("type", "circle");
          	var newLiNode1 = document.createElement("li");
    	      newLiNode1.appendChild(document.createTextNode(noteLi1));
      	    newUlNode.appendChild(newLiNode1);
        	  var newLiNode2 = document.createElement("li");
          	newLiNode2.appendChild(document.createTextNode(noteLi2));
 	      	  newUlNode.appendChild(newLiNode2);
  	        var newLiNode3 = document.createElement("li");
    	      newLiNode3.appendChild(document.createTextNode(noteLi3));
      	    newUlNode.appendChild(newLiNode3);          
          	var newLiNode4 = document.createElement("li");
          	newLiNode4.appendChild(document.createTextNode(noteLi4));
          	newUlNode.appendChild(newLiNode4);
          	newDivNode.appendChild(newUlNode);
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
          	var newUlNode = document.createElement("ul");
      			newUlNode.setAttribute("type", "circle");
          	var newLiNode1 = document.createElement("li");
    	      newLiNode1.appendChild(document.createTextNode(noteLi1));
      	    newUlNode.appendChild(newLiNode1);
        	  var newLiNode2 = document.createElement("li");
          	newLiNode2.appendChild(document.createTextNode(noteLi2));
 	      	  newUlNode.appendChild(newLiNode2);
  	        var newLiNode3 = document.createElement("li");
    	      newLiNode3.appendChild(document.createTextNode(noteLi3));
      	    newUlNode.appendChild(newLiNode3);          
          	var newLiNode4 = document.createElement("li");
          	newLiNode4.appendChild(document.createTextNode(noteLi4));
          	newUlNode.appendChild(newLiNode4);
          	newDivNode.appendChild(newUlNode);
	          node.parentElement.insertBefore(newDivNode, node);
      }
    }//end of else
  }
});