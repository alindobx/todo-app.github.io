
const addBtn = document.getElementById('add-btn');
const toDoList = document.getElementById('todo-list');
// collect Data
const toDoArr = [];

//grab local storage properties
const data = JSON.parse(localStorage.getItem('input'));

const divMaker = (text) =>{

    const div = document.createElement('div');
    div.className = "form-check";
    //append textNode to value
    div.innerHTML =
        `<input type="checkbox" class="form-check-input" id="check">
         <label class="form-check-label" for="exampleCheck1">${text}</label>
         <i class="fas fa-times-circle float-right delete"></i>`;
    //append Child of receiving div
    toDoList.appendChild(div);
};

//addBtn function
function addToDo(e) {
    const inputValue = document.getElementById('input-text').value;
    e.preventDefault();
    console.log(toDoArr);
    //sending input to array
    toDoArr.push(inputValue);
    if(inputValue === ''){
        alert('You need to enter a todo')
    }else {
        //send to local storage to Array
        localStorage.setItem('input', JSON.stringify(toDoArr));
        divMaker(inputValue);
        //clear the input field
        document.getElementById('input-text').value = '';

    }
}

function removeToDo (e){
    const remove = e.target.classList.contains('delete');
    const removeDiv = e.target.parentElement;
    remove
        ? toDoList.removeChild(removeDiv)
        : null;
}
function checkBox (e) {
    const check = e.target.classList.contains('form-check-input');
    e.target.nextElementSibling.classList.toggle('strike');
    check
        ? console.log('this is a check')
        : null;
}

addBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', removeToDo);
toDoList.addEventListener('change', checkBox);

