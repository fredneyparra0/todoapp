const// Variables
  input = document.getElementById('inputAgregar'),
  formularioAgregar = document.getElementById('formularioAgregar'),
  itemList = document.getElementById('container-item-solo'),
  checkFirst = document.querySelector('.agregar__input--first'),
  clearAll = document.querySelector('span#clearAll');

// Agregar elemento desde input
formularioAgregar.addEventListener('submit', (e) => {
  e.preventDefault();
  itemList.appendChild( crearElementoDiv(input.value) );
  const arrayObject = guardarLocalStorage( guardarValoresLocalStorage(input.value,checkFirst.checked) );
  convertirJSON(arrayObject);

  // cambiarCheck();
  input.value = '';
});
// Agregar elementos que se encuentran el localStorage
const cargaRapida = addEventListener('DOMContentLoaded', () => {
  const valorQueViene = recibirValoresLocalStorage();
  const fragmentLocalStorage = document.createDocumentFragment();
  if(valorQueViene === null){
 
  }else {
    valorQueViene.forEach((element) => {
      const divFuncion = crearElementoDiv(element.titulo);
      fragmentLocalStorage.appendChild(divFuncion);
    });
  }
  itemList.appendChild(fragmentLocalStorage);
});
//Crear Elemento HTML
const crearElementoDiv = function ( inputText ) {
  const elementoDiv = document.createElement('div');
  elementoDiv.className = 'item';
  elementoDiv.innerHTML = `
    <div class="agregar__container">
      <label class="agregar__checkbox">
        <input class="agregar__input" type="checkbox">
        <span class="agregar__span"></span>
        </input>
      </label>
      <a class="agregar__link" href="#">${inputText}</a>
    </div>
    <a class="agregar__link-icon" href="#">
      <img class="agregar__link-icon" src="images/icon-cross.svg" alt="clear">
    </a>
  `;
  // Variables elemento div.item
  const decoracionTexto = elementoDiv.querySelector('.agregar__link'),
        check = elementoDiv.querySelector('.agregar__input');
  // Agregar check o noCheck
  if (checkFirst.checked) {
    decoracionTexto.classList.add('agregar__link--decoration');
    check.setAttribute('checked', true);
  }
  // Agregar lineTought
  check.addEventListener('click', function () {
    decoracionTexto.classList.toggle('agregar__link--decoration');
  });
  return elementoDiv;
}
// Guardar valores en objeto
function guardarValoresLocalStorage (text,check){
  const objetoInsertar = {
    titulo : text,
    check : check
  }
  return objetoInsertar;
}
// Guardar objeto en array
function guardarLocalStorage (objeto) {
  objetolocalStorage.push(objeto);
  return objetolocalStorage;
}
const objetolocalStorage = [];
// Convertir array a json
function convertirJSON (array) {
  const arregloJson = JSON.stringify(array);
  localStorage.setItem('items',arregloJson);
}
// Cambiar local storage check
// function cambiarCheck () {
//   const checkLista = document.querySelectorAll('input.agregar__input');
//   checkLista.addEventListener('click', function () {
    
//   });
// }
// Reconvertir de JSON a objeto
const recibirValoresLocalStorage = () => {
  const valor = localStorage.getItem('items');
  const parse = JSON.parse(valor);
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