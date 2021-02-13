
const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const form = document.getElementById('form-modal');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const tituloModal = document.getElementById('exampleModalLabel');

console.log(" Mascotas ");

let mascotas =[
    {
        indice:"",
        tipo: "Gato",
        nombre: "mancas",
        dueno: "Esteban"
    },
    {
        indice:"",
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
            <button type="button" class="btn btn-info editar" onclick=editar(${index}) data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="far fa-edit"> </i></button>
            <button type="button" class="btn btn-danger" onclick=borrar(${index})> <i class="far fa-trash-alt"></i></button>
          </div>  
    </td>
  </tr>`).join("");
  listaMascotas.innerHTML = htmlMascotas;
 // Array.from(document.getElementsByClassName('editar')).forEach((botonEditar)=>botonEditar.onclick= editar)
}
listarMascotas();

function enviarDatos(evento){
    evento.preventDefault();
    console.log('Evento',evento);
    console.log(indice.value);
    if(indice.value !== ""){
        console.log('indice');
        console.log(indice.value);

        console.log(mascotas[indice.value]);
        
        mascotas[indice.value].indice =indice.value;
        mascotas[indice.value].tipo =tipo.value;
        mascotas[indice.value].nombre =nombre.value;
        mascotas[indice.value].dueno =dueno.value;

    }else{
        const datos ={
            indice: indice.value,
            tipo: tipo.value,
            nombre: nombre.value,
            dueno: dueno.value
        }
        console.log(datos);
        mascotas.push(datos);
    }
    indice.value= "";
    tipo.value= "Tipo de animal";
    nombre.value="";
    dueno.value= "Dueño";
    listarMascotas();
    btnGuardar.innerHTML='Guardar';
    tituloModal.innerHTML='Nueva Mascota';
}
function editar(index){
    btnGuardar.innerHTML='Editar';
    tituloModal.innerHTML='Modificar datos mascota';
    console.log(mascotas[index]);
    tipo.value = mascotas[index].tipo;
    nombre.value = mascotas[index].nombre;
    dueno.value = mascotas[index].dueno;
    indice.value = index;
    document.getElementById("nombre").placeholder = "Nombre de la mascota...";
    //console.log(indice.value);
}
function borrar(index){
    console.log(index);
    mascotas.splice(index,1);
    console.log('Eliminado');
    listarMascotas();
}

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;