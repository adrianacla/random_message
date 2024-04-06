let listNombre = ["yo", "tu", "el", "si", "universo", "Diosito"];
let listBonito = ["soy", "eres", "te quiere"];
let listFin = ["muy pro", "demasiado", "bello", "genial"];

function randomMessage(){

}

function generateIndex(){
    let index1= Math.floor(Math.random() * (listNombre.length));
    let index2= Math.floor(Math.random() * (listBonito.length));
    let index3= Math.floor(Math.random() * (listFin.length));

    return [index1, index2, index3]
}

console.log(generateIndex())