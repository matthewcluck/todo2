const projects = document.querySelectorAll('.list');
const initialActive = document.querySelector('.lista');
const addProject = document.querySelector('.plus');
const projectsPane = document.querySelector('#projects');
const title = document.querySelector('#current');
const dones = document.querySelectorAll('.done');
const dues = document.querySelectorAll('#due');
const priorities = document.querySelectorAll('.priority');
const plusTask = document.querySelector('#plustask');
const taskBox = document.querySelector('#taskbox');
const initialTasks = document.querySelectorAll('.clist');

initialActive.addEventListener('dblclick', function(){
    let input = prompt('Enter Project Name','House Cleaning');
    initialActive.innerHTML = input;
})

initialActive.addEventListener('click', function(){
    let active = document.querySelector('.lista');
    title.innerHTML = initialActive.innerHTML;
    active.classList.remove('lista');
    active.classList.add('list');
    initialActive.classList.add('lista');
})

addProject.addEventListener('click', function(){
    let newProj = document.createElement('div');
    newProj.classList.add('list');
    let addProj = projectsPane.insertBefore(newProj,addProject);
    addProj.innerHTML = ('New Project');
    newProj.addEventListener('contextmenu', function(a){
        a.preventDefault();
        newProj.remove();
    })
    newProj.addEventListener('dblclick', function(){
        let input = prompt('Enter Project Name','New Project');
        newProj.innerHTML = (input);
    })
    newProj.addEventListener('click', function(){
        let active = document.querySelector('.lista');
        console.log(active);
        title.innerHTML = newProj.innerHTML;
        active.classList.remove('lista');
        active.classList.add('list');
        newProj.classList.add('lista');
    })
})

projects.forEach(project => {
    project.addEventListener('contextmenu', function(a){
        a.preventDefault();
        project.remove();
    })
    project.addEventListener('dblclick', function(){
        let input = prompt('Enter Project Name',project.innerHTML);
        project.innerHTML = (input);
    })
    project.addEventListener('click', function(){
        let active = document.querySelector('.lista');
        console.log(active);
        title.innerHTML = project.innerHTML;
        title.className = project.id;
        active.classList.remove('lista');
        active.classList.add('list');
        project.classList.add('lista');
    })
})

initialTasks.forEach(task => {
    task.addEventListener('dblclick', function(){
        let input = prompt('Enter task description',task.innerHTML);
        task.innerHTML = input;
    });
})

dones.forEach(done => {
    done.addEventListener('click',function(){
        if (done.style.backgroundColor == "black"){
            done.style.backgroundColor = "rgb(48, 46, 46)"
        } else {done.style.backgroundColor = "black"}
    })
})

priorities.forEach(priority => {
    priority.addEventListener('click',function(){
        if (priority.style.backgroundColor == "rgb(29, 161, 62)"){
            priority.style.backgroundColor = "rgb(166, 170, 40)";
        } else if (priority.style.backgroundColor == "rgb(166, 170, 40)"){
            priority.style.backgroundColor = "rgb(220, 109, 30)";
        } else {priority.style.backgroundColor = "rgb(29, 161, 62)"}
    })
})

class Task {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

plusTask.addEventListener('click',function(){
    let task = new Task('New Task',title.className);

    let taskDesc = document.createElement('div');
    taskDesc.classList.add('clist');
    taskDesc.id = (task.id);
    taskDesc.innerHTML = "New task, double click";
    taskDesc.addEventListener('dblclick',function(){
        let input = prompt('Enter task description','New Task');
        taskDesc.innerHTML = input;
    })
    taskBox.insertBefore(taskDesc, plusTask);

    let taskPriority = document.createElement('div');
    taskPriority.classList.add('priority');
    taskPriority.id = (task.id);
    taskBox.insertBefore(taskPriority, plusTask);
    taskPriority.addEventListener('click',function(){
        if (taskPriority.style.backgroundColor == "rgb(29, 161, 62)"){
            taskPriority.style.backgroundColor = "rgb(166, 170, 40)";
        } else if (taskPriority.style.backgroundColor == "rgb(166, 170, 40)"){
            taskPriority.style.backgroundColor = "rgb(220, 109, 30)";
        } else {taskPriority.style.backgroundColor = "rgb(29, 161, 62)"}
    });

    let taskDue = document.createElement('div');
    taskDue.classList.add('due');
    taskDue.id = (task.id);
    taskDue.innerHTML = '<input type="date"></input>';
    taskBox.insertBefore(taskDue, plusTask);

    let taskDone = document.createElement('div');
    taskDone.classList.add('done');
    taskDone.id = (task.id);
    taskBox.insertBefore(taskDone, plusTask);
    taskDone.addEventListener('click',function(){
        if (taskDone.style.backgroundColor == "black"){
            taskDone.style.backgroundColor = "rgb(48, 46, 46)"
        } else {taskDone.style.backgroundColor = "black"}
    })
})

