
/*
Implemente um algoritmo que receba n valores e apresente 
o maior e o menor valor destes n valores.
*/

function highLow(){
    let n = parseInt(prompt("Quantos números vão ser colocados?"));
    let v =[];

    
    for(i = 0; i < n; i++){
        let value = parseInt(prompt("Dê o número"));
        v.push(value);
    }
    alert("O maior valor é: "+Math.max(...v)+" e o menor é: "+Math.min(...v));
    /*
    pede um numero (n) como parametro de fim do for
    e a cada ciclo pede um valor (value) que é colocado num vetor
    e com a função Math.max e Math.min ele pega os maiores e os menores 
    números no vetor
    */
}


/*
Implemente um algoritmo que receba n valores e apresente 
a média simples destes valores
*/

function mediaSimples(){

    let total = 0;

    let n = parseInt(prompt("Quantos números vão ser colocados?"));

    for(i = 0; i < n; i++){
        let value = parseInt(prompt("Dê o valor"));
        total += value;
    }
    alert("A média simples das notas é: "+(total/n))

    /* 
    bem simples pede um número (n) para parametro de fim do for
    a cada ciclo ele pede a nota e soma ao total
    no final ele divide o total pelo número (n) de notas 
    */
}


/*
Implemente um algoritmo que some os n primeiros números pares e ímpares.
*/

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

    /* 
    ele pede um número (n) e o for usa ele como parametro de fim, ou seja 
    se o numero (n) dado for 15 ele vai do 0 ao 15 incrementando +1, 
    com um if ele faz i mod 2 para saber se é par ou impar e adiciona
    esse i ao total do par ou do impar
    */
}


/*
Implemente um algoritmo que receba um número x e uma série de números n. 
O algoritmo deve informar ao final da série de números n, quantos eram 
multiplos x e a somatória dos multiplos de x.
*/

function multiple(){
    let param = parseInt(prompt("Dê o número: "));
    let num = parseInt(prompt("Quantos numeros serão testados?"));
    let sum = 0;
    let total = 0;

    for(i = 0; i < num; i++){
        let n = parseInt(prompt("Dê o número para teste: "))
        if(n %param == 0){
            sum += n;
            total += 1;
        }
    }
    alert("O total de números multiplos de "+par1+" é: "+total+"\n"+"E a soma dos multiplos de "+par1+" é: "+sum)
    
    /*
    pede um número (param) para checar se é multiplo e outro 
    número (num) pra informar quantas números vão ser comparados
    a comparação para saber se é multiplo é feita pelo número dado (n)
    mod do numero para checagem (param) se sim ele soma o numero na var sum
    e adiciona 1 ao total
    */
}


/*
Implemente um algoritmo que recebe um número decimal e realize a conversão 
dele para a base binária
*/

function binaryConvert(){
    
    
    let dec = parseInt(prompt("Dê um numero para conversão"));
    let bin = "";

    document.getElementById("binConvert").innerHTML = "O decimal "+dec+"<br>";
    while(dec > 0){
        if(dec %2){
            bin = "1" + bin;
        } else {
            bin = "0" + bin;
        } 
        dec = Math.floor(dec/2);
    }
    document.getElementById("binConvert").innerHTML += "Em binario é "+bin;


    /*
    sem for, muito trabalho mais facil assim
    enquanto o decimal for > 0 ele checa se ele é mod de 2
    se for ele colocaria 1 mas pela formula de conversão ele inverteria
    então ja está invertido na propria checagem e no final ele divide o 
    decimal por 2 e repete até ficar zero.
    obs: a divisão é de inteiro então não tem ponto flutuante.
    */
}

/*
Desafio da plataforma Beecrowd
Neste problema você deve ler um valor inteiro e calcular o menor número 
possível de notas nas quais o valor pode ser decomposto. As notas possíveis 
são 100, 50, 20, 10, 5, 2 e 1. 
Imprima o valor lido e a lista de notas.
Exemplo: R$11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00
*/

function challenge(){
    let value = parseInt(prompt("Informe um valor em R$: "))
    let vParameter = [100,50,20,10,5,2,1];

    document.getElementById("moneyResult").innerHTML = "R$"+value+"<br>"
    for(i = 0; i <= 6; i++){
        document.getElementById("moneyResult").innerHTML += Math.floor(value/vParameter[i])+" nota(s) de R$ "+vParameter[i]+",00 <br>";
        value = Math.floor(value%vParameter[i]);
    }

    /*
    a função pede um valor em reais e com um vetor com os valores de 
    notas possiveis ele usa um for em que pega o index desse vetor
    e faz a divisão do valor dado pelo respectivo index da array
    logo após ele faz o modulo e reescreve o valor.
    */
}

function fibo(){
    let n = parseInt(prompt("Escreva quandos numeros da sequencia de fibonacci")-1);
    let n1 = BigInt(0);
    let n2 = BigInt(1);


    for(i=0; i<=n; i++ ){ 
        document.write(n1+"<br>");
        temp = BigInt(n1+n2);
        n1 = n2;
        n2 = temp;
    }
}
