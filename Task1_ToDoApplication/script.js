const inputTask = document.querySelector("#input-task");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector(".task-list-container");
const filterTaskSelect = document.querySelector("#filter-task");


const myTask = JSON.parse(localStorage.getItem("userTasks")) || [];

const addTask = () => {
  if (inputTask.value !== "") {

    // creating list for each task
    const li = document.createElement("li");
    li.innerText = inputTask.value;
    taskList.appendChild(li);

    // adding cross icon in each task
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Add new task to the myTask array
    myTask.push({ taskTitle: inputTask.value, completed: false });
    saveTask()

  } else {
    alert("Please add some task")
  }
  // clear the input field after adding the task
  inputTask.value = "";
}

// calling addTask function on add button click
addTaskBtn.addEventListener("click", () => {
  addTask()
})



taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");

    const taskTitle = e.target.childNodes[0].textContent.trim();
    console.log("TaskTitle: ", taskTitle);

    const task = myTask.find(task => task.taskTitle === taskTitle);

    if (task) {
      task.completed = !task.completed;
    }

    saveTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove()
    // Remove the task when × is clicked
    const taskTitle = e.target.parentElement.childNodes[0].textContent.trim();
    console.log("span TaskTitle: ", taskTitle);

    const taskIndex = myTask.findIndex(task => task.taskTitle === taskTitle);

    console.log("title index", taskIndex);


    if (taskIndex !== -1) {
      myTask.splice(taskIndex, 1);
    }
    e.target.parentElement.remove();
    saveTask();  // Save updated tasks to localStorage
  }
})

// saving task
const saveTask = () => {
  localStorage.setItem("userTasks", JSON.stringify(myTask));
}

const showTask = () => {

  myTask.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = task.taskTitle;
    li.className = task.completed ? "checked" : "";
    taskList.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";  // for the "×" symbol
    li.appendChild(span);
  });
}

showTask();

const filterTasks = () => {
  // Get selected filter value
  const filterValue = filterTaskSelect.value;
  let filteredTasks = [];

  if (filterValue === "completed") {
    // Filter completed tasks
    filteredTasks = myTask.filter(task => task.completed);
  } else if (filterValue === "pending") {
    // Filter pending tasks
    filteredTasks = myTask.filter(task => !task.completed);
  } else {
    // Show all tasks (no filter)
    filteredTasks = myTask;
  }

  // Clear current task list
  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = task.taskTitle;
    li.className = task.completed ? "checked" : "";
    taskList.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";  // for the "×" symbol
    li.appendChild(span);
  });
}

// Listen for filter selection change
filterTaskSelect.addEventListener("change", filterTasks);