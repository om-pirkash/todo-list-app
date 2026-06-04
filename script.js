const taskInput = document.getElementById('taskInput');
const addBtn = document.querySelector('.addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTodo);

taskInput.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') addTodo();
});

function addTodo() {
  let taskText = taskInput.value.trim();
  if(taskText === '') {
    alert("Please enter a task")
  }
  else{
  let li = document.createElement('li');
  li.innerHTML = `<span>${taskText}</span> <button class="deleteBtn">Delete</button>`;
  taskList.appendChild(li);
  
  taskInput.value = '';
}
}

// Event Delegation:
taskList.addEventListener('click', function(e) {
    if(e.target.nodeName=="BUTTON"){
       let listitem = e.target.parentElement;
      listitem .remove();
    }

  let li = e.target.closest('li');
  if(li) {
   li.classList.toggle('completed');

} 
})
    