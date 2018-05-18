// ==UserScript==
// @name     Yoshinobu5-Profile-Customization
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){
	var additionalNote = "ver3:ここにメッセージを入れる。例えば、クレジットカード情報を含めないで下さい等。";
  
  //console.log("document.URL=" + document.URL);
  var regexp = new RegExp("/profiles/html/editMyProfileView.do");
  if (regexp.test(document.URL)) {

    if (XPathResult != null) {
    	//console.log("document.URL=" + document.URL);
  		var regexp = new RegExp("/profiles/html/editMyProfileView.do");
  		if (regexp.test(document.URL)) {
    		var res = document.evaluate('//div[@class="lotusMeta lotusSection"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    		//console.log("res.snapshotLength=" + res.snapshotLength);
    		if (res.snapshotLength==1) {
      		var node = res.snapshotItem(0);
      		var pNode = document.createElement("p");
      		pNode.setAttribute("style", "color:red; font-weight;bold;");
      		var newTextNode = document.createTextNode(additionalNote);
      		pNode.appendChild(newTextNode);
      		node.appendChild(pNode);    
    		}

    		var res2 = document.evaluate('//table[@id="tableEditProfileContactInfo"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			//console.log("res2=" + res2);
    		//console.log("res2.snapshotLength=" + res2.snapshotLength);
    		if (res2.snapshotLength==1) {
      		var tableNode2 = res2.snapshotItem(0);
      		//console.log("tableNode2=" + tableNode2);
      		//console.log("tableNode2.rows.length=" + tableNode2.rows.length);
      		var newTableRow2 = tableNode2.insertRow(tableNode2.rows.length-1);
      		//console.log("newTableRow2=" + newTableRow2);
      		var newCell2  = newTableRow2.insertCell(0);
      		//console.log("newCell2=" + newCell2);
      		newCell2.colSpan=2;
      		newCell2.setAttribute("style", "color:red; font-weight;bold;");
      		var newText2 = document.createTextNode(additionalNote);
      		newCell2.appendChild(newText2);
    		}

    		var res3 = document.evaluate('//table[@id="tableEditProfileAboutMe"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
				//console.log("res3=" + res3);
    		//console.log("res3.snapshotLength=" + res3.snapshotLength);
    		if (res3.snapshotLength==1) {
      		var tableNode3 = res3.snapshotItem(0);
      		//console.log("tableNode3=" + tableNode3);
      		//console.log("tableNode3.rows.length=" + tableNode3.rows.length);
      		var newTableRow3 = tableNode3.insertRow(tableNode3.rows.length-1);
      		//console.log("newTableRow3=" + newTableRow3);
      		var newCell3  = newTableRow3.insertCell(0);
      		//console.log("newCell3=" + newCell3);
      		newCell3.setAttribute("style", "color:red; font-weight;bold;");
      		var newText3 = document.createTextNode(additionalNote);
      		newCell3.appendChild(newText3);
    		}
		}
    }
    else {
    	var rootNode1 = document.getElementById('_profileEditScene_div');
    	//console.log("ver2: rootNode1=" + rootNode1);

	    var tableNode2 = document.getElementById('tableEditProfileContactInfo');
  	  //console.log("ver2:tableNode2=" + tableNode2);
    	var tableNode3 = document.getElementById('tableEditProfileAboutMe');    
    	//console.log("ver2:tableNode3=" + tableNode3);
    
    	if (tableNode2 != null || tableNode3 != null) {
        var nodeTabpanel1 = rootNode1.children[4];
        //console.log("ver2: nodeTabpanel1=" + nodeTabpanel1);
        var divNode1 = nodeTabpanel1.children[0];
        //console.log("ver2: divNode1=" + divNode1);
        if (divNode1 != null) {
            var pNode = document.createElement("p");
            pNode.setAttribute("style", "color:red; font-weight;bold;");
  		      var newTextNode = document.createTextNode(additionalNote);
            pNode.appendChild(newTextNode);
            divNode1.appendChild(pNode);    
        }
    }

	    //var tableNode2 = document.getElementById('tableEditProfileContactInfo');
  	  //console.log("ver2:tableNode2=" + tableNode2);
    	if (tableNode2 != null) {
      	var newTableRow2 = tableNode2.insertRow(tableNode2.rows.length-1);
       	//console.log("ver2:newTableRow2=" + newTableRow2);
       	var newCell2  = newTableRow2.insertCell(0);
       	//console.log("ver2:newCell2=" + newCell2);
       	newCell2.colSpan=2;
       	newCell2.setAttribute("style", "color:red; font-weight;bold;");
		   	var newText2 = document.createTextNode(additionalNote);
	     	newCell2.appendChild(newText2);
    	}

    	//var tableNode3 = document.getElementById('tableEditProfileAboutMe');
    	//console.log("ver2:tableNode3=" + tableNode3);
    	if (tableNode3 != null) {
      	var newTableRow3 = tableNode3.insertRow(tableNode3.rows.length-1);
       	//console.log("ver2:newTableRow3=" + newTableRow3);
       	var newCell3  = newTableRow3.insertCell(0);
       	//console.log("ver2:newCell3=" + newCell3);
       	newCell3.setAttribute("style", "color:red; font-weight;bold;");
		   	var newText3 = document.createTextNode(additionalNote);
	     	newCell3.appendChild(newText3);
    	}
    }//end of else
  }
});
