const data = JSON.parse(localStorage.getItem("input"));
const toDoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");
const getCompletedButton = document.getElementById('completeBtn');
const toDoArr = [];

addBtn.addEventListener("click", createTo);
getCompletedButton.addEventListener('click',()=>{
  document.getElementById('completed').classList.toggle('remove');
});

localStorage.getItem("input") === null
  ? console.log("true")
  : data.forEach(user => {
      renderToDo(user);
    });

function renderToDo(text) {
  const div = document.createElement("div");
  div.className = "form-check col-md-12";

  const uniqueIdentifier = Math.floor(Math.random() * new Date().getTime());

  toDoList.appendChild(div);

  div.appendChild(createInput(uniqueIdentifier,text));

  div.appendChild(createCheckBox(text, uniqueIdentifier));

  div.appendChild(createDeleteIcon(text));
}

function createInput(id,text) {
  const input = document.createElement("INPUT");
  input.id = `checkbox-${id}`;
  input.type = "checkbox";
  input.className = "form-check-input";

  input.addEventListener('click', function(e) {
    e.target.nextElementSibling.classList.toggle("strike");
    const insertDiv = document.createElement('div');
    insertDiv.textContent = text;
    document.getElementById('time').innerHTML = new Date();
    document.getElementById('completed').append(insertDiv);
  });
  return input;
}
function createCheckBox(text, id) {
  const label = document.createElement("LABEL");
  label.className = "form-check-label";
  label.setAttribute("for", `checkbox-${id}`);
  label.textContent = text;

  return label;
}

function createDeleteIcon(text) {
  const deleteIcon = document.createElement("I");
  deleteIcon.className = "fas fa-times-circle float-right delete";

  deleteIcon.onclick = function(e) {
    toDoList.removeChild(e.target.parentElement);
    //pull in the local storage
    const savedToDos = JSON.parse(localStorage.getItem("input"));
    //delete the item from the list
    const itemIndex = savedToDos.indexOf(text);
    savedToDos.splice(itemIndex, 1);
    //re-set the local storage
    localStorage.setItem("input", JSON.stringify(savedToDos));
  };

  return deleteIcon;
}

function createTo(e) {
  const inputValue = document.getElementById("input-text").value;
  e.preventDefault();
  toDoArr.push(inputValue);
  if (inputValue === "") {
    alert("You need to enter a todo");
  } else {
    let savedToDos = JSON.parse(localStorage.getItem("input"));
    savedToDos = savedToDos || [];
    savedToDos.push(inputValue);
    localStorage.setItem('input', JSON.stringify(savedToDos));
    renderToDo(inputValue);
    document.getElementById("input-text").value = "";
  }
}
