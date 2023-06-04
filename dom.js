// var headerTitle = document.getElementById('main-header');

// headerTitle.style.borderBottom = 'solid 3px #000'

// console.log(document.all);

let items = document.getElementsByClassName('list-group-item')
console.log(items);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = '#f4f4f4';

for (let i = 0 ; i<items.length ; i++){
    items[2].style.backgroundColor = 'green';
    items[i].style.fontWeight = 'bold'
}
