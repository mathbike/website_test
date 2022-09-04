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
var headerTitle = document.getElementById('header-title')
// change the text
headerTitle.textContent = 'Hello'
// change the text (paying attention to styling)
headerTitle.innerText = 'Hello'
// insert html into element
headerTitle.innerHTML = '<h3>Hello<h3>'

