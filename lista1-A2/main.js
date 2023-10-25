class Aluno {
    nome;
    ra;
    ano;
    notas;

    constructor(nome, ra, ano , notas) {
        this.nome = nome;
        this.ra = ra;
        this.ano = ano;
        this.notas = notas;
    }
}
let k = 5;
let aluno1 = new Aluno("Matheus", 1111, 2022, [7,3,9,3]);
let aluno2 = new Aluno("Lucas", 2222, 2023, [8,4,3,6]);
let aluno3 = new Aluno("Gusthavo", 3333, 2023, [2,6,7,4]);
let aluno4 = new Aluno("Nathan", 4444, 2020, [3,5,6,4]);

let lista_alunos = [aluno1,aluno2,aluno3,aluno4];

let listin = lista_alunos.length; 


//cadastra um aluno
function cadal(){
    let aaaa = "aluno"+k;
    console.log(aaaa);
    let nome = document.getElementById("cname").value;
    let ra = document.getElementById("cra").value;
    let ano = document.getElementById("cano").value;
    aaaa = new Aluno(nome, ra, ano);
    lista_alunos.push(aaaa);
    console.log(lista_alunos);
    k++
    tabela();
    console.log(lista_alunos)
}


//deleta o cadastro do aluno
function delal(){
    let id = document.getElementById("del").value;
    let ask = prompt("Você tem certeza que deseja deletar essas informações?  Y/N")
    if(ask == "Y"){
        lista_alunos.splice(id,1);
    }
    tabela();
}

// edita as informações dos alunos
function edital(){
    let check = false; 
    let info  = document.getElementById("info").value;
        
    for(i = 0; i < lista_alunos.length; i++){
        document.getElementById("faluno").innerHTML
        let aluno = lista_alunos[i];
        let nomet = lista_alunos[i].nome;
        let rat = lista_alunos[i].ra;
        let notas = lista_alunos[i].notas
        if(info == nomet || info == rat){
            aluno.nome = prompt("Digite o novo nome");
            aluno.ra = prompt("Digite o novo ra");
            aluno.ano = prompt("Digite o ano");
            notas = [];
            for(i=1;i<=4;i++){
                notas.push(prompt("nota "+i));
            }
            check = true;
            break;
        }
    }
    if (check != true){
        alert("Não existe ou está escrito errado.")
    }
    tabela();
}



//localiza um aluno
function alfind(){
    let check = false; 
    let fra = 0;
    let fnome = ""; 
    fra = document.getElementById("fra").value;
    fnome = document.getElementById("fname").value;

    for(i = 0; i < lista_alunos.length; i++){
        document.getElementById("faluno").innerHTML
        let nomet = lista_alunos[i].nome;
        let rat = lista_alunos[i].ra;
        if(fnome == nomet || fra == rat){
            document.getElementById("faluno").innerHTML = "";
            let id = i;
            let nome = JSON.stringify(lista_alunos[i].nome);
            let ra = JSON.stringify(lista_alunos[i].ra);
            let ano = JSON.stringify(lista_alunos[i].ano);
            let notas = lista_alunos[i].notas;
            let materias = ["TDA","PWEB","Calculo","S.O."]
            document.getElementById("faluno").innerHTML += "Id: "+id+"<br>Nome: "+nome+"<br>Ra: "+ra+"<br>Ano: "+ano+"<br>Notas: ";
            if(notas != undefined){
                for(i=0; i < notas.length; i++){
                    document.getElementById("faluno").innerHTML += materias[i]+": "+notas[i]+"<br>"
                }
            }
            check = true;
            break;
        }
    }
    if (check != true){
        alert("Não existe ou está escrito errado.")
    }
    tabela();
}

//mostra uma tabela com todos os alunos
function tabela(){
    document.getElementById("tabela").innerHTML = "";
    for(i = 0; i < lista_alunos.length; i++){
        let id = i;
        let nome = JSON.stringify(lista_alunos[i].nome);
        let ra = JSON.stringify(lista_alunos[i].ra);
        let ano = JSON.stringify(lista_alunos[i].ano);
        let notas = lista_alunos[i].notas;
        let materias = ["TDA","PWEB","Calculo","S.O."]
        document.getElementById("tabela").innerHTML += "Id: "+id+"<br>Nome: "+nome+"<br>Ra: "+ra+"<br>Ano: "+ano+"<br>Notas: <br>";
        if(notas != undefined){
            for(j=0; j < notas.length; j++){
                document.getElementById("tabela").innerHTML += materias[j]+": "+notas[j]+"<br>";
            }
        } 
        document.getElementById("tabela").innerHTML += "<br>";
    }
    console.log(lista_alunos);
}

