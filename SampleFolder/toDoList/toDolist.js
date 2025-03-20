const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText != ""){
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
        displayClearAllBtn();
    }
}

function displayTasks(){
    taskList.innerHTML = "";
    tasks.forEach(function (task, index){
        const li = document.createElement("li");
        li.innerHTML = `<input type = "checkbox" id = "task-${index}" ${task.completed ? "checked" : ""}>
                        <label for = "task-${index}"> ${task.text}</label>`
        li.querySelector("input").addEventListener("change", function(){
            toggleTask(index);
        });
        taskList.appendChild(li);
    });
}

function displayClearAllBtn(){
    if(!document.getElementById("clearAllBtn")){
    const clearAllBtn = document.createElement("button");
    clearAllBtn.innerHTML = `Clear All`;
    clearAllBtn.id = `clearAllBtn`;
    clearAllBtn.addEventListener("click", function(){
        clearAll();
    });
    clearCompletedBtn.insertAdjacentElement("afterend", clearAllBtn);
    }
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks(){
    tasks = tasks.filter(function(task){
        return !task.completed
    });
    displayTasks();
}

function clearAll(){
    tasks = [];
    taskList.innerHTML = "";

    const clearAllBtn = document.getElementById("clearAllBtn");
    if(clearAllBtn){
        clearAllBtn.remove();
    }
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);


displayTasks();