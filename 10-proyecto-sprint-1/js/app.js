var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
     var usuarioA = prompt("Ingrese Nombre Usuario:");
   var puntoTecnicoA = prompt("Ingrese puntos técnicos:");
   var puntoHseA = prompt("Ingrese puntos de HSE:");
    
  function estudiante(usuario,puntoTecnico,puntoHse){
        this.usuario=usuario;
        this.puntoTecnico=puntoTecnico;
        this.puntoHse=puntoHse;
    
    }
    var informacion = new estudiante(usuarioA,puntoTecnicoA,puntoHseA);
    estudiantes.push(informacion);
    console.log(estudiantes);
    return informacion;
    
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.usuario + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntoTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntoHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var acumular = "";
    for(var i in estudiantes){

       acumular += mostrar(estudiantes[i]);

    }
    console.log("acumular"+acumular);
    return acumular;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var minuscula = nombre.toLowerCase();
    var encontre = [];
    for(var i in estudiantes){
        if(minuscula == estudiantes[i].usuario.toLowerCase())
        {
            encontre = estudiantes[i];
        }
    }
    console.log(encontre);
    return encontre;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    
}