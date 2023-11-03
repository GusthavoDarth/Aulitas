let numeros = [];
let arr = [];
let cartelas = [];
let numsort = 0;
let tamanho = 0;
let nums = 0;
let cartquant = 0;

//Criação da cartelas
function criar(){
    numeros = [];
    arr = [];
    cartelas = [];
    document.getElementById("button1").addEventListener("click", sort)
    document.getElementById("numsort").innerHTML = "";
    document.getElementById("cartela").innerHTML = "";
    cartquant = parseInt(prompt("Quantas cartelas?"));
    nums = parseInt(prompt("Quantos números em cada cartela?"));
    tamanho = cartquant*nums;
    let canvas = document.getElementById("cartela");

    for(i=0;i<cartquant;i++){
        let div = document.createElement("div");
        let br = document.createElement("br");
        let label = document.createElement("p")
        label.textContent = "Cartela "+(i+1);
        div.setAttribute("class","row");
        div.setAttribute("id",i);
        canvas.appendChild(label);
        canvas.appendChild(div);
    }
    cartela();
}

//Cria a uma array com a quantidade de cartelas
function cartela(){
    for(i=1;i<=tamanho;i++){
        numeros.push(i);
        arr.push(i);
    }
    for(i=0;i<cartquant;i++){
        let cartela = [];
        let cell = document.getElementById(i);
        for(j=0;j<nums;j++){
            let num = Math.floor(Math.random() * arr.length);
            let div = document.createElement("div");

            cartela.push(arr[num]);
            arr.splice(num,1);

            div.innerHTML = cartela[j];
            div.setAttribute("class","block");
            div.classList.add(cartela[j]);
            cell.appendChild(div);
        }
        cartelas.push(cartela)
    }
}

//Pega um numero aleario não usado ainda
function sort(){
    let num = Math.floor(Math.random() * numeros.length);
    numsort = numeros[num];
    numeros.splice(num,1);
    document.getElementById("numsort").innerHTML += numsort+ ", ";
    check();
}

//cheaca todas as cartela e avisa qual cartela da bingo
function check(){
    for(i=0; i<cartquant; i++){
        let arr = cartelas[i]
        for(j=0; j<=nums; j++){

            if(arr[j] == numsort){
                arr.splice(j,1)
                let a = document.getElementsByClassName(numsort)
                a[0].style.backgroundColor = "#32582e";
            }
        }
        if(arr.length == 0){
            document.getElementById("info").innerHTML = "BINGO NA CARTELA "+(i+1);
            let button = document.getElementById("button1");
            button.removeEventListener("click",sort)
            break;
        } 
    }
}