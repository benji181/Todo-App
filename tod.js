var ul = document.querySelector('ul');
var input = document.getElementById('item');

var itemArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

itemArray.forEach(addTask);

function addTask(text){
    var li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

function add(){
    itemArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemArray));
    addTask(input.value);
    input.value = ''; 
}

function del(){
    localStorage.clear();
    ul.innerHTML = '';
    itemArray = [];
}
