

let tabuleiro = [[""],[""],[""],[""],[""],[""],[""],[""],[""]]

let winCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let vez = "X"
//checagem de espaços disponiveis
let spaceCheck = 0;

let state = 0;

//pro bot não travar infinitamente
let botCheck = 0;

//delay entre as jogadas
const delay = ms => new Promise(res => setTimeout(res, ms));
async function espere(){
    await delay(200)
    console.log("esperei")
}


//mostra o turno
function turno(){
    vez = vez === "X" ? "O" : "X";
    document.getElementById("turno").textContent = "[ Vez do '"+vez+"' ]";
}

//adiciona um eventListener para cada quadrado
function mesa(){
    document.getElementById("turno").textContent = "[ O '"+vez+"' Começa]";
    for(i = 0; i < 9; i++){
        let cell = document.getElementById(i);
        cell.addEventListener("click", add)
    }
}

//ativa quando acontece um click
function add(pos){
    pos.target.classList.remove("borda");
    pos.target.textContent = vez;
    index = pos.target.id;
    pos.target.removeEventListener("click", add);
    tabuleiro[index] = vez

    turno();
    winCon();

    if(document.getElementById("Easy").checked == true && winCombo != true){
        easybot();
    }
}

function bot(move){
    document.getElementById(move).textContent = vez;
    document.getElementById(move).removeEventListener("click", add)
    document.getElementById(move).classList.remove("borda")
    tabuleiro[move] = vez;
}


// bot facil
async function easybot(){
    let move = Math.floor(Math.random()*9)    
    botCheck++
    if(tabuleiro[move] == ""){
        await espere();
        bot(move);
        turno();
        winCon();
    } else if (botCheck <=18){
        easybot();
    }
} 

//bafomeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
// function hardbot(){
//     let move;
//     let bestscrore = -Infinity;

//     for(let i=0; i<9; i++){
//         if(tabuleiro[i] == ''){
//             tabuleiro[i] = 'O'
//             let score = minimax(tabuleiro, 0, true);
//             winCon()
//             console.log(state)
//             tabuleiro[i] = ''
//             if(score > bestscrore){
//                 bestscrore = score;
//                 move = [i];
//             }
//         }
//     }

//     bot(move)
//     turno();
//     winCon();
// }



// function minimax(tabuleiro, ismax){
//     let result = state;
//     if(result !== null){
//         return score = state;

//     }
//     if(ismax == true){
//         let bestscrore = -Infinity;
//         for(let i=0; i<9; i++){
//             if(tabuleiro[i] == ''){
//                 tabuleiro[i] = 'O'
//                 let score = minimax(tabuleiro, false);
//                 console.log(score)
//                 tabuleiro[i] = ''
//                 if(score > bestscrore){
//                     bestscrore = score;
//                 }
//             }
//         }
//         return bestscrore;
//     } else {
//         let bestscrore = Infinity;
//         for(let i=0; i<9; i++){
//             if(tabuleiro[i] == ''){
//                 tabuleiro[i] = 'X'
//                 let score = minimax(tabuleiro, true);
//                 tabuleiro[i] = ''
//                 if(bestscrore < score){
//                     bestscrore;
//                 }
//             }
//         }
//         return bestscrore;
//     }
// }



//checa se o tabuleiro tem algum vencendor
function winCon(){
    spaceCheck++

    if(spaceCheck == 9){
        document.getElementById("turno").textContent = "[ Empate ]";
        state = 0;
    }
    winCombo.forEach(arr => {
        let circleWin = arr.every(index => tabuleiro[index] == "O");
        let crossWin = arr.every(index => tabuleiro[index] == "X");
        
        if(crossWin == true || circleWin == true){
            for(i=0; i<9; i++){
                document.getElementById(i).removeEventListener("click", add);
                document.getElementById(i).classList.remove("borda");
            }
            if(crossWin == true){
                document.getElementById("turno").textContent = "[ 'X' Ganhou! ]";
                state = -1;
            } else {
                document.getElementById("turno").textContent = "[ 'O' Ganhou! ]";
                state = 1;
            }
        }
    });
}

window.onload = mesa;