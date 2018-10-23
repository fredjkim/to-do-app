function onReady() {
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
      complete: false
    });
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

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

    });
  };

  //event listener - listens for submit
  addToDoForm.addEventListener('submit', event => {
    //prevents reload
    event.preventDefault();
    //calls function upon submit
    createNewToDo();
  });

  //call function
  renderTheUI();
}



//loads function on page load
window.onLoad = function() {
  onReady();
};
