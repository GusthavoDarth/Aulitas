// Objetos
class Produto{
    constructor(Nome,Preco,Quantidade){
        this.Nome = Nome;
        this.Preco = Preco;
        this.Quantidade = Quantidade;
    }
    
    addQuantidade = (num)=>{
        this.Quantidade = num
    }
}

class Venda {
    constructor(Cliente,Vendedor,Item){
        this.Cliente = Cliente;
        this.Vendedor = Vendedor;
        this.Item = Item
    }
}

let Caneta = new Produto("Caneta",8);
let Lapis = new Produto("Lapis",5);
let Borracha = new Produto("Borracha",4);
let Caderno = new Produto("Caderno",15);

function comprar(){
    //pega as informações
    let obj = document.getElementById("objinfo");
    obj.innerHTML = ''
    let cliente = document.getElementById("Cnome").value;
    let vendedor = document.getElementById("Vnome").value;
    let produtos = [];
    let quant = [];

    let p1 = parseInt(document.getElementById("Caneta").value);
    let p2 = parseInt(document.getElementById("Lapis").value);
    let p3 = parseInt(document.getElementById("Borracha").value);
    let p4 = parseInt(document.getElementById("Caderno").value);
    let pagamento = parseInt(document.getElementById("pagamento").value);
    let total = 0;

    //checa se existe algo para comprar
    if((p1 == 0 || p1 == null) && (p2 == 0 || p2 == null) && (p3 == 0 || p3 == null) && (p4 == 0 || p4 == null)){
        alert("Coloque uma quantidade antes de comprar")

    }else{
        //checa qual a quantidade dos produtos
        if(p1 != 0 && p1 != null){
            produtos.push(Caneta);
            quant.push(p1)
            Caneta.addQuantidade(p1)
        }
        if(p2 != 0){
            produtos.push(Lapis);
            quant.push(p2)
            Lapis.addQuantidade(p2)
        }
        if(p3 != 0){
            produtos.push(Borracha);
            quant.push(p3)
            Borracha.addQuantidade(p3)
        }
        if(p4 != 0){
            produtos.push(Caderno);
            quant.push(p4)
            Caderno.addQuantidade(p4)
        }
        let NovaVenda = new Venda(cliente,vendedor,produtos);
        
        for(i=0;i<produtos.length;i++){
            let price = Object.prototype.valueOf.call(NovaVenda.Item[i].Preco);
            total += price*quant[i];
        }
        if(pagamento == 0){
            total *= 0.9;
        }else{
            total *= 1.1;
        }
        obj.innerHTML += "O Preço é R$: "+total.toFixed(2)+"<br>"; 


        //informa os 
        let keys = Object.keys(NovaVenda);
        let values = Object.values(NovaVenda)

        for(i=0;i<2;i++){
            let textkeys = keys[i]
            let textvalues = values[i]
            obj.innerHTML += textkeys+': '+textvalues+"<br>";
        }

        for(j=0;j<NovaVenda.Item.length;j++){
            let keys = Object.keys(NovaVenda.Item[j])
            let values = Object.values(NovaVenda.Item[j])
            obj.innerHTML += "<br>"+Object.keys(NovaVenda)[2]+" "+(j+1)+"<br>";
            for(i=1;i<4;i++){
                let textkeys = keys[i]
                let textvalues = values[i]
                obj.innerHTML += textkeys+': '+textvalues+"<br>";
            }

        }
    }
}