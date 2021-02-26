var idioma =document.getElementById("mostrarIdioma");

loadIdioma();
function loadIdioma(){
    console.log('load_Idioma');
    document.getElementById("mostrarIdioma").textContent=sessionStorage.getItem(idioma);
}


function getIdioma(id){
    console.log(id+' getIdioma');
    document.getElementById("mostrarIdioma").textContent = document.getElementById(id).textContent; // Mostramos el idioma seleccionado
    sessionStorage.setItem(idioma, document.getElementById("mostrarIdioma").textContent = document.getElementById(id).textContent );
}