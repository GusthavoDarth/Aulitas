
function carro(modelo,ano,cor){
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    
    this.acelerar = acelerar;
    this.frenar = frenar;
}

function acelerar(aceleracao){
    console.log("Acelerando à "+aceleracao+"km/h")
}


function frenar(){
    console.log("freando")
}


function contaCorrente(saldo){
    this.saldo = saldo;
    this.saque = saque;
    this.deposito = deposito;

    function saque(ValorSoliciatado){
        if(this.saldo >= ValorSoliciatado){
            this.saldo -=ValorSoliciatado;
            return ValorSoliciatado;
    
        } else console.log("sem saldo");
    }

    function deposito(ValorDepositado){
        this.saldo += ValorDepositado;
    }

}

let conta1 = new contaCorrente(100)

conta1.saque(10);

console.log(conta1.saldo);

conta1.deposito(20);

console.log(conta1.saldo);

conta1.saque(200);

console.log(conta1.saldo);