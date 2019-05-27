class Venda{
    constructor(id,quantidade,preco){
        this.id =  id;
        this.quantidade = quantidade;
        this.preco =  preco;
    }

    getID(){
        return this.id;
    }

    setID(id){
        this.id = id;
    }

    getQuantidade(){
        return this.quantidade;
    }

    setQuantidade(quantidade){
        this.quantidade = quantidade;
    }

    getPreco(){
        return this.preco;

    }

    setPreco(preco){
        this.preco = preco
    }

    getValorTotal(){
        return this.preco * this.quantidade;
    }
}


venda1 = new Venda("minhaVenda1",10,100);
venda2 = new Venda("minhaVenda2",100,23);

console.log(venda1.getValorTotal())
console.log(venda2.getValorTotal())

function c(){
var c = 1;
function a(){
    console.log(c);
   return 2; 
}
}
c();