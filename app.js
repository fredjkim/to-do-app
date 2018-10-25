function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {
    //grab input task
    //return if empty input
    if (!newToDoText.value) { return; }
    //push into array with key/value
    toDos.push({
      //assign value from input
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
  }

  function deleteToDo(id) {
    return toDos.filter(toDo => toDo.id !== id);
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
      const delBtn = document.createElement('button');
      //delBtn.type = 'Delete';
      delBtn.innerHTML = "Delete";

      newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
      toDos = deleteToDo(toDo.id);
      renderTheUI();
    });
  });
  };

  //event listener - listens for submit
  addToDoForm.addEventListener('submit', event => {
    //prevents reload
    event.preventDefault();
    //calls function upon submit
    createNewToDo();
    newToDoText.value = '';
    renderTheUI();

  });

  //call function
  renderTheUI();
}


//loads function on page load
window.onload = function() {
  onReady();
};
