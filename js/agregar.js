const// Variables
  input = document.getElementById('inputAgregar'),
  formularioAgregar = document.getElementById('formularioAgregar'),
  itemList = document.getElementById('container-item-solo'),
  checkFirst = document.querySelector('.agregar__input--first');

formularioAgregar.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = document.createElement('div');
  itemList.appendChild(createElementWithEvents(item));
  input.value = '';
  });
  
const createElementWithEvents = (item) => {
  item.className = 'item';
  item.innerHTML = `
    <div class="agregar__container">
      <label class="agregar__checkbox">
        <input class="agregar__input" type="checkbox">
        <span class="agregar__span"></span>
        </input>
      </label>
      <a class="agregar__link" href="#">${input.value}</a>
    </div>
    <a class="agregar__link-icon" href="#">
      <img class="agregar__link-icon" src="images/icon-cross.svg" alt="clear">
    </a>
  `;
  const inputItem = item.querySelector('input.agregar__input'),
        link = item.querySelector('a.agregar__link'),
        deleteItem = item.querySelector('a.agregar__link-icon');

  deleteItem.addEventListener('click', () => {
     const ancestroDel = deleteItem.closest('.item');
    ancestroDel.remove();
  });


  inputItem.addEventListener('click', function () {
    link.classList.toggle('agregar__link--decoration');
  });      
  
  if (checkFirst.checked) {
    link.classList.add('agregar__link--decoration');
    inputItem.setAttribute('checked', true);
  }
  return item;
};

const clearAll = document.querySelector('span#clearAll');

clearAll.addEventListener('click', function () {
  const items = this.closest('.items-list-all');
  const hijoItem = items.querySelector('#container-item-solo');
  const itemDelAll = hijoItem.querySelectorAll('div.item');
  itemDelAll.forEach(element => {
    element.remove();
  });
});

  //  elementHtml();

//   const del = document.querySelectorAll('.agregar__link-icon');

//   del.forEach(function (element) {
//     element.addEventListener('click', function () {
//       const delpadre = this.closest('.item');
//       delpadre.remove();
//     });
//   });

//   const check = document.querySelectorAll('.agregar__input');

//  check.forEach(function (element) {
//    element.addEventListener('click', function () {
//      const ancestro = this.closest('.agregar__container');
//      const hijoAncestro = ancestro.querySelector('.agregar__link');
//      hijoAncestro.classList.toggle('agregar__link--decoration');
//    });
//  });



// //check, nocheck
// const checkBox = document.querySelector('.agregar__input');
// const cambiarTitle = document.querySelectorAll('agregar__link');

// console.log(cambiarTitle);


/*if (checkBox.checked === true) {
  aAgregar.classList.toggle('agregar__link--decoration');
  inputLabel.setAttribute('checked', true);
}*/
// //  eliminar elemento ////// DE MOMENTO NO ES NECESARIO
//  const del = document.querySelectorAll('.agregar__link-icon');

//  del.forEach(function (element) {
//      element.addEventListener('click', function () {
//          const delpadre = this.closest('.item');
//          delpadre.remove();
//      });
//  });


// const persona = {
//   nombre: 'Federico',
//   apellido: 'Martinez',
//   edad: 21
// }

// console.log(persona);

// const textoJson = JSON.stringify(persona);

// console.log(textoJson);

// localStorage.setItem('person' ,textoJson);

// persona1 = JSON.parse(textoJson);

// console.log(persona1);