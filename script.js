const projects = document.querySelectorAll('.list');
const initialActive = document.querySelector('.lista');
const addProject = document.querySelector('.plus');
const projectsPane = document.querySelector('#projects');
const title = document.querySelector('#current');
const done = document.querySelectorAll('#done');
const priorities1 = document.querySelectorAll('.priority1');
const priorities2 = document.querySelectorAll('.priority2');
const priorities3 = document.querySelectorAll('.priority3');

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

function priorityFunc(e){
    console.log(e);
}

priorities1.forEach(priority => {
    priority.addEventListener('click', priorityFunc(priority.class))
})


// priorities1.forEach(priority => {
//     priority.addEventListener('click', function(){
//         priority.classList.remove('priority1');
//         priority.classList.add('priority2');
//         console.log('2');
//     })
// })

class Task {
    constructor(name, priority, date) {
        this.name = name;
        this.priority = priority;
        this.date = date;
    }
}

const taskOne = new Task('blah','high','09122023');

