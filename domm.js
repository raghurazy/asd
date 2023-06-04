// let items = document.getElementsByClassName('list-group-item')
// console.log(items);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = '#f4f4f4';

// for (let i = 0 ; i<items.length ; i++){
//     items[2].style.backgroundColor = 'green';
//     items[i].style.fontWeight = 'bold'
// }
// var li = document.getElementsByTagName('li')
// console.log(li);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow'


// li[4].textContent = 'hello 2';
// li[4].style.fontWeight = 'bold';
// li[4].style.backgroundColor = 'pink'

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red';

// var SecondItem = document.querySelector('.list-group-item:nth-child(2)');
// SecondItem.style.color = 'green'

var odd = document.querySelectorAll('li:nth-child(odd)');
var oddd = document.querySelectorAll('li:nth-child(2)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}