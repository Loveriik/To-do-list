// let paragraph

// function listCreating() {
//     const ulContainer = document.querySelector('.list-container')
//     const listTask = document.createElement('li');
//     const container = document.createElement('div')
//     const tick = document.createElement('input') 
//     const button = document.createElement('button')

//     container.classList.add('div')

//     tick.type = 'checkbox'
//     tick.classList.add('checkbox')
//     tick.addEventListener('change', ()=> {
//         container.classList.add('green')
//     })

//     paragraph = document.createElement('p')

//     button.classList.add('delete')
//     button.textContent = 'delete'
//     button.addEventListener('click', () => {
//         listTask.remove()
//     })

//     container.append(tick,paragraph,button)
//     listTask.append(container)
//     ulContainer.append(listTask)
// }


// function addingGoal() {
//     let bank = document.querySelector('.task-text')

//     if (bank.value == '') {
//         return
//     } else {
//         listCreating()
//         paragraph.textContent = bank.value

//         bank.value = ''
//     }

// }


let textField

function listCreating() {
    const ulContainer = document.querySelector('.list-container')
    const listTask = document.createElement('li');
    
    // textField = document.createElement('input')
    textField = document.createElement('input')
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
        listCreating()
        textField.value = bank.value
        bank.value = ''
    }
}
