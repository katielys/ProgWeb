
var cont = 0
addEventListener("mousemove", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
    cont++;

    if (cont >8){
        var oP = document.body.getElementsByTagName("div")[0];
        document.body.removeChild(oP);
    }
});
