const projects = document.querySelectorAll('.list');
const addProject = document.querySelector('.plus');
const projectsPane = document.querySelector('#projects');

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
        let input = prompt('Enter Project Name');
        newProj.innerHTML = (input);
    })
})

projects.forEach(project => {
    project.addEventListener('contextmenu', function(a){
        a.preventDefault();
        project.remove();
    })
    project.addEventListener('dblclick', function(){
        let input = prompt('Enter Project Name');
        project.innerHTML = (input);
    })
})

class Task {
    constructor(name, priority, date) {
        this.name = name;
        this.priority = priority;
        this.date = date;
    }
}

const taskOne = new Task('blah','high','09122023');

