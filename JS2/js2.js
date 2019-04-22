function jogoObj(){
	var jogadasPossiveis = {
		1: "papel",
		2: "pedra",
		3: "tesoura"
	}
}

function pcJoga() {
	var n = Math.round(Math.random()*2) +1
	var pri = "O computador jogoou "
	if (n==1) {
		console.log(pri + "papel")
	}
	else
	{
		if (n==2) {
			console.log(pri + "pedra")
		}
		else
		{
			console.log(pri + "tesoura")
		}
	}
	return n;
}
function jogo() {
	var nJogadas = 0;
	var pontosPlayer = 0 ;

	while(nJogadas<3){
		console.log ("Escolha sua jogada")
		var op = parseInt(prompt())
		var pc = pcJoga()
		if(pc==op){
			console.log("Empate")
		}
		else{
		if (op===1 && pc === 2 ) {
			console.log("Você ganhou")
			pontosPlayer++;

		}

		else{
			if (op==1 && pc==3) {
					console.log("Perdeu playboy!")
			}
			else{
				if (op==2 && pc ==1) {
					console.log("Perdeu playboy!")
				}
				else{
					if(op==2 && pc ==3){
						console.log("Você ganhou")
						pontosPlayer++;
					}
					else{
						if (op==3 && pc ==1) {
							console.log("Você ganhou")
							pontosPlayer++;
						}
						else{
							if (op==3 && pc==2) {
								console.log("Perdeu playboy!")
							}
						}
					}
				}
			}
		}
	}
		nJogadas = nJogadas+1;
	}
	if (pontosPlayer >1){
		console.log("Voce ganhou")
	}
}

jogo()