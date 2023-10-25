


function game(){
    let board = document.querySelector("#jogo");
    let info = document.querySelector("#aviso");
    let estado = document.querySelector("#turno");
    let vez = "X"
    let tabaleiro = ["","","","","","","","",""];
    let teste = 0;
    
    estado.textContent = "[ O '"+vez+"' começa ]" ;

    let sabo = "circle"

    tabaleiro.forEach((_cell, index) => {
        let caralho = document.createElement("div");
        caralho.classList.add("box");
        caralho.classList.add("borda");
        caralho.id = index;
        caralho.addEventListener("click", add);
        board.append(caralho);
    });



    function add(e){
        let display = document.innerHTML = vez;
        let sei = document.createElement("div")
        sei.classList.add(vez)


        e.target.append(display);
        e.target.append(sei);
        vez = vez === "X" ? "O" : "X";
        
        e.target.removeEventListener("click", add);
        e.target.classList.toggle("borda")
        
        estado.textContent = "[ Vez do '"+vez+"' ]";
        
        saber()
    }
    function saber(){
        let allBoxes = document.querySelectorAll(".box")
        console.log(allBoxes);
        let win = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];

        win.forEach(array => {

            let circlewin = array.every(index =>
                allBoxes[index].textContent == "O")
            let crosswin = array.every(index =>
                allBoxes[index].textContent == "X")


            if (circlewin == true){
                estado.textContent = "[ 'O' venceu ]"
                allBoxes.forEach(box => {
                    box.removeEventListener("click", add)
                    box.classList.remove("borda")
                })
            }else if(crosswin == true){
                estado.textContent = "[ 'X' venceu ]"
                allBoxes.forEach(box => {
                    box.removeEventListener("click", add)
                    box.classList.remove("borda")
                })
            } else teste++; console.log(teste)
            if(teste >= 72){
                estado.textContent = "[ Empate ]"
            }
        })


    }

}

function novogame(){
    location.reload();
}

window.onload = game;
