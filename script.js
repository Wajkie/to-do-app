const Tasks =[30];
const taskForm = document.querySelector('#newTaskForm');
const NewTaskbtn = document.getElementById("btnNewTask");
const inputbar = document.querySelector('input');


function updateValue(e) {
    log.textContent = e.target.value;
  }
taskForm.addEventListener('submit', (e) => {

    e.preventDefault();
    for (i = 0; i < taskForm.length;i++) {
        if (taskForm[i].value !== "submit") {
            Tasks.push(taskForm[i].value);
        }
    }
    console.log(Tasks);
});

// const taskTemplate = `
// <div id="${taskName}">
//     <span>${taskPosted}</span>
//     <h3>${taskTitle}</h3>
//     <p>${taskCategory}</p>
//     <p>${taskdescription}</p>
//     <p>${taskDeadline}</p>
// </div>
// `
// const taskbuilder = {
//     title:'',
//     category:'',
//     description:'',
//     posted: '',
//     generator: function() {
//         return taskTemplate;
//     }
// }
// const timeDiff = function () {

// }