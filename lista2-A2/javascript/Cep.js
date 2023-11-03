async function viacep(){
    let infocep = document.getElementById("incep").value;
    let api_url = "https://viacep.com.br/ws/"+infocep+"/json/";

    try{

        const response = await fetch(api_url);
        const data = await response.json();
    
        let datastring = JSON.stringify(data)
        let table = datastring.split(',');


        document.getElementById("data_viacep").innerHTML = "";
        for(i = 0; i < table.length; i++){
            document.getElementById("data_viacep").innerHTML += table[i]+"<br>";

        }
    }catch(error){
        console.log(error)
    }

}