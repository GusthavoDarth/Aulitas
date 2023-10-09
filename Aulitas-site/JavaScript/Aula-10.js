
/*
Implemente um algoritmo que receba n valores e apresente o maior e o menor valor destes n valores.
*/

function highLow(){
    let vLength = parseInt(prompt("Quantos números vão ser colocados?"));
    let v =[];


    for(let i = 0; i < vLength; i++){
        let value = parseInt(prompt("Dê o número"));
        v.push(value);

    }
    alert(v);
    alert(high);
    alert(low);
}