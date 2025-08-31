let tareas = [];

    // --- Cargar tareas guardadas al inicio ---
    //Se busca si ya hay tareas guardadas en LocalStorage considerando la clave "tareas"
    if(localStorage.getItem("tareas")){
      //El JSON.parse convierte en un arreglo de objetos
      tareas = JSON.parse(localStorage.getItem("tareas"));
      mostrarTareas();
    }

    // --- Agregar tarea ---
    /*document identica el html seguidamente el get busca el id agregarBtn y espera el evento de cuando
    se da click ejecuta lo siguiente */
    
    document.getElementById("agregarBtn").addEventListener("click", () => {
        //Toma el contenido que el usuario escribió dentro de ese cuadro de texto
      let texto = document.getElementById("tareaInput").value;
      //Si la condición se cumple (el texto está vacío), return termina la función inmediatamente
      if(texto === "") return;
       /*nuevaTarea es un objeto que representa una tarea.
       texto lo que se escribio y false por que aun no se completa */
      let nuevaTarea = { 
        //el primero es nombre de la propiedad, el segundo es variable que tiene el valor
        descripcion: texto, 
        completada: false 
      };
      /*tareas es un arreglo que contiene todas las tareas que tienes hasta ahora
      push(nuevaTarea) agrega la nueva tarea al final del arreglo.
      Después de esto, tareas tiene todas las tareas antiguas más la nueva. */
      tareas.push(nuevaTarea);
      //JSON.stringify(tareas) convierte el arreglo de objetos en un texto JSON
      //Se guarda el texto bajo la clave tareas
      localStorage.setItem("tareas", JSON.stringify(tareas));
      //Limpia el cuadro de texto donde escribiste la tarea.
      document.getElementById("tareaInput").value = "";
      mostrarTareas();
    });

    // --- Mostrar tareas ---
    function mostrarTareas(){
      let lista = document.getElementById("listaTareas");
      //borra todo lo que había dentro del <ul>
      lista.innerHTML = "";
        //.forEach() es un método de los arreglos que recorre cada elemento uno por uno
      tareas.forEach((t, index) => {
        //"li" → etiqueta HTML (list item).
        let li = document.createElement("li");
        //t es la tarea actual en el arreglo tareas
        li.textContent = t.descripcion;
        //JavaScript puede leer o modificar las clases de un elemento usando classList
        if(t.completada) li.classList.add("completada");

        // Marcar completada
        li.addEventListener("click", () => {
        //Entonces esta línea invierte el estado de completada cada vez que haces clic
          tareas[index].completada = !tareas[index].completada;
          //convierte el arreglo de objetos en un texto que se puede 
          // guardar, porque localStorage solo guarda texto.
          localStorage.setItem("tareas", JSON.stringify(tareas));
          mostrarTareas();
        });

        // Botón eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "50px";
        btnEliminar.addEventListener("click", () => {
        /*splice() es un método de los arreglos que permite:
        Eliminar elementos
        Agregar elementos 
        index → posición de la tarea que quieres eliminar*/
          tareas.splice(index, 1);
          localStorage.setItem("tareas", JSON.stringify(tareas));
          mostrarTareas();
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
      });
    }