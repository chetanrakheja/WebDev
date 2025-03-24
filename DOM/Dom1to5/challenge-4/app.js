/**
 * Write your challenge solution here
 */

totalTaskText = document.getElementById('totalTasks')
taskCompletedText = document.getElementById('completedTasks')

document.getElementById('taskList').addEventListener('click', function (event) {
    const taskId = event.target.dataset.taskId;
    
    if (!taskId) return; // Ignore clicks outside the tasks

    if (event.target.classList.contains('complete-checkbox')) {
        if (event.target.checked){
            document.querySelector(`.task-item[data-task-id="${taskId}"]`).classList.add('completed')
            // taskCompleted = taskCompleted + 1
        }
        else{
            document.querySelector(`.task-item[data-task-id="${taskId}"]`).classList.remove('completed')
            // taskCompleted = taskCompleted - 1
        }
        console.log(`Task ${taskId} completion changed: ${event.target.checked}`);
    } 
    
    else if (event.target.classList.contains('delete-button')) {
        document.querySelector(`.task-item[data-task-id="${taskId}"]`).remove();
        console.log(`Task ${taskId} deleted`);
    }
    let taskCompleted = document.getElementsByClassName('completed').length
    console.log("taskCompleted", taskCompleted)
    totalTask = taskList.childElementCount
    totalTaskText.textContent = `Total tasks: ${totalTask}`
    taskCompletedText.textContent = `Completed: ${taskCompleted}`

    if (totalTask ==0){
        const fragment = document.createDocumentFragment();
        const li = fragment.appendChild(document.createElement("li"))
        li.classList.add('empty-list')
        li.textContent ="No tasks yet. Add one above!"
        taskList.appendChild(fragment)
    }

});

document.getElementById('addButton').addEventListener('click',function(event){

    console.log(event)
    let taskInput = document.getElementById('taskInput')

    let taskList = document.getElementById('taskList')
    
    let emptyli = document.querySelector(`.empty-list`)
    if(emptyli!=null){
        emptyli.remove();
    }
    
    const fragment = document.createDocumentFragment();
    const li = fragment.appendChild(document.createElement("li"))
    li.classList.add('task-item')
    li.setAttribute('data-task-id',taskInput.value)
    const input = li.appendChild(document.createElement("input"))
    
    input.classList.add('complete-checkbox')
    input.type="checkbox"
    input.setAttribute('data-task-id',taskInput.value)
    
    const div = li.appendChild(document.createElement("div"))
    div.classList.add('task-text')
    div.setAttribute('data-task-id',taskInput.value)

    const btn = li.appendChild(document.createElement("button"))
    btn.setAttribute('data-task-id',taskInput.value)
    btn.classList.add('delete-button')
    btn.textContent = "Delete";

    div.textContent = taskInput.value;
    
    taskList.appendChild(fragment)
    
    let taskCompleted = document.getElementsByClassName('completed').length
    totalTask = taskList.childElementCount
    totalTaskText.textContent = `Total tasks: ${totalTask}`
    taskCompletedText.textContent = `Completed: ${taskCompleted}`
    taskInput.value=''

    if (totalTask ==0){
        const fragment = document.createDocumentFragment();
        const li = fragment.appendChild(document.createElement("li"))
        li.classList.add('empty-list')
        li.textContent ="No tasks yet. Add one above!"
        taskList.appendChild(fragment)
    }

})