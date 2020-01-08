const data = JSON.parse(localStorage.getItem("input"));

const toDoList = document.getElementById("todo-list");
const divMaker = text => {
  const div = document.createElement("div");
  div.className = "form-check";
  div.innerHTML = `<input type="checkbox" class="form-check-input" id="check">
         <label class="form-check-label" for="exampleCheck1">${text}</label>
         <i class="fas fa-times-circle float-right delete"></i>`;
  toDoList.appendChild(div);
};

const toDoArr = [];
const addBtn = document.getElementById("add-btn");
function addToDo(e) {
  const inputValue = document.getElementById("input-text").value;
  e.preventDefault();
  console.log(toDoArr);
  toDoArr.push(inputValue);
  if (inputValue === "") {
    alert("You need to enter a todo");
  } else {
    localStorage.setItem("input", JSON.stringify(toDoArr));
    divMaker(inputValue);
    document.getElementById("input-text").value = "";
  }
}

localStorage.getItem("input") === null
  ? console.log("true")
  : data.forEach(user => {
      divMaker(user);
    });

function removeToDo(e) {
  const remove = e.target.classList.contains("delete");
  const removeDiv = e.target.parentElement;
  remove ? toDoList.removeChild(removeDiv) : null;
}
function checkBox(e) {
  const check = e.target.classList.contains("form-check-input");
  e.target.nextElementSibling.classList.toggle("strike");
  check ? console.log("this is a check") : null;
}

addBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", removeToDo);
toDoList.addEventListener("change", checkBox);
