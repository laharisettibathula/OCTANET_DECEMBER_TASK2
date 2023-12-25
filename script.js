function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");
        li.classList.add("task-item");

        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(taskText);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function clearTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}