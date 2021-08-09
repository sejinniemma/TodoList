'use strict';

const items = document.querySelector('.items');
const footerBtn = document.querySelector('.footer__button');
const footerInput = document.querySelector('.footer__input');

footerBtn.addEventListener('click',()=>{
    if(footerInput.value === ''){
        return;
    }

    let value = footerInput.value;
    hi(value);
    

})



function hi (text){

    const ItemRow = document.querySelector('.item__row')

    ItemRow.innerHTML = ` 
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
            <i class="far fa-check-square"></i>
        </button>
    </div>
    <div class="item__divider"></div>
  
`;

items.appendChild(ItemRow);
    
}