function listCreating(value) {
    const ulContainer = document.querySelector('.list-container')
    const listTask = document.createElement('li');
    
    const textField = document.createElement('input')
    textField.value = value
    textField.type = 'text'
    textField.setAttribute('readonly', 'readonly')
    textField.classList.add('li-input')

    const buttonContainer = document.createElement('div')

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', () => {
        listTask.remove()
    })

    const editButton = document.createElement('button')
    editButton.classList.add('edit')
    editButton.textContent = 'Edit'
    editButton.addEventListener('click', ()=>{
        if (editButton.textContent.toLowerCase() == 'edit') {
            textField.removeAttribute('readonly')
            textField.focus()
            editButton.textContent = 'Save'
        } else {
            textField.setAttribute('readonly', 'readonly')
            editButton.textContent = 'Edit'
        }
    })

    buttonContainer.append(editButton, deleteButton)
    listTask.append(textField,buttonContainer)
    ulContainer.append(listTask)

}


function addingGoal() {
    let bank = document.querySelector('.task-text')
    if (bank.value === '') {
        return
    } else {
        listCreating(bank.value)
        bank.value = ''
    }
}