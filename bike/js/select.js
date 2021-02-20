console.log('select.js');

const test = document.form.bike.length
const indice = document.form.bike.selectedIndex

const datosTecnicos = document.getElementById("infoTecnica");

let ficha =[
    {
        cuerpo:"Ficha Tecnica: Specialized diseñó el Turbo Levo"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 2"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 3"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 4"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 5"
    }
];




console.log(indice)



function loadBike(){
    document.getElementById("imgBike").src="imagen/bike/imagen"+document.form.idBike.selectedIndex+".jpg";
    info(document.form.idBike.selectedIndex);
}

function info(id){


    const inf = ficha[id-1].cuerpo;
    datosTecnicos.innerHTML = inf;

}
