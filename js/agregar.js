const// Variables
  input = document.getElementById('inputAgregar'),
  formularioAgregar = document.getElementById('formularioAgregar'),
  itemList = document.getElementById('container-item-solo');
    
formularioAgregar.addEventListener('submit', (e) => {
  e.preventDefault();
    
  const elementHtml = () => {
    // item
    const item = document.createElement('div');
    item.className = 'item';

    // container--label--input--span--a
    const divContainer = document.createElement('div');
    divContainer.className = 'agregar__container';

    const labelAgregar = document.createElement('label');
    labelAgregar.className = 'agregar__checkbox';
      
    const inputLabel = document.createElement('input');
    inputLabel.className = 'agregar__input';
    inputLabel.setAttribute('type','checkbox');

    const spanLabel = document.createElement('span');
    spanLabel.className = 'agregar__span';

    const aAgregar = document.createElement('a');
    aAgregar.className = 'agregar__link';
    aAgregar.textContent = input.value;
    aAgregar.setAttribute('href','#');

    labelAgregar.appendChild(inputLabel);
    labelAgregar.appendChild(spanLabel);
    divContainer.appendChild(labelAgregar);
    divContainer.appendChild(aAgregar);

    // a--img
    const aIcon = document.createElement('a');
    aIcon.className = 'agregar__link-icon';
    aIcon.setAttribute('href','#');

    const imgIcon = document.createElement('img');
    imgIcon.className = 'agregar__icon';
    imgIcon.setAttribute('src','images/icon-cross.svg');

    aIcon.appendChild(imgIcon);

    item.appendChild(divContainer);
    item.appendChild(aIcon);

    itemList.appendChild(item);

    //check, nocheck
    const checkFirst = document.querySelector('.agregar__input--first');

    if (checkFirst.checked === true) {
      aAgregar.classList.toggle('agregar__link--decoration'); 
      inputLabel.setAttribute('checked', true);  
    }
            
  };
  elementHtml();

  const del = document.querySelectorAll('.agregar__link-icon');

    del.forEach(function (element) {
        element.addEventListener('click', function () {
            const delpadre = this.closest('.item');
            delpadre.remove();
        });
    });

    const check = document.querySelectorAll('.agregar__input');
        
    check.forEach(function (element) {
      element.addEventListener('click', function () {
        const ancestro = this.closest('.agregar__container');
        const hijoAncestro = ancestro.querySelector('.agregar__link');
        hijoAncestro.classList.toggle('agregar__link--decoration');
    
            
         });
     });

  input.value = '';
});

// //  eliminar elemento ////// DE MOMENTO NO ES NECESARIO
//  const del = document.querySelectorAll('.agregar__link-icon');

//  del.forEach(function (element) {
//      element.addEventListener('click', function () {
//          const delpadre = this.closest('.item');
//          delpadre.remove();
//      });
//  });