
function busca(){
    let v = [0,5,2,3,4,1,6,7,18]

    let n = document.getElementById("input").value;
     
    for (let i = 0; i<=v.length; i++){
        if (v[i] == n){
            alert("O número:"+n+" está no vetor: "+ i)
            break;
        } 
        else if (i == v.length){
         alert("O número não se encontra no vetor.")
        }
    }
}