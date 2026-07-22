const taskInput = document.getElementById("task");
const btn = document.getElementById("addbtn");
const Li = document.getElementById("taskList");
const msg = document.getElementById("errmsg");
const f = document.getElementById("form");

// Edit variable
let editLi = null;

// Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

f.addEventListener("submit", (e) => {
    e.preventDefault();
});

btn.addEventListener("click", () => {
    if (editLi == null) {
        addTask();
    } else {
        updateTask();
    }
});

// -------------------- ADD TASK --------------------

function addTask() {

    if (taskInput.value.trim() === "") {
        msg.textContent = "Required to Add Task";
        return;
    }

    msg.textContent = "";

    // Add to array
    tasks.push(taskInput.value);

    // Save
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Display
    createTask(taskInput.value);

    // Clear input
    taskInput.value = "";
}

// -------------------- UPDATE TASK --------------------

function updateTask() {

    if (taskInput.value.trim() === "") {
        msg.textContent = "Task cannot be empty";
        return;
    }

    const oldText = editLi.firstElementChild.textContent;

    // Find task index
    const index = tasks.indexOf(oldText);

    if (index !== -1) {
        tasks[index] = taskInput.value;
    }

    // Save updated array
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Update UI
    editLi.firstElementChild.textContent = taskInput.value;

    taskInput.value = "";
    btn.textContent = "Add";
    editLi = null;
}

// -------------------- CREATE TASK --------------------

function createTask(task) {

    const li = document.createElement("li");

    li.className =
        "flex justify-between items-center border rounded-xl p-3 mb-3 gap-5";

    const taskText = document.createElement("span");
    taskText.textContent = task;

    li.appendChild(taskText);

    // Complete Button

    const completeBtn = document.createElement("button");

    completeBtn.textContent = "Complete";

    completeBtn.className =
        "ml-4 bg-green-500 text-white px-2 py-1 rounded";

    li.appendChild(completeBtn);

    // Edit Button

    const editBtn = document.createElement("button");

    editBtn.textContent = "Edit";

    editBtn.className =
        "ml-2 bg-yellow-500 text-white px-2 py-1 rounded";

    li.appendChild(editBtn);

    // Delete Button

    const deletebtn = document.createElement("button");

    deletebtn.textContent = "Delete";

    deletebtn.className =
        "ml-2 bg-red-500 text-white px-2 py-1 rounded";

    li.appendChild(deletebtn);

    Li.appendChild(li);

    // ---------------- COMPLETE ----------------

    completeBtn.addEventListener("click", () => {

        li.classList.toggle("Completed");

        if (li.classList.contains("Completed")) {
            taskText.style.textDecoration = "line-through";
            taskText.style.opacity = "0.6";
        } else {
            taskText.style.textDecoration = "none";
            taskText.style.opacity = "1";
        }

    });

    // ---------------- EDIT ----------------

    editBtn.addEventListener("click", () => {

        editLi = li;

        taskInput.value = taskText.textContent;

        btn.textContent = "Update";

    });

    // ---------------- DELETE ----------------

    deletebtn.addEventListener("click", () => {

        const index = tasks.indexOf(taskText.textContent);

        if (index !== -1) {
            tasks.splice(index, 1);
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.remove();

    });

}

// -------------------- LOAD TASKS --------------------

for (let i = 0; i < tasks.length; i++) {
    createTask(tasks[i]);
}