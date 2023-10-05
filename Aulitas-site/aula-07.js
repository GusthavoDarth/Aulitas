function at1(){
    
    let cont = 0;
    while(cont != "N"){
        let n1 = parseInt(prompt("Digite a primeira idade do aluno."),10);
        let n2 = parseInt(prompt("Digite a segunda idade do aluno."),10);
        alert((n1+n2)/2);
        cont = prompt("deseja continuar? para encerrar digite 'N'.");
    }
}

function at2(){
    
    let cont = -1;
    do{
        let n1 = parseInt(prompt("Digite a primeira idade do aluno."),10);
        let n2 = parseInt(prompt("Digite a segunda idade do aluno."),10);
        alert((n1+n2)/2);
        cont = prompt("deseja continuar? para encerrar digite '-1'."); 
    }
    while(cont != -1){
    }
}

function cadastrar(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("mail").value;
    let preparedString = "Nome: " + nome + "<br>Email: "+ email +"<br><br>";
    let htlm = document.getElementById("registros");
    html = document.getElementById("registros").innerHTML += preparedString;
}

function at3(){
    let v = [5,4,3,2,1];

    for(let cont = v.length-1; cont >= 0; cont--){
        //document.write(v[cont]+"<br>")
    }
}

function at4(){
    let v = [5,4,3,2,1];

    for(let cont = 0; cont < v.length; cont++){
        document.write(v[cont]+"<br>")
    }
}


function ex1(){
    let v = [6,5,4,3,2,1];
    let t = v.length-1;

    for(let i = 0; i < v.length/2; i++){
        let temp = v[i]
        v[i] = v[t]
        v[t] = temp
        alert(v)
        t--
    }
}