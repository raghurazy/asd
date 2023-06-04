let items = document.getElementsByClassName('list-group-item')
console.log(items);
items[1].textContent = 'hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = '#f4f4f4';

for (let i = 0 ; i<items.length ; i++){
    items[2].style.backgroundColor = 'green';
    items[i].style.fontWeight = 'bold'
}
var li = document.getElementsByTagName('li')
console.log(li);
li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow'


li[4].textContent = 'hello 2';
li[4].style.fontWeight = 'bold';
li[4].style.backgroundColor = 'pink'