const// Variables
      input = document.getElementById('inputAgregar');
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

input.value = '';
});


const check = document.getElementById('check');
const link = document.getElementById('agregar__link');

check.addEventListener('click', function() {
    if (this.checked == true) {
        link.textContent = 'cambiado';
        /*console.log(this.checked);*/
      } else {
        /*console.log(this.checked);*/
      }
});