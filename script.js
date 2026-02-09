const taskInput = document.getElementById("taskInput");
const dateTimeInput = document.getElementById("dateTimeInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const dateTime = dateTimeInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const header = document.createElement("div");
  header.className = "task-header";

  const title = document.createElement("span");
  title.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task", title.textContent);
    if (newTask) title.textContent = newTask;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  header.appendChild(title);
  header.appendChild(actions);

  li.appendChild(header);

  if (dateTime) {
    const dateEl = document.createElement("div");
    dateEl.className = "date-time";
    dateEl.textContent = `Due: ${new Date(dateTime).toLocaleString()}`;
    li.appendChild(dateEl);
  }

  taskList.appendChild(li);

  taskInput.value = "";
  dateTimeInput.value = "";
}

