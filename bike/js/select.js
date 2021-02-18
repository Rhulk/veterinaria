console.log('select.js');

const test = document.form.bike.length
const indice = document.form.bike.selectedIndex 

const horas = document.getElementById('listaHoras');
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
function loadHoras(){

    const htmlHoras = `
    <div class="row text-center mx-0">
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">9:00AM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">9:30AM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">9:45AM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">10:00AM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">10:30AM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">10:45AM</div>
    </div>
</div>
<div class="row text-center mx-0">
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">11:00AM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">11:30AM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">11:45AM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">12:00PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">12:30PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">12:45PM</div>
    </div>
</div>
<div class="row text-center mx-0">
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">1:00PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">1:30PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">1:45PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">2:00PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">2:30PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">2:45PM</div>
    </div>
</div>
<div class="row text-center mx-0">
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">3:00PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">3:30PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">4:15PM</div>
    </div>
    <div class="col-md-2 col-4 my-1 px-2">
        <div class="cell py-1">5:00PM</div>
    </div>
</div>`;
horas.innerHTML = htmlHoras;

}
loadHoras();