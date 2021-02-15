const// Variables
      input = document.getElementById('inputAgregar'),
      formularioAgregar = document.getElementById('formularioAgregar'),
      itemList = document.getElementById('container-item-solo');
      
      // Evento Agregar
      formularioAgregar.addEventListener('submit',(e) => {
    e.preventDefault();
    // Crear elementos
    const divItem = document.createElement('div');
    divItem.className = 'item';
    // div .container
    const agregarContainer = document.createElement('div');
    agregarContainer.className = 'agregar__container';
    // label
    const agregarCheckbox = document.createElement('label');
    agregarCheckbox.className = 'agregar__checkbox';
    // input checkbox
    const agregarInput = document.createElement('input');
    agregarInput.className = 'agregar__input';
    agregarInput.setAttribute('type','checkbox');
    // span check
    const agregarSpan = document.createElement('span');
    agregarSpan.className = 'agregar__span';
    // text item
    const agregarLink = document.createElement('a');
     agregarLink.className = 'agregar__link';
     agregarLink.setAttribute('href','#');
    // link icon
    const agregarLinkIcon = document.createElement('a');
    agregarLinkIcon.className = 'agregar__link-icon';
    agregarLinkIcon.setAttribute('href','#');
    // Icon
    const agregarIco = document.createElement('img');
    agregarIco.className = 'agregar__icon';
    agregarIco.setAttribute('src','images/icon-cross.svg');
    agregarIco.setAttribute('alt','clear');
    
divItem.appendChild(agregarContainer);
    agregarContainer.appendChild(agregarCheckbox);
    agregarCheckbox.appendChild(agregarInput);
        agregarCheckbox.appendChild(agregarSpan);
    agregarContainer.appendChild(agregarLink);
    agregarLink.textContent = input.value;
    divItem.appendChild(agregarLinkIcon);
    agregarLinkIcon.appendChild(agregarIco);

itemList.appendChild(divItem);

const checkFirst = document.querySelector('.agregar__input--first');

            if (checkFirst.checked === true) {
                agregarLink.classList.toggle('agregar__link--decoration'); 
                agregarInput.setAttribute('checked', true);  
            }
            
input.value = '';
});

// line-thought
const check = document.querySelectorAll('.agregar__input');
        
check.forEach(function (element) {
    element.addEventListener('click', function () {
        const ancestro = this.closest('.agregar__container');
        const hijoAncestro = ancestro.querySelector('.agregar__link');
        hijoAncestro.classList.toggle('agregar__link--decoration');

        // determinar si esta checkeado o no
// const checkFirst = document.querySelector('.agregar__input--first');

//         checkFirst.addEventListener('click', () => {
//             if (checkFirst.checked === true) {
//                 const padreAnterior = this.closest('.agregar__container');
//                 padreAnterior.classList.toggle('agregar__link--decoration');
//             }else if (checkFirst.checked === false) {
//                 agregarLink.classList.toggle('agregar__link');
//             }else {
//                 console.log('no funciona');
//             }
//         });
     });
 });

// eliminar elemento 
// const del = document.querySelectorAll('.agregar__link-icon');

// del.forEach(function (element) {
//     element.addEventListener('click', function () {
//         const delpadre = this.closest('.item');
//         delpadre.remove();
//     });
// });
        
