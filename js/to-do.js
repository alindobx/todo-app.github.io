//Select Submit Button
const addBtn = document.getElementById('add-btn');
//Select to do List id - that we need to append too
const toDoList = document.getElementById('todo-list');

//addBtn function
function addToDo(e) {
    e.preventDefault();
    //Get value of input field
    const inputValue = document.getElementById('input-text').value;
    //Build the element to be put in the Text Node
    const div = document.createElement('div');
    div.className = "form-check";
    //append textNode to value
    div.innerHTML =
        `<input type="checkbox" class="form-check-input">
         <label class="form-check-label" for="exampleCheck1">${inputValue}</label>
         <button type="button" class="btn btn-danger float-right btn-circle btn-sm">X</button>`;
    //append Child of receiving div
    toDoList.appendChild(div);
}

addBtn.addEventListener('click', addToDo);

