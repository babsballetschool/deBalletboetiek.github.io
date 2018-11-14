(function(){
    var main = document.getElementsByTagName("main")[0];
    var links = main.getElementsByTagName("a");
    for(var index = 0; index < links.length; index++) {
        var link = links.item(index);
        link.setAttribute("target", "_blank");
    }
})();
