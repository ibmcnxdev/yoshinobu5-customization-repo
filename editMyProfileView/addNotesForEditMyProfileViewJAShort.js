document.addEventListener('DOMContentLoaded', function(){
var noteMain = "当ポータルサイトに提供されるすべての個人情報は、以下の利用目的の範囲内で利用するものとします。";

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
var newTextNode = document.createTextNode('JAShort_yes ' + noteMain);
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
newDivNode.setAttribute("style", "padding: 0.5em 1em; margin: 2em 0; font-weight: bold; color: #36393c; background: #def1fa; border: solid 2px #4cb0d7; border-radius: 5px;");
var newTextNode = document.createTextNode('JAShort_no ' + noteMain);
newDivNode.appendChild(newTextNode);
node.parentElement.insertBefore(newDivNode, node);
}
}
}
}
);
