document.addEventListener('DOMContentLoaded', function(){
var noteMain = decodeURIComponent(escape(window.atob("5b2T44Od44O844K/44Or44K144Kk44OI44Gr5o+Q5L6b44GV44KM44KL44GZ44G544Gm44Gu5YCL5Lq65oOF5aCx44Gv44CB5Lul5LiL44Gu5Yip55So55uu55qE44Gu56+E5Zuy5YaF44Gn5Yip55So44GZ44KL44KC44Gu44Go44GX44G+44GZ44CC")));

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
var newTextNode = document.createTextNode('B64Short_yes ' + noteMain);
newDivNode.appendChild(newTextNode);
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
var newTextNode = document.createTextNode('B64Short_no ' + noteMain);
newDivNode.appendChild(newTextNode);
newDivNode.appendChild(newUlNode);
node.parentElement.insertBefore(newDivNode, node);
}
}
}
}
);