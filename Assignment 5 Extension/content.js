let el = document.querySelectorAll("a");
for(let i = 0; i < el.length; i++){
    el[i].innerHTML = "????";
    el[i].title = "????";
    el[i].alt = "????";
    el[i].dataset.url = el[i].href;
    el[i].href = "javascript:void(0);"
    el[i].onclick = (function(){
        this.href = this.dataset.url;
    });
}

let style = document.querySelectorAll("style");
for(let i = 0; i < style.length; i++){
    if(style[i].innerHTML.indexOf("popups") != -1){
        style[i].remove();
    }
    
} 

let a = chrome.runtime.getURL("styles.css");
document.querySelector("head").innerHTML += '<link rel="stylesheet" type="text/css" href="' + a + '" >';
