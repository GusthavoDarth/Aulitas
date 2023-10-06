
function at1(){
    let idade = prompt("Dê sua idade: ");
    if (idade > 15 && idade < 18 || idade > 70){
        alert("Voto Facultativo") ;
    }
    else if (idade > 17){
        alert("Voto Obrigatorio");
    }
    else alert("Não vota");
}

function at2(){
    let a1 = parseInt(prompt("Número 1: "));
    let a2 = parseInt(prompt("Número 2: "));
    let a3 = parseInt(prompt("Número 3: "));
    const array = [a1, a2, a3];
    let troca;

    document.getElementById("des").innerHTML = array;

    do {
        troca = false
        for(let i = 0; i < array.length - 1; i++){

            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                troca = true;
            }
        }   
    } while(troca)

    document.getElementById("ord").innerHTML = array;
}



function at3(){
    let base = (parseInt(prompt("multiplicador"),10));
    let contaImpar;
    let contaPar;
    for(contador = 0;contador <=10; contador++){
        
    }
}


function ex1(){
    let massa = pesoAltura.peso.value ;
    let altu = pesoAltura.altura.value;
    let imc = massa / (altu*altu/10000);



    switch(true){

        case(imc < 16):
        document.getElementById("info").innerHTML = "Baixo peso muito grave.";
        break
        
        case(imc >= 16 && imc < 17):
        document.getElementById("info").innerHTML = "Baixo peso grave.";
        break
        
        case(imc >= 17 && imc < 18.5):
        document.getElementById("info").innerHTML = "Baixo peso.";
        break
        
        case(imc >= 18.5 && imc < 24.5):
        document.getElementById("info").innerHTML = "Peso normal.";
        break
        
        case(imc >= 24.5 && imc < 30):
        document.getElementById("info").innerHTML = "Sobrepeso.";
        break
        
        case(imc >= 30 && imc < 34.5):
        document.getElementById("info").innerHTML = "Obesidade Grau I";
        break
        
        case(imc >= 34.5 && imc < 39.9):
        document.getElementById("info").innerHTML = "Obesidade Grau II";
        break

        case(imc >= 39.9):
        document.getElementById("info").innerHTML = "Obesidade Grau III";
        break

        default:
            alert("Erro, dê todos os parâmetros.")
    }
 
}


function ex2(){
    let n1 = parseInt(numeros.num1.value);
    let n2 = parseInt(numeros.num2.value);
    let n3 = parseInt(numeros.num3.value);


    if(n1 == n2 && n1 == n3 && n2 == n3){
        document.getElementById("tipo").innerHTML = "Equilátero";
    }
    else if(n1 != n2 && n1 != n3 && n2 != n3){
        document.getElementById("tipo").innerHTML = "Escaleno";
    } else
        document.getElementById("tipo").innerHTML = "Isósceles";
}

function ex3(){
    let nome = dados.nome.value;
    let cargo = parseInt(profissao.value);
    let sal = parseFloat(dados.salario.value);
    
    

    if(cargo <= 0){
        alert("Informe o Cargo e o Salario")
    }
    else if(cargo == 1){
        salre = sal * 1.20;
        if(isNaN(salre)){
            alert("Informe o Salario")
        } else
        document.getElementById("reajuste").innerHTML = nome + " O bônus no seu salario de Cordenador é "+ salre;
    }
    else if(cargo == 2){
        salre = sal * 1.50
        if(isNaN(salre)){
            alert("Informe o Salario")
        } else
        document.getElementById("reajuste").innerHTML = nome + " O bônus no seu salario de Professor é "+ salre;
    }
    else if(cargo == 3){
        salre = sal * 1.02
        if(isNaN(salre)){
            alert("Informe o Salario")
        } else
        document.getElementById("reajuste").innerHTML = nome + ", O bônus no seu salario de Estagiário é "+ salre;
    }
}


function ex4(){
    let n1 = parseInt( prompt("Informe o primeiro numero: "));
    let n2 = parseInt(prompt("Informe o segundo numero: "));

    if(n1 > n2){
        alert(n1+" é maior.")
    }
    else if(n1 < n2){
        alert(n2+" é maior.")
    }
    else alert("Eles são iguais.")
}



// não funciona de forma certa, ta tenebroso.
function ex5(){
    let num = parseInt(prompt("Dê um número: "));
    let sabo = false
   
    for(let x = 0; x < num  ; x++){
        if(num == x*(x+1)*(x+2) ){
            alert(num + " É triangular.");
            sabo = true
        }
    }  
    if (sabo == false){
        alert(num + " Não é triangular.");
    }
}

function ex6(){
    let a = parseInt(trire.num1.value);
    let b = parseInt(trire.num2.value);
    let c = parseInt(trire.num3.value);

    let arr = [a,b,c];

    if(a>b && a>c && (b**2)+(c**2) == a**2){
        alert(b+"² + "+c+"² = "+a+"² é um triângulo retângulo.")
    }
    else if(b>a && b>c && (a**2)+(c**2) == b**2){
        alert(a+"² + "+c+"² = "+b+"² é um triângulo retângulo.")
    }
    else if(c>a && c>b && (a**2)+(b**2) == c**2){
        alert(a+"² + "+b+"² = "+c+"² é um triângulo retângulo.")
    } 
    else alert("Os números não formam um trângulo retângulo.")
}


function ex7(){
    let start = parseInt(temp.ini.value);
    let end = parseInt(temp.fim.value);
    let n = parseInt(temp.val.value);
    let f

    if (isNaN(n)){
        alert("Insira o valor da temperatura.")
    }
    else if(start == 1 && end == 2   ){
        f = n + 273.15;
        document.getElementById("fimtemp").innerHTML = f+" Kelvin"
    }
    else if(start == 1 && end == 3){
        f = (n * (9/5)) + 32;
        document.getElementById("fimtemp").innerHTML = f+" Fahrenheit"
    }

    else if(start == 2 && end == 1){
        f = n - 273.15;
        document.getElementById("fimtemp").innerHTML = f+" Celsius"
    }
    else if(start == 2 && end == 3){
        f = (n - 273.15) * (9/5) + 32;
        document.getElementById("fimtemp").innerHTML = f+" Fahrenheit"
    }

    else if(start == 3 && end == 1){
        f = (n - 32) * 5/9;
        document.getElementById("fimtemp").innerHTML = f+" Celsius"
    }
    else if(start == 3 && end == 2){
        f = (n - 32) * 5/9 + 273.15;
        document.getElementById("fimtemp").innerHTML = f+" Kelvin"
    } 

    else alert("Insira as escalas corretamente")

}
