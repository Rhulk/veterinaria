
const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const form = document.getElementById('form-modal');
const btnGuardar = document.getElementById('btn-guardar');

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
    const htmlMascotas = mascotas.map((mascota, indice) => `<tr>
    <th scope="row">${indice}</th>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info"> <i class="far fa-edit"> </i></button>
            <button type="button" class="btn btn-danger"> <i class="far fa-trash-alt"></i></button>
          </div>  
    </td>
  </tr>`).join("");
  listaMascotas.innerHTML = htmlMascotas;
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


form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;