let listAfirm = ["Eres hermos@", "Eres imporante", "Eres valioso"];
let listRemember = ["cuidarte a ti mism@", "consentirte y tratare bien", "siempre tratare bien"];
let listFin = ["Diosito te quiere mucho", "el universo está contigo", "todo te va a salir bien"];

function randomMessage(){
    const listOfIndex = generateIndex();
    return listAfirm[listOfIndex[0]] + ", recuerda " + listRemember[listOfIndex[1]] + ", " + listFin[listOfIndex[2]] + "."
}

function generateIndex(){
    let index1= Math.floor(Math.random() * (listAfirm.length));
    let index2= Math.floor(Math.random() * (listRemember.length));
    let index3= Math.floor(Math.random() * (listFin.length));

    return [index1, index2, index3]
}

console.log(randomMessage());