function listCreating(obj) {
    const listId = obj.id;

    const ulContainer = document.querySelector('.list-container')
    const listTask = document.createElement('li');
    const textField = document.createElement('input');
    textField.value = obj.value;
    textField.type = 'text';
    textField.setAttribute('readonly', 'readonly');
    textField.classList.add('li-input');

    const buttonContainer = document.createElement('div')

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', () => {
        const goals = JSON.parse(localStorage.getItem("goals"));
        const newArray = goals.filter(item => item.id !== listId);
        localStorage.setItem("goals", JSON.stringify(newArray));

        listTask.remove();
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

            changeList(listId, textField.value);
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
        const id = Math.random();

        listCreating({id:id, value: bank.value});

        const goals = JSON.parse(localStorage.getItem("goals")) ?? [];
        goals.push({id:id, value: bank.value});
        localStorage.setItem("goals", JSON.stringify(goals));

        bank.value = '';
    }
}

function onLoad() {
    const list = JSON.parse(localStorage.getItem("goals")) ?? [];
    list.forEach(item => listCreating(item));
}

window.addEventListener('load', onLoad);

function changeList(listId, value) {
    const goals = JSON.parse(localStorage.getItem("goals"));
    let newGoal = goals.find( item => item.id === listId);
    newGoal.value = value;
    const index = goals.findIndex(item => item.id === listId);
    goals[index] = newGoal;

    localStorage.setItem("goals", JSON.stringify(goals));
}