document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const li = createTaskElement(taskText);
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function (event) {
      const target = event.target;
  
      if (target.classList.contains('deleteBtn')) {
        target.parentElement.remove();
      } else if (target.tagName === 'LI') {
        target.classList.toggle('completed');
      } else if (target.classList.contains('editBtn')) {
        const li = target.parentElement;
        const taskText = li.querySelector('.taskText');
        const newText = prompt('Edit task:', taskText.textContent);
  
        if (newText !== null && newText.trim() !== '') {
          taskText.textContent = newText.trim();
        }
      }
    });
  
    function createTaskElement(taskText) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="taskText">${taskText}</span>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      `;
      return li;
    }
  });
  