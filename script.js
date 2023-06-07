
// array para la listar las tareas
const arrTareas = [];

// Obtener la data de los inputs
let nombreInput = document.getElementById('nombreInput');
let tareaInput =  document.getElementById('tareaInput');
let btnAgregar = document.getElementById('agregarTarea')
let listaTereas = document.getElementById('listaTareas')


// // funcion para renderizar
function renderizarTareas(){
  listaTereas.innerHTML = "";

  arrTareas.forEach((tarea , index)=>{
    // creamos el contenedor para la data
    let itemTarea = document.createElement('div');

    // creamos la data concatenada
    let textoTarea = document.createElement('span');
    textoTarea.innerText = tarea.nombre + " " + tarea.tarea + " ";


    // creamos icono eleiminar
    let eliminarTareas = document.createElement('img');
      eliminarTareas.src = "./imagenes/eliminarIcon.png";
      eliminarTareas.width = 15

      eliminarTareas.addEventListener("click", ()=>{
        eliminarTarea(index);
      })

      
    itemTarea.appendChild(textoTarea);
    itemTarea.appendChild(eliminarTareas);

    listaTereas.appendChild(itemTarea);
  })

}

function eliminarTarea(index){

  // Eliminar del arrayt
  arrTareas.splice(index,1);

  // remderizar en el dom
  renderizarTareas();

  // mostrar en cosola el array de ojetos
    console.log(arrTareas);
}

function agregarTarea(event){
  event.preventDefault();
  let nombre = nombreInput.value;
  let tarea = tareaInput.value;

  // validar que los inputs tengan datos
  if(nombre == "" || tarea == "" ){
    alert("Debes ingresar el nombre o la tarea.")
    return;
  } 

  // Objeto para cada tarea
  let objtTarea = {
    nombre: nombre,
    tarea: tarea
  };

  // agregamos cada objeto en el array
  arrTareas.push(objtTarea)

  // Limpiamos los inputs
  nombreInput.value = "";
  tareaInput.value = "";

  // remderizar en el dom
  renderizarTareas();

  // mostrar en cosola el array de ojetos
    console.log(arrTareas);
}

btnAgregar.addEventListener('click', agregarTarea)