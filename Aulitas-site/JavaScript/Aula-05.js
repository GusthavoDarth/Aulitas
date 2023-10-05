
function somar() {
    let a1 = parseInt(prompt("Dê um valor: "));
    let a2 = parseInt(prompt("Dê Outro valor: "));

    alert(a1 + a2);
}


// Atividades //

function At1() {
    let a1 = parseInt(prompt("Dê um Número:"));
    alert((a1-1)+", "+a1+", "+(a1+1));
}

function At2(){

    let a1 = parseFloat(prompt("Nota A1"));
    let a2 = parseFloat(prompt("Nota A2"));
    let a3 = parseFloat(prompt("Nota A3"));
    alert((a1+a2+a3)/3)
    
}

function At3(){
   // let a1 = parseFloat(prompt("Dê um valor"));
   // let a2 = parseFloat(prompt("Dê um valor"));
}

function At4(){
    let a1 = parseInt(prompt("Dê um Valor"));
    if (a1 % 2 == 0){
        alert(a1 + " é par");
    }
    else alert(a1 + " é impar");
}

function At5(){
    let a1 = parseInt(prompt("Dê um Valor"));
    alert(a1*-1);
}

function At6(){
    let a1 = prompt("Dê um valor de 0 a 999");
    if (a1>= 0 && a1<=9){ 
        alert(a1[0]+" Unidade(s).");
    } else if (a1>=10 && a1<=99){
        alert(a1[0]+" Dezena(s), "+a1[1]+" Uniade(s).");
    } else if (a1>=100 && a1<=999){
        alert(a1[0]+" Centena(s), "+a1[1]+" Dezena(s), "+a1[2]+" Uniade(s).");
    } else {
        alert("erro");
    }
}

