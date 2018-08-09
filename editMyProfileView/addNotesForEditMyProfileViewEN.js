document.addEventListener('DOMContentLoaded', function(){

var noteMain_en = "All personal information provided to this Global Portal shall be used for the following purpose.";
var noteLi1_en  = "To search for the right associate and experts up to business activity beyond the scope of organizations and conservative frameworks contributes to accelerate our business process, to improve its efficiency.";
var noteLi2_en  = "To search for individual abilities and KNOW-HOW contributes to accelerate our problem solving and challenge achievements, to create new values.";
var noteLi3_en  = "To visualize and share individual knowledge and KNOW-HOW.";
var noteLi4_en  = "To accelerate communication among associates.";

var noteMain_ja = "ja All personal information provided to this Global Portal shall be used for the following purpose.";
var noteLi1_ja  = "ja To search for the right associate and experts up to business activity beyond the scope of organizations and conservative frameworks contributes to accelerate our business process, to improve its efficiency.";
var noteLi2_ja  = "ja To search for individual abilities and KNOW-HOW contributes to accelerate our problem solving and challenge achievements, to create new values.";
var noteLi3_ja  = "ja To visualize and share individual knowledge and KNOW-HOW.";
var noteLi4_ja  = "ja To accelerate communication among associates.";

var noteMain = (document.documentElement.lang == "ja") ? noteMain_ja : noteMain_en;
var noteLi1 = (document.documentElement.lang == "ja") ? decodeURIComponent(escape(window.atob(noteLi1_ja))) : noteLi1_en;
var noteLi2 = (document.documentElement.lang == "ja") ? decodeURIComponent(escape(window.atob(noteLi2_ja))) : noteLi2_en;
var noteLi3 = (document.documentElement.lang == "ja") ? decodeURIComponent(escape(window.atob(noteLi3_ja))) : noteLi3_en;
var noteLi4 = (document.documentElement.lang == "ja") ? decodeURIComponent(escape(window.atob(noteLi4_ja))) : noteLi4_en;

var regexp = new RegExp("/profiles/html/editMyProfileView.do");
if (regexp.test(document.URL)) {
if (typeof XPathResult != "undefined") {
var regexp = new RegExp("/profiles/html/editMyProfileView.do");
if (regexp.test(document.URL)) {
var res = document.evaluate('//div[@class="lotusTabContainer"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
if (res.snapshotLength==1) {
var node = res.snapshotItem(0);
if (document.getElementById("yi201805211340") == null) {          
var newDivNode = document.createElement("div");
newDivNode.setAttribute("id", "yi201805211340");
newDivNode.setAttribute("style", "padding: 0.5em 1em; margin: 2em 0; font-weight: bold; color: #36393c; background: #def1fa; border: solid 2px #4cb0d7; border-radius: 5px;");
var newTextNode = document.createTextNode('EN_yes ' + noteMain);
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
newDivNode.setAttribute("style", "padding: 0.5em 1em; margin: 2em 0; font-weight: bold; color: #36393c; background: #def1fa; border: solid 2px #4cb0d7; border-radius: 5px;");
var newTextNode = document.createTextNode('EN_no ' + noteMain);
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
);
