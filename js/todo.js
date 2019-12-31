//Get Input from Input field

const inputToDoList = () => {
    document.getElementById("inputContent").innerHTML =
        document.getElementById("todoInput").value;
};
document.getElementById('todoInput').addEventListener('keyup',(event) => {
    if(event.keyCode === 13) {
        inputToDoList();
    }
});
