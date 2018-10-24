function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    //grab input task
    const newToDoText = document.getElementById('newToDoText');
    //return if empty input
    if (!newToDoText.value) { return; }

    //push into array with key/value
    toDos.push({
      //assign value from input
      title: newToDoText.value,
      complete: false,
      id: id.value
    });

    //incrememt
    id++;
    //clear input text
    newToDoText.value = '';
    //call render func every time state changes
    renderTheUI();
  }

  //renders UI based on state
  function renderTheUI() {
    //access UL
    const toDoList = document.getElementById('toDoList');
    //empty li content
    toDoList.textContent = '';
    //create ui and append
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const button = document.createElement('button');
      button.type = 'Delete';
      button.textContent = "Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(button);

    });
  };

  //event listener - listens for submit
  addToDoForm.addEventListener('submit', event => {
    //prevents reload
    event.preventDefault();
    //calls function upon submit
    createNewToDo();
  });

  //event listener - listens for click to delete parent node
  toDoList.addEventListener('click', event => {
    //remove toDo from array if id matches
  var newArr = toDos.filter(toDo => toDo.id !== id.value);
  let toDos = newArr;

    renderTheUI();
  });


  //call function
  renderTheUI();
}



//loads function on page load
window.onload = function() {
  onReady();
};
