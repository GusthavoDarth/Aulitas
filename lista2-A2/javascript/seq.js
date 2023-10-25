let vteste = [16,32,12,15,15,90,"gusthavo",32,]
let v = [];

function entry(){
    let elem = document.getElementById("input").value;
    v.push(elem);
}

function find(){
    let elem = document.getElementById("input").value;
    let quant = 0;
    document.getElementById("show").innerHTML = '';
    for(i=0; i<v.length; i++){
        if(elem == v[i]){
            quant++
            document.getElementById("show").innerHTML += "index: "+i+"<br> content: "+v[i]+"<br><br>";
        }
    }

    if(v.length<1){
        alert("A lista não possui elementos")
    }else if(quant == 1){
        document.getElementById("title").innerHTML = "O elemento: "+elem+" foi achado na seguinte posição.";
    }else if(quant > 1){
        document.getElementById("title").innerHTML = "O elemento: "+elem+" foi achado nas seguintes posições.";
    }else if(elem == null || elem == undefined || elem == ''){
        alert("Escreva algo antes de pesquisar.")
    }else{
        document.getElementById("title").innerHTML = "O elemento: "+elem+" não se encontra no vetor dado.";
    }
}


function show(){
    document.getElementById("sarr").innerHTML = '';
    if(v.length<1){
        alert("A lista não possui elementos")
    } else{
        for(i=0; i<v.length; i++){
            document.getElementById("sarr").innerHTML += "index: "+i+"<br> content: "+v[i]+"<br><br>";
        }
    }
}