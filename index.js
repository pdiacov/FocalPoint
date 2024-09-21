const btnAddNewTask = document.querySelector(".app button")
const trashImg = document.querySelector(".fieldset-wrapper")
const modalDelete = document.querySelector(".modalDelete-wrapper")
const btnCancel = document.querySelector('.modalDelete .buttons .close')

btnAddNewTask.addEventListener('click', event => {
  event = event.preventDefault()
  const modalAdd = document.querySelector('.modalAdd-wrapper')

  modalAdd.classList.add("open")
})


trashImg.addEventListener('click', event => {
  if (event.target.dataset.action === 'trash') {
    modalDelete.classList.add('open')
  }
})

btnCancel.addEventListener('click', event => {
  modalDelete.classList.remove('open')
})