
const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const form = document.getElementById('form-modal');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');

console.log(" Mascotas ");

let mascotas =[
    {
        tipo: "Gato",
        nombre: "mancas",
        dueno: "Esteban"
    },
    {
        tipo: "Gato",
        nombre: "mancas",
        dueno: "Esteban"
    }
];

function listarMascotas(){
    const htmlMascotas = mascotas.map((mascota, index) => `<tr>
    <th scope="row">${index}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" data-indice=${index}> <i class="far fa-edit"> </i></button>
            <button type="button" class="btn btn-danger"> <i class="far fa-trash-alt"></i></button>
          </div>  
    </td>
  </tr>`).join("");
  listaMascotas.innerHTML = htmlMascotas;
  Array.from(document.getElementsByClassName('editar')).forEach((botonEditar)=>botonEditar.onclick= editar)
}
listarMascotas();

function enviarDatos(evento){
    evento.preventDefault();
    console.log('Evento',evento);
    const datos ={
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    }
    mascotas.push(datos);
    listarMascotas();
}
function editar(evento){
    console.log('Funcion editar');
}

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;