function cod(){
    document.getElementById("butao").nodeValue = "Botão Pressionado"
    window.alert("oi");
}

function main() {
    var botao = document.getElementById("butao")
   
    botao.addEventListener('click',cod) 
        
    
}  

main();