//gets all the links on the page
let el = document.querySelectorAll("a");
for(let i = 0; i < el.length; i++){
    //replaces the text content, title and any alt text with question marks to prevent the user from identifying the link without clicking on it
    el[i].innerHTML = "????";
    el[i].title = "????";
    el[i].alt = "????";
    //stores the url before changing it to a function that does nothing
    el[i].dataset.url = el[i].href;
    el[i].href = "javascript:void(0);"
    //when the link is clicked, the original url is restored, allowing the links to remain functional
    el[i].onclick = (function(){
        this.href = this.dataset.url;
    });
}
