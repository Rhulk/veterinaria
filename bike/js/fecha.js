console.log(' fecha.js');
const horas = document.getElementById('listaHoras');
const fecha = document.getElementById("dp1").value;
console.log(fecha);

const input = document.querySelector('input');

input.addEventListener('change', updateValue);

function updateValue(e) {
  console.log('Change Fecha');
}
function cambiaDefecto(){
    console.log('input');
}

$(document).ready(function(){

    $('.datepicker').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    startDate: '0d'
    });
    
    $('.cell').click(function(){
    $('.cell').removeClass('select');
    $(this).addClass('select');
    });
    
    });


    function loadHoras(){

        const htmlHoras = `
        <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="900" onclick="getHora(this.id)"  class="cell py-1">9:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="930" onclick="getHora(this.id)" class="cell py-1">9:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="945" onclick="getHora(this.id)" class="cell py-1">9:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1000" onclick="getHora(this.id)" class="cell py-1">10:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1030" onclick="getHora(this.id)" class="cell py-1">10:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1045" onclick="getHora(this.id)" class="cell py-1">10:45AM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1100" onclick="getHora(this.id)" class="cell py-1">11:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1130" onclick="getHora(this.id)" class="cell py-1">11:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1145" onclick="getHora(this.id)" class="cell py-1">11:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1200" onclick="getHora(this.id)" class="cell py-1">12:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1230" onclick="getHora(this.id)" class="cell py-1">12:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1245" onclick="getHora(this.id)" class="cell py-1">12:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="100" onclick="getHora(this.id)" class="cell py-1">1:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="130" onclick="getHora(this.id)" class="cell py-1">1:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="145" onclick="getHora(this.id)" class="cell py-1">1:45PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="200" onclick="getHora(this.id)" class="cell py-1">2:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="230" onclick="getHora(this.id)" class="cell py-1">2:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="245" onclick="getHora(this.id)" class="cell py-1">2:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="300" onclick="getHora(this.id)" class="cell py-1">3:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="330" onclick="getHora(this.id)" class="cell py-1">3:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="415" onclick="getHora(this.id)" class="cell py-1">4:15PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="500" onclick="getHora(this.id)" class="cell py-1">5:00PM</div>
        </div>
    </div>`;
    horas.innerHTML = htmlHoras;
    
    }
    function clearHoras(){

        const htmlHoras = ``;
        horas.innerHTML = htmlHoras;
        console.log(document.getElementById("listaHoras").className);
        document.getElementById("listaHoras").className ="";
        //document.getElementById("listaHoras").classList.add('class');
    }

    loadHoras();
    function getHora(id){
        console.log(document.getElementById("dp1").value);
        console.log(document.getElementById(id).textContent);
        clearHoras();
    }
    