function jogo(){
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    Math.random()
        
    if(p1 == p2){
            document.getElementById("info").innerHTML = "Empate"
    }else if(p1 == "Pedra"){
        if(p2 == "Tesoura"){
            document.getElementById("info").innerHTML = p1+" Ganhou"
        } else {
            document.getElementById("info").innerHTML = p2+" Ganhou"
        }
    }else if(p1 == "Papel"){
        if(p2 == "Pedra"){
            document.getElementById("info").innerHTML = p1+" Ganhou"
        } else {
            document.getElementById("info").innerHTML = p2+" Ganhou"
        }
    }else if(p1 == "Tesoura"){
        if(p2 == "Papel"){
            document.getElementById("info").innerHTML = p1+" Ganhou"
        } else {
            document.getElementById("info").innerHTML = p2+" Ganhou"
        }
    }

}