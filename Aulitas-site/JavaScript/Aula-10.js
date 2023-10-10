
/*
Implemente um algoritmo que receba n valores e apresente o maior e o menor valor destes n valores.
*/

function highLow(){
    let n = parseInt(prompt("Quantos números vão ser colocados?"));
    let v =[];

    
    for(let i = 0; i < n; i++){
        let value = parseInt(prompt("Dê o número"));
        v.push(value);
    }
    v.c
    alert("O maior valor é: "+Math.max(...v)+" e o menor é: "+Math.min(...v));
}


function mediaSimples(){

    let total = 0;

    let n = parseInt(prompt("Quantos números vão ser colocados?"));

    for(i = 0; i < n; i++){
        let value = parseInt(prompt("Dê o valor"));
        total += value;
    }
    alert("A média simples das notas é: "+(total/n))
}


function oddEven(){

    let odd = 0;
    let even = 0;

    let n = parseInt(prompt("Até que número?"));

    for(i = 0; i <= n; i++){
        if(i % 2){
            even += i;
        } else
            odd += i;
    }
    alert("A soma dos  números pares é: "+even+"\n"+"E a dos impares é: "+odd);
}