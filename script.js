function addTask() {
    const taskInput = document.getElementById('taskInput')
    const taskText = taskInput.value.trim()
    if (taskText === '') return
  
    addTaskToDOM(taskText)
    saveTaskToLocalStorage(taskText)
  
    taskInput.value = ''
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.forEach((taskText) => addTaskToDOM(taskText))
  }
  
  function addTaskToDOM(taskText) {
    const li = document.createElement('li')
    li.textContent = taskText
  
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.onclick = function () {
      li.remove()
      removeTaskFromLocalStorage(taskText)
    }
  
    li.appendChild(deleteButton)
    document.getElementById('taskList').appendChild(li)
  }
  
  function saveTaskToLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push(taskText)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  
  function removeTaskFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const updatedTasks = tasks.filter((task) => task !== taskText)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }
  
  document.addEventListener('DOMContentLoaded', loadTasks)
  