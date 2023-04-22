var todoInp = document.getElementById('todoInp');
var showList = document.getElementById('showList');
//Adding in list
function addTodo() {
    var todoText = todoInp.value;
    var todoTextNode = document.createTextNode(todoText);

    var todoLi = document.createElement('li');
    todoLi.appendChild(todoTextNode);
    todoLi.setAttribute('class', 'todoList');
    showList.appendChild(todoLi);

    //Deleting from list button

    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('onclick', 'deletedTodo(this)');
    var deleteTextNode = document.createTextNode('DELETE');
    deleteBtn.appendChild(deleteTextNode);
    todoLi.appendChild(deleteBtn);

    //Creating Edit button

    var editBtn = document.createElement('button');
    editBtn.setAttribute('onclick', 'editTodo(this)');
    var editText = document.createTextNode('EDIT');
    editBtn.appendChild(editText);
    todoLi.appendChild(editBtn);

    todoInp.value = '';    //To empty the input bar after adding each text in your list.

}

//Delete function

function deletedTodo(element) {

    element.parentNode.remove();

}

//Edit function

function editTodo(element) {

    // element.parentNode.firstChild.nodeValue = "Hello,I am the edited text"
    element.parentNode.firstChild.nodeValue = prompt('Edit Value', element.parentNode.firstChild.nodeValue); //in prompt we can give it as parameters,first parameter is about what we want to show to user,and second parameter is about the default value we can show to user to edit
    // element.parentNode.firstChild.nodeValue = prompt(); //to take input from user for new value.
    console.log(element.parentNode.childNodes[0]);   //To see the output of line 44 in console also 

}

// Delete all function

function deleteAll() {

    showList.innerHTML = '';

}