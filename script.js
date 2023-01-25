const projects = document.querySelectorAll('.list');
const initialActive = document.querySelector('.lista');
const addProject = document.querySelector('.plus');
const projectsPane = document.querySelector('#projects');
const title = document.querySelector('#current');
const dones = document.querySelectorAll('.done');
const dues = document.querySelectorAll('#due');
const priorities = document.querySelectorAll('.priority');

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
        active.classList.remove('lista');
        active.classList.add('list');
        project.classList.add('lista');
    })
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
    constructor(name, priority, date) {
        this.name = name;
        this.priority = priority;
        this.date = date;
    }
}

class Project {
    constructor(name) {
        this.name = name;
    }
}

const taskOne = new Task('blah','high','09122023');

