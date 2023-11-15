let sortv = [];
let check = 0
function add(){
    let value = document.getElementById("input").value;
    sortv.push(value);
}


function sort(){
    check = 0
    for(j = 0; j < sortv.length ; j++){
        for(i = 0; i < sortv.length ; i++){
            if(sortv[i]>sortv[i+1]){
                let temp = sortv[i];
                sortv[i] = sortv[i+1]
                sortv[i+1] = temp
                check++
            }
        }
    }
    console.log(check)
}


function sort2(){
    let size = sortv.length
    let maior = sortv[i]
    let menor = sortv[i]
    for(i= 0; i < size; i++){
        if(maior < sorv[i]){
            maior = sortv[i];
            let temp = sortv[i];
            sortv[i] = sortv[i+1]
            sortv[i+1] = temp
        }
        if(menor > sorv[i]){
            menor = sortv[i];
        }
    }
}