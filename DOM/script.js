document          // Root object representing the entire document
document.documentElement  // <html> element
document.head     // <head> element  
document.body     // <body> element

const element = document.getElementById('myId');


const elements = document.getElementsByClassName('myClass');

const element = document.querySelector('.my-class');     // First match
const elements = document.querySelectorAll('.my-class'); // NodeList

const elements = document.getElementsByName('username');


// Create element
const div = document.createElement('div');
const img = document.createElement('img');

// Create text node
const text = document.createTextNode('Hello World');

// Set attributes
div.textContent = 'Hello World';
img.src = 'image.jpg';
img.alt = 'Description';

// Create with innerHTML
const container = document.createElement('div');
container.innerHTML = '<p>Hello <strong>World</strong></p>';


const element = document.querySelector('#myElement');

// Content
element.textContent = 'New text';     // Text only (safe)
element.innerHTML = '<strong>Bold</strong>';  // HTML (careful with XSS)

// Attributes
element.setAttribute('data-id', '123');
element.removeAttribute('disabled');
const value = element.getAttribute('class');

// Properties
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('hidden');
element.style.color = 'red';
element.style.display = 'none';

// Dataset (data-* attributes)
element.dataset.id = '123';
const id = element.dataset.id;


const element = document.querySelector('#parent');

// Children
element.children        // HTMLCollection
element.childNodes      // NodeList (includes text nodes)
element.firstChild
element.lastChild
element.firstElementChild
element.lastElementChild

// Parent
element.parentElement
element.parentNode

// Siblings
element.nextElementSibling
element.previousElementSibling



const parent = document.querySelector('#container');
const newElement = document.createElement('div');

// Insert before a specific child
parent.insertBefore(newElement, parent.firstChild);

// Insert at end
parent.appendChild(newElement);
parent.append(newElement);  // Modern (returns void)

// Replace
parent.replaceChild(newElement, oldElement);

// Remove
parent.removeChild(oldElement);
element.remove();  // Modern - removes itself

// Empty container
parent.innerHTML = '';
parent.textContent = '';



// Add event listener
element.addEventListener('click', function(event) {
    console.log('Clicked!', event.target);
});

// Remove event listener
function handler(event) {
    console.log('Handled');
}
element.addEventListener('click', handler);
element.removeEventListener('click', handler);

// Event object properties
event.target      // Element that triggered event
event.currentTarget // Element listening for event
event.preventDefault(); // Prevent default behavior
event.stopPropagation(); // Stop bubbling


function addItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.onclick = () => li.remove();
    
    li.appendChild(button);
    document.querySelector('#list').append(li);
}




document.querySelector('.btn').addEventListener('click', () => {
    document.querySelector('.card').classList.toggle('active');
});



document.querySelector('form').addEventListener('submit', (e) => {
    const email = document.querySelector('#email').value;
    if (!email.includes('@')) {
        e.preventDefault();
        alert('Invalid email');
    }
});


// Destructuring
const { body, head } = document;

// Spread operator
const allButtons = [...document.querySelectorAll('button')];

// Template literals
element.innerHTML = `
    <div class="user-card">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
    </div>
`;

// Arrow functions
document.addEventListener('DOMContentLoaded', () => {
    // DOM ready
});



// Good - Batch DOM reads then writes
const elements = document.querySelectorAll('.item');
let totalHeight = 0;
elements.forEach(el => totalHeight += el.offsetHeight); // Read phase

elements.forEach(el => el.style.height = '50px');       // Write phase

// Use document fragment for multiple inserts
const fragment = document.createDocumentFragment();
[1,2,3].forEach(i => {
    const div = document.createElement('div');
    div.textContent = i;
    fragment.appendChild(div);
});
parent.appendChild(fragment);