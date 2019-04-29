function caclula(){
    var r = parseFloat(document.getElementById("raio").value)
    var areaCirculo = Math.PI * r * r
    var circuferencia = Math.PI*2*r

    console.log(r, typeof r)

    document.getElementById("a").value= areaCirculo
    document.getElementById("c").value= circuferencia
}