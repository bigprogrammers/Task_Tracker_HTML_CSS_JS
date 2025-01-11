const taskInput=document.getElementById('taskInput');
const addTaskBtn=document.getElementById('addTaskBtn');
const tasks=document.getElementById('tasks');

addTaskBtn.addEventListener('click',function(){
    const taskText=taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const taskEl=document.createElement('li');
    taskEl.classList.add('task');
    taskEl.innerHTML=`<span>${taskText}</span><button class="delete-btn">Delete</button>`;
    tasks.appendChild(taskEl);
    taskInput.value='';    
});

tasks.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        event.target.parentElement.remove();
    }
});

taskInput.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        event.preventDefault();
        addTaskBtn.click();
    }
});
