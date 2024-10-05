// This document is the property of AMT Corp. ALL RIGHTS RESERVED.

const contextmenumodulestyle = document.createElement('link');
contextmenumodulestyle.rel = 'stylesheet';
contextmenumodulestyle.href = './modules/amt corp/Amt-Ui-context-menu.css';
document.head.appendChild(contextmenumodulestyle);
const loadIconsBtn = document.createElement('button');
const uninstallBtn = document.createElement('button');

const contextmenu = document.createElement('div');
contextmenu.style.background = 'var(--accent-default)';
contextmenu.id = 'ContextMenu';
const contextmenucopiryghts = document.createElement('span');
contextmenucopiryghts.textContent = 'Amt Ui Experimental Context Menu'
document.body.appendChild(contextmenu);
contextmenu.appendChild(contextmenucopiryghts);

loadIconsBtn.id = "loadIcons";
loadIconsBtn.innerHTML = '<img src="./assets/icons/download.png"><span>Add Element</span>';

uninstallBtn.id = "Uninstall";
uninstallBtn.innerHTML = '<img src="./assets/icons/clear.png"><span>Delete Element</span>';

contextmenu.appendChild(loadIconsBtn);
contextmenu.appendChild(uninstallBtn);

var enableamtcontextmenu = true;

document.addEventListener("contextmenu", function(event) {

  var div = document.getElementById("ContextMenu");
if ( enableamtcontextmenu === true) {
  div.style.left = event.clientX + "px";
  div.style.top = event.clientY + "px";
  div.classList.add('active');
document.addEventListener("click", function(event) {
  var div = document.getElementById("ContextMenu");
  if (event.target != div) {
  div.classList.remove('active');

  }
});
  event.preventDefault();
} else {

}
if ( enableamtcontextmenu === true && event.target.closest('.icon')) {
  div.style.left = event.clientX + "px";
  div.style.top = event.clientY + "px";
  // div.style.background = "red";
  loadIconsBtn.classList.remove("hidden");
  div.classList.add('active');
document.addEventListener("click", function(event) {
  var div = document.getElementById("ContextMenu");
  if (event.target != div) {
  div.classList.remove('active');
  }
});
  event.preventDefault();
} else {
  div.style.background = "var(--accent-default)";
  loadIconsBtn.classList.add("hidden");
}

});
