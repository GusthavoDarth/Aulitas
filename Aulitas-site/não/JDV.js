function game(){
    let board = document.querySelector("#jogo");
    let info = document.querySelector("#aviso");
    let estado = document.querySelector("#turno");
    let vez = "X"
    let tabaleiro = ["","","","","","","","",""];
    
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
        let win = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        console.log(allBoxes)
        allBoxes.forEach(array => {
            let xWin = array.every(index => allBoxes[index].firstChild?.classList.contains("circle"))
        })

        if (xWin){
            estado.textContent = "teste"
            allBoxes.forEach(box => box.replaceWith(box.cloneNode(true)))
            return
        }

    }




}



window.onload = game;