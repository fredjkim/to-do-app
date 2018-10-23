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
    //add checkbox class
    checkbox.classList.add('checkbox','mdl-checkbox__input');
    //set the title
    newLi.textContent = title;
    //add li class
    newLi.classList.add('mdl-list__item');
    //append checkbox to newLi
    newLi.appendChild(checkbox);

    //create delete button
    let delButton = document.createElement('button');
    delButton.innerHTML = "Delete";
    //add button class
    delButton.classList.add('del-but','mdl-button', 'mdl-js-button', 'mdl-button--raised', 'mdl-js-ripple-effect');
    //append button to newLi
    newLi.appendChild(delButton);

    //attach li to ul
    toDoList.appendChild(newLi);
    newToDoText.value = '';

    //delete parent element (newLi)
    delButton.addEventListener ('click', event => {
      delButton.parentNode.remove();
    });

  });
};

window.onload = function() {
  onReady();
};
