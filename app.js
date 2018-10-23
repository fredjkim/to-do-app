function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;
    //create new li
    let newLi = document.createElement('li');
    //create a new input
    let checkbox = document.createElement('input');
    //set the input's type to checkbox
    checkbox.type = "checkbox";
    //set the title
    newLi.textContent = title;
    //attach checkbox to the li
    newLi.appendChild(checkbox);
    //attach li to ul
    toDoList.appendChild(newLi);

    newToDoText.value = '';

  });
};

window.onload = function() {
  onReady();
};