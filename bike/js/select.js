console.log('select.js');

const test = document.form.bike.length
const indice = document.form.bike.selectedIndex 




console.log(indice)



function loadImagen(){
    document.getElementById("imgBike").src="imagen/bike/imagen"+
    document.form.idBike.selectedIndex
    +".jpg";
    //url = document.navegador.secciones.options[document.navegador.secciones.selectedIndex].value
   // if (url != " no") window.location = url;
    // loadDescripcion ?
}
// cargamos las horas desde js
