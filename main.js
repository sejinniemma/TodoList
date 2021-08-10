'use strict';

const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');

addBtn.addEventListener('click',()=>{
    onAdd();
})

input.addEventListener('keydown',(event)=>{
    if(event.keyCode === 13){
        onAdd();
    }    
})

function onAdd(){
    const text = input.value;
    if(input.value === ''){
        input.value='';
        return;
    }
    const item = creatItem(text);
    items.appendChild(item);
    item.scrollIntoView({block: 'center'});
    input.value="";
    input.focus();
}


function creatItem (text){

    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    itemRow.innerHTML = ` 
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="far fa-check-square"></i>
            </button>
        </div>
        <div class="item__divider"></div>
  `;

  return itemRow;
    
}