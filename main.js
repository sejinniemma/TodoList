'use strict'

const items = document.querySelector('.items')
const addBtn = document.querySelector('.footer__button')
const input = document.querySelector('.footer__input')
const resetBtn = document.querySelector('.reset')

addBtn.addEventListener('click', () => {
  onAdd()
})

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    onAdd()
  }
})

function onAdd() {
  const text = input.value
  if (input.value === '') {
    input.value = ''
    return
  }
  const item = creatItem(text)
  items.appendChild(item)
  item.scrollIntoView({ block: 'center' })
  input.value = ''
  input.focus()
}

let id = 0
function creatItem(text) {
  const itemRow = document.createElement('li')
  itemRow.setAttribute('class', 'item__row')
  itemRow.setAttribute('data-target-id', id)

  itemRow.innerHTML = ` 
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i data-id=${id} class="far fa-check-square"></i>
            </button>
        </div>
        <div class="item__divider"></div>
  `
  id++
  return itemRow
}

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id
  if (id) {
    const toBeDeleted = document.querySelector(
      `.item__row[data-target-id="${id}"]`,
    )
    toBeDeleted.remove()
  }
})

resetBtn.addEventListener('click', () => {
  items.innerHTML = ''
})
