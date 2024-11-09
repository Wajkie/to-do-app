const Tasks =[30];
const taskForm = document.querySelector('#newTaskForm');
const inputbar = document.querySelector('input');
const taskWrapper = document.querySelector('#taskWrapper');
const resetBtn = document.querySelector("#reset");
let dateNOw = Date();
resetBtn.addEventListener('click', () => {
	localStorage.removeItem("taskWrapper");
	taskWrapper.innerHTML = '';
});

taskForm.addEventListener('submit', (e) => {
	e.preventDefault();
const taskdiv = document.createElement('div');
taskdiv.setAttribute('id', taskForm.taskTitle.value);
taskWrapper.appendChild(taskdiv);
const removeBtn = document.createElement('div');
removeBtn.setAttribute('class', 'remove');
removeBtn.textContent = 'X';
	taskdiv.innerHTML = `
		<h3>${taskForm.taskTitle.value}</h3>
		<span> Posted: ${dateNOw}</span>
		<p>Deadline: ${taskForm.taskDeadline.value}</p>
		<p> Task category: ${taskForm.taskCategory.value}</p>
		<p>Task description: ${taskForm.taskDescription.value}</p>
	`
	taskdiv.appendChild(removeBtn);
	localStorage.setItem("taskWrapper", taskWrapper.innerHTML);

});
taskWrapper.innerHTML = localStorage.getItem("taskWrapper");
taskWrapper.addEventListener('click', (e) => {
	if (e.target == document.querySelector(".remove")){
	const aa = e.target.parentElement;
	aa.remove();
	}
});


