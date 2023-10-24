// xhr = new XMLHttpRequest();
// console.log(xhr);

// xhr.onreadystatechange = function(){
//       if(xhr.readyState == 4 && xhr.status == 200){
//             let response = JSON.parse(xhr.responseText);
//             console.log(response);
//       }
// }

// xhr.open("GET","/locadoraCarros.Json",true)
// xhr.send();


async function catchJujuba(){
    const response = await fetch("/Aulitas-site/Image/juju.png");
    const blob = await response.blob();
    document.getElementById("jujuba").src = URL.createObjectURL(blob);
}

catchJujuba()
// .then(response =>{
//     console.log("foi jujuba")
// })
// .catch(ERROR =>{
//     console.log(ERROR);
//     console.log("ERROR");
// });



async function catchTexto(){
    const response = await fetch("/Cores.txt");
    const texto = await response.text();
    document.getElementById("texto").innerText = texto; 
}

catchTexto()
// .then(response =>{
//     console.log("foi texto")
// })
// .catch(ERROR =>{
//     console.log(ERROR);
//     console.log("ERROR");
// });



const filenames = [
    "/Aulitas-site/Image/juju.png",
    "/Aulitas-site/Image/todynho.png"
]
async function catchImagens(filenames){
    for(let filename of filenames){
        const response = await fetch(filename);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.width = "250";
        document.getElementById("images").append(img);
  
    }
}

catchImagens(filenames)
// .then(response =>{
//     console.log("foi imagens")
// })
// .catch(ERROR =>{
//     console.log(ERROR);
//     console.log("ERROR");
// });


// data teste: /Aulitas-site/DataTypes/csv/test.csv
// data real : ZonAnn.Ts+dSST.csv
// data test : Sample-Spreadsheet-100-rows.csv


async function readData(){
    let teste = "/Aulitas-site/DataTypes/csv/test.csv";
    let real = "/Aulitas-site/DataTypes/csv/ZonAnn.Ts+dSST.csv";
    const response = await fetch(teste);
    const data = await response.text();
    
    const table = data.split("\n").slice(1);
    console.log();
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        const temp = columns[1];
        document.getElementById("table").innerText += year+" "+temp+"\n";
        console.log(year,temp);    
    });
}