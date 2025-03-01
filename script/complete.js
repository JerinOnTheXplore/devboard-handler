const completeButtons = document.getElementsByClassName('complete-btn');
const buttonCards = document.querySelectorAll('.button-cards');
const currentTime = new Date().toLocaleTimeString(); 

for(let i = 0; i < completeButtons.length; i++){
    completeButtons[i].addEventListener('click',function(event){
        event.preventDefault();
        alert('Board updated Successfully');
        const currentTotalTasks = document.getElementById('total-tasks').innerText;
        const convertedCurrentTotalTasks = parseInt(currentTotalTasks);
        const taskAddition = convertedCurrentTotalTasks + 1 ;
        document.getElementById('total-tasks').innerText = taskAddition ;
        const currentAssignedTasks = document.getElementById('assigned-tasks').innerText;
        const convertedCurrentAssignedTasks = parseInt(currentAssignedTasks);
        const taskSubtraction = convertedCurrentAssignedTasks - 1;
        document.getElementById('assigned-tasks').innerText = taskSubtraction;
        completeButtons[i].disabled = true;
        completeButtons[i].style.opacity = 0.5;
        const container = document.getElementById('activity-container');
        const p = document.createElement('p');
        p.innerText = `You have completed the task ${buttonCards[i].innerText} at ${currentTime}`;
        container.appendChild(p);
        if(i===5){
            alert('Congrates!!! You have completed all the current task');
        }

    })

}
