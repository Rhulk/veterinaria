var idioma =document.getElementById("mostrarIdioma");

loadIdioma();
function loadIdioma(){
    console.log('load_Idioma');
    document.getElementById("mostrarIdioma").textContent=sessionStorage.getItem(idioma);
    setByIdioma(sessionStorage.getItem(idioma));
}


function getIdioma(id){
    console.log(id+' getIdioma');
    document.getElementById("mostrarIdioma").textContent = document.getElementById(id).textContent; // Mostramos el idioma seleccionado
    sessionStorage.setItem(idioma, document.getElementById("mostrarIdioma").textContent = document.getElementById(id).textContent );
    setByIdioma(sessionStorage.getItem(idioma));
}
function setByIdioma(idioma_){


    switch (idioma_) {
        case 'Castellano':
            document.getElementById("id_alquiler").textContent ="Alquiler Bike";
            document.getElementById("id_tarifas").textContent ="Tarifas";
            document.getElementById("id_rutas").textContent = "Rutas";
            document.getElementById("id_contacto").textContent = "Contacto";
            document.getElementById("navbarDropdown").textContent = "Idioma";
          break;
        case 'Ingles':
            document.getElementById("id_alquiler").textContent ="Bike Rental";
            document.getElementById("id_tarifas").textContent ="Rates";
            document.getElementById("id_rutas").textContent = "Routes";
            document.getElementById("id_contacto").textContent = "Contact";
            document.getElementById("navbarDropdown").textContent = "Language";
          break;
        
        case 'Frances':
            document.getElementById("id_alquiler").textContent ="Location de vélos";
            document.getElementById("id_tarifas").textContent ="Tarifs";
            document.getElementById("id_rutas").textContent = "Itinéraires";
            document.getElementById("id_contacto").textContent = "Contact";
            document.getElementById("navbarDropdown").textContent = "Langue";
            break;
        case 'Aleman':
            document.getElementById("id_alquiler").textContent ="Fahrradverleih";
            document.getElementById("id_tarifas").textContent ="Preise";
            document.getElementById("id_rutas").textContent = "Routen";
            document.getElementById("id_contacto").textContent = "Kontakt";
            document.getElementById("navbarDropdown").textContent = "Sprache";
            break;
        case 'Portugues':
            document.getElementById("id_alquiler").textContent ="Aluguer de bicicletas";
            document.getElementById("id_tarifas").textContent ="Tarifas";
            document.getElementById("id_rutas").textContent = "Rotas";
            document.getElementById("id_contacto").textContent = "Contacto";
            document.getElementById("navbarDropdown").textContent = "Língua";
            break;
        default:
          console.log(idioma+' No recuperado idioma');
          break;
      }
}