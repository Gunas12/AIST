let body = document.querySelector("body");
let container = document.querySelector(".container");
let input = document.createElement("input");
let btn = document.createElement("button");
let btnremove = document.createElement("button");
let list = document.querySelector('.ToDoList');
btn.textContent = "ADD";
btnremove.textContent = "DELETE";

body.appendChild(container);
container.appendChild(input);
container.appendChild(btn);
container.appendChild(btnremove);
container.appendChild(list);

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        btn.classList.add('active');
    }
});
function createListAdd() {
    if (input.value.trim() != 0) {
        let taskText = input.value.trim();

        let list_l = document.createElement("div");
        list_l.setAttribute("class", "list-item");
        list_l.textContent = taskText;

        let removebutton = document.createElement("button");
        let markbutton = document.createElement("button");
        removebutton.textContent = '✘';
        removebutton.setAttribute("class", "delbut");
        markbutton.setAttribute("class", "markbut");
        markbutton.textContent = '✔';
        list_l.appendChild(removebutton);
        list_l.appendChild(markbutton);
        list.appendChild(list_l);
        saveTasksToLocalStorage(taskText);
        input.value = '';
        removebutton.addEventListener('click', (e) => {
            list_l.remove();
            removeTaskFromLocalStorage(taskText);
        });
        markbutton.addEventListener('click', (e) => {
            list_l.classList.toggle('completed');
            updateTaskStatusInLocalStorage(taskText, list_l.classList.contains('completed'));
        });
    } else {
        return alert('Enter input!');
    }
}
function RemoveAll() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    localStorage.removeItem("tasks");
}
btn.addEventListener('click', () => {
    createListAdd();
});

btnremove.addEventListener('click', () => {
    RemoveAll();
});
function saveTasksToLocalStorage(taskText) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

function removeTaskFromLocalStorage(taskText) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        const updatedTasks = savedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
}

function updateTaskStatusInLocalStorage(taskText, completed) {
    localStorage.setItem(taskText, completed ? 'completed' : '');
}

function loadTasksFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(function(task) {
            let list_l = document.createElement("div");
            list_l.setAttribute("class", "list-item");
            list_l.textContent = task;

            let removebutton = document.createElement("button");
            removebutton.textContent = '✘';
            removebutton.setAttribute("class", "delbut");
           
            let markbutton = document.createElement("button");
            markbutton.textContent = '✔';
            markbutton.setAttribute("class", "markbut");
            list_l.appendChild(removebutton);
            list_l.appendChild(markbutton);
            list.appendChild(list_l);

            removebutton.addEventListener('click', (e) => {
                list_l.remove();
                removeTaskFromLocalStorage(task);
            });

            markbutton.addEventListener('click', (e) => {
                list_l.classList.toggle('completed');
                updateTaskStatusInLocalStorage(task, list_l.classList.contains('completed'));
            });
            if (localStorage.getItem(task) === 'completed') {
                list_l.classList.add('completed');
            }
        });
    }
}
loadTasksFromLocalStorage();