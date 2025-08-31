
// LOCALSTORAGE:nombre

// Mostrar si ya había un nombre guardado antes
//Si en localStorage existe un valor para la clave 'nombre' (es decir, no es null) se ejecuta lo siguiente
if(localStorage.getItem("nombre")){
    /*Document se refiere al html, siendo de este que con getElementById 
    busca el ID que estara con saludo y con textcontent cambiara el párrafo 
    que se encontraba allí*/
    //LocalStorage-getItem va obtener el nombre obtenido en el siguientes lineas de texto
    document.getElementById("saludo").textContent =
    "¡Hola de nuevo, " + localStorage.getItem("nombre") + "!";
}

// Guardar nombre en localStorage
/*Busca en el HTML el elemento con id 'guardarNombre' (que es el botón). Con 'addEventListener'
 se agrega un evento para que, cuando se haga clic, se ejecute la función que está dentro de { }.*/
document.getElementById("guardarNombre").addEventListener("click", function(){
  // Crea la variable 'nombre' y guarda dentro el valor que escribió el usuario en el input con id 'nombre'
  let nombre = document.getElementById("nombre").value;
  //LocalStorage que sirve para guardar los datos  
  // setitem es el método que usamos para guardar ("Clave", variable a guardar)
  localStorage.setItem("nombre", nombre);
  document.getElementById("saludo").textContent = "¡Hola, " + nombre + "!";
});

//SESSIONSTORAGE:color favorito

// Mostrar si ya había un color guardado en esta sesión
if(sessionStorage.getItem("color")){
  document.getElementById("mensajeColor").textContent =
    "Tu color fav en esta sesión es: " + sessionStorage.getItem("color");
}

// Guardar color en sessionStorage
document.getElementById("guardarColor").addEventListener("click", function(){
  let color = document.getElementById("color").value;
  sessionStorage.setItem("color", color);
  document.getElementById("mensajeColor").textContent =
    "Tu color favorito en esta sesión es: " + color;
});
