document.addEventListener("DOMContentLoaded", function () {
    const newTask = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const deleteAllButton = document.getElementById("delete-all");
  
    addTaskButton.addEventListener("click", function () {
      const taskText = newTask.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        newTask.value = "";
      }
    });
  
    newTask.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTaskButton.click();
      }
    });
  
    deleteAllButton.addEventListener("click", function () {
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
    });
  
    function addTask(taskText) {
      const task = document.createElement("li");
      const taskTextElement = document.createElement("span");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
  
      taskTextElement.textContent = taskText;
  
      task.appendChild(taskTextElement);
      task.appendChild(editButton);
      task.appendChild(deleteButton);
  
      taskList.appendChild(task);
  
      editButton.textContent = "Edit";
      deleteButton.textContent = "Delete";
  
      editButton.addEventListener("click", function () {
        const updatedTaskText = prompt("Edit task:", taskText);
        if (updatedTaskText !== null) {
          taskTextElement.textContent = updatedTaskText;
        }
      });
  
      deleteButton.addEventListener("click", function () {
        task.remove();
      });
  
      task.addEventListener("click", function () {
        taskTextElement.classList.toggle("completed");
      });
    }
  });
  