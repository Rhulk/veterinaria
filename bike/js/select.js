console.log('select.js');

const test = document.form.bike.length
const indice = document.form.bike.selectedIndex 
console.log(indice)

function loadImagen(){
    console.log(document.form.idBike.selectedIndex)
    index = document.form.idBike.selectedIndex
    document.getElementById("imgBike").src="imagen/bike/imagen"+index+".jpg";
    //url = document.navegador.secciones.options[document.navegador.secciones.selectedIndex].value
   // if (url != " no") window.location = url;
    
}