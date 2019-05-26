class Venda{
    constructor(id,quantida,preco){
        this.id = id;
        this.quantida = quantida;
        this.preco = preco;
    }
    getID(){
        return this.id;
    }

    setID(id){
        this.id=id;
    }

    getQuantidade(){
        return this.quantida;
    }

    setQuantidade(v){
        this.quantida =v;
    }

    getPreco(){
        return this.preco;
    }

    setPreco(v){
        this.preco=v;
    }

    getValorTotal(){
        return this.quantida * this.preco;
    }
}

var f = new Venda('id=1',2,2);
var f1 = new Venda('id=12',23,23);
console.log(f.getValorTotal())