const// Variables
  input = document.getElementById('inputAgregar'),
  formularioAgregar = document.getElementById('formularioAgregar'),
  itemList = document.getElementById('container-item-solo'),
  checkFirst = document.querySelector('.agregar__input--first'),
  clearAll = document.querySelector('span#clearAll');


// Agregar elemento desde input
formularioAgregar.addEventListener('submit', (e) => {
  e.preventDefault();
  const nuevaTarea = {
    id: generateUUID(),
    titulo: input.value,
    check: checkFirst.checked
  };
  itemList.appendChild(crearNuevaTareaDOM(nuevaTarea));
  guardarTareaLocalStorage(nuevaTarea);
  input.value = '';
});
// Agregar elementos que se encuentran el localStorage
const cargaRapida = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const itemsLS = recibirValoresLocalStorage();
    const fragmentNewItems = document.createDocumentFragment();
    itemsLS.forEach((element) => {
      const divFuncion = crearNuevaTareaDOM(element);
      fragmentNewItems.appendChild(divFuncion);
    });

    itemList.appendChild(fragmentNewItems);
    // eliminarElementoDomLs()
  });
}
cargaRapida();


//Crear Elemento HTML
const crearNuevaTareaDOM = function (nuevaTarea) {
  const elementoDiv = document.createElement('div');
  elementoDiv.className = 'item';
  // elementoDiv.setAttribute("id", nuevaTarea.id);
  elementoDiv.innerHTML = `
    <div class="agregar__container">
      <label class="agregar__checkbox">
        <input class="agregar__input" type="checkbox">
        <span class="agregar__span"></span>
        </input>
      </label>
      <a class="agregar__link" href="#">${nuevaTarea.titulo}</a>
    </div>
    <a class="agregar__link-icon" href="#">
      <img class="agregar__icon" src="images/icon-cross.svg" alt="clear">
    </a>
  `;
  // Variables elemento div.item
  const decoracionTexto = elementoDiv.querySelector('.agregar__link'),
    check = elementoDiv.querySelector('.agregar__input');
  // Agregar check o noCheck
  if (nuevaTarea.check) {
    decoracionTexto.classList.add('agregar__link--decoration');
    check.setAttribute('checked', true);
  }

  const del = elementoDiv.querySelector('.agregar__link-icon');
  del.addEventListener('click', eliminarElementoDomLs(elementoDiv, nuevaTarea.id) );

  // Agregar lineTought
  check.addEventListener('click', manejarCheckEnTareasAgregadas(decoracionTexto, nuevaTarea.id) );
  return elementoDiv;
}

function eliminarElementoDomLs (elementoDiv, id) {
  return function () {
    elementoDiv.remove();
    eliminarTareaLs(id);
  }
}

function eliminarTareaLs(id) {
  const recibirValores = recibirValoresLocalStorage();
  const indexValor = recibirValores.findIndex(tarea => tarea.id === id); // Busca el primer valor en base a una condición devolviendo el indice del array sino consigue devuelve -1
  recibirValores.splice(indexValor, 1);
  guardarTareasLocalStorage(recibirValores);
}

function manejarCheckEnTareasAgregadas(decoracionTexto, id) {
  return function () {
    decoracionTexto.classList.toggle('agregar__link--decoration');
    actualizarTareaLocalStorage(id);
  }
}

function actualizarTareaLocalStorage(id) {
  const items = recibirValoresLocalStorage(),
    item = items.find(tarea => tarea.id === id),
    itemIndex = items.findIndex(tarea => tarea.id === id);

  item.check = item.check ? false : true;
  items[itemIndex] = item;
  guardarTareasLocalStorage(items);
}

// Guardar objeto en array
function guardarTareaLocalStorage(nuevaTarea) {
  const itemsListLS = recibirValoresLocalStorage();
  itemsListLS.push(nuevaTarea);
  localStorage.setItem(ITEMS_PROPS_LS, JSON.stringify(itemsListLS)); // Sobreescribir LS de items
}

function guardarTareasLocalStorage(arrayTareas) {
  localStorage.setItem(ITEMS_PROPS_LS, JSON.stringify(arrayTareas)); // Sobreescribir LS de items
}

// Reconvertir de JSON a objeto
const recibirValoresLocalStorage = () => {
  if (!localStorage.getItem(ITEMS_PROPS_LS)) guardarTareasLocalStorage([]);
  const parse = JSON.parse(localStorage.getItem(ITEMS_PROPS_LS));
  return parse;
}
// Eliminar todos los elementos de la lista // FALTA VOLVER MENOS LARGO
clearAll.addEventListener('click', function () {
  const items = this.closest('.items-list-all');
  const hijoItem = items.querySelector('#container-item-solo');
  const itemDelAll = hijoItem.querySelectorAll('div.item');
  itemDelAll.forEach(element => {
    element.remove();
  });
});


function generateUUID() {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(character) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt/16);
    return (character == "x" ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}


// Prueba eliminar elementos del dom y ls

  // Capturar ID
  // Eliminar dom


// function eliminarElementoDomLs () {
//   const del = document.querySelectorAll('.agregar__link-icon');
//   const recibirValores = recibirValoresLocalStorage();
//   del.forEach(function (element) {
//     element.addEventListener('click', function () {
//       const delPadre = this.closest('.item');
//       const atributo = delPadre.getAttribute('id');
//       const ifAtributo = recibirValores.findIndex(tarea => tarea.id === atributo); // Busca el primer valor en base a una condición devolviendo el indice del array sino consigue devuelve -1
//       recibirValores.splice(ifAtributo,1);
//       guardarTareasLocalStorage(recibirValores)
//       delPadre.remove();
//     });
//   });
// }


// items.find(tarea => tarea.id === id); // Busca el primer valor en base a una condición sino consigue devuelve undefined
// items.filter(tarea => tarea.id === id); // Busca los valores en base a una condición sino consigue devuelve array vacio
