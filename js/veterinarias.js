
const listaVeterinarios = document.getElementById('lista-veterinarios');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const form = document.getElementById('form-modal');
const btnGuardar = document.getElementById('btn-guardar');
const indice = document.getElementById('indice');
const tituloModal = document.getElementById('exampleModalLabel');


let veterinarios =[
    {
        indice:"",
        nombre: "Fran",
        apellido: "blanco",
        pais: "España"
    },
    {
        indice:"",
        nombre: "Juan",
        apellido: "Jara",
        pais: "Francia"
    }
];

function listarVeterinarios(){
    const htmlveterinarios = veterinarios.map((veterinario, index) => `<tr>
    <th scope="row">${index}</th>
    <td>${veterinario.nombre}</td>
    <td>${veterinario.apellido}</td>
    <td>${veterinario.pais}</td>
    <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info editar" onclick=editar(${index}) data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="far fa-edit"> </i></button>
            <button type="button" class="btn btn-danger" onclick=borrar(${index})> <i class="far fa-trash-alt"></i></button>
          </div>  
    </td>
  </tr>`).join("");
  listaVeterinarios.innerHTML = htmlveterinarios;
 // Array.from(document.getElementsByClassName('editar')).forEach((botonEditar)=>botonEditar.onclick= editar)
}
listarVeterinarios();

function enviarDatos(evento){
    evento.preventDefault();
    console.log('Evento',evento);
    console.log(indice.value);
    if(indice.value !== ""){
        console.log('indice');
        console.log(indice.value);

        console.log(veterinarios[indice.value]);
        
        veterinarios[indice.value].indice =indice.value;
        veterinarios[indice.value].nombre =nombre.value;
        veterinarios[indice.value].apellido =apellido.value;
        veterinarios[indice.value].pais =pais.value;

    }else{
        const datos ={
            indice: indice.value,
            nombre: nombre.value,
            apellido: apellido.value,
            pais: pais.value
        }
        console.log(datos);
        veterinarios.push(datos);
    }
    indice.value= "";
    nombre.value= "";
    apellido.value="";
    pais.value= "Pais";
    listarVeterinarios();
    btnGuardar.innerHTML='Guardar';
    tituloModal.innerHTML='Nuev@ veterinari@';
}
function editar(index){
    btnGuardar.innerHTML='Editar';
    tituloModal.innerHTML='Modificar datos veterinario';
    console.log(veterinarios[index]);
    nombre.value = veterinarios[index].nombre;
    apellido.value = veterinarios[index].apellido;
    pais.value = veterinarios[index].pais;
    indice.value = index;
    document.getElementById("nombre").placeholder = "Nombre del veterinario...";
    //console.log(indice.value);
}
function borrar(index){
    console.log(index);
    veterinarios.splice(index,1);
    console.log('Eliminado');
    listarVeterinarios();
}

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;