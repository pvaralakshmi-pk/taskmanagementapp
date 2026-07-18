let tasks = [];

function addTask() {

const input = document.getElementById("taskInput");

const task = input.value;

if(task===""){

alert("Enter Task");

return;

}

tasks.push(task);

displayTasks();

input.value="";

}

function displayTasks(){

const list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

list.innerHTML+=`

<li>

${task}

<button class="delete"

onclick="deleteTask(${index})">

Delete

</button>

</li>

`;

});

}

function deleteTask(index){

tasks.splice(index,1);

displayTasks();

}