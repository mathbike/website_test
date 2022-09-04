// EXAMINE THE DOCUMENT OBJECT
console.dir(document);

// access specific element int the DOM
console.dir(document.domain);
console.dir(document.URL);
console.dir(document.head);

// change something in the DOM
document.URL = 'newURL'

// GET ELEMENT BY ID
console.log(document.getElementById('header-title'));
// define variable
var headerTitle = document.getElementById('header-title');
// change the text
headerTitle.textContent = 'Hello';
// change the text (paying attention to styling)
headerTitle.innerText = 'Hello';
// insert html into element
headerTitle.innerHTML = '<h3>Hello<h3>';
// change style
headerTitle.style.borderBottom = 'solid 3px #000';

// GET ELEMENT BY CLASS NAME
var items = document.getElementsByClassName('list-group-items');
console.log(items);
console.log(items[0]);
items[0].textContent = 'Hello';
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'yellow';
// loop through all items in list and change background color:
// set i to 0, as long as i is less than list length, incerement i by 1
for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#000';
}
