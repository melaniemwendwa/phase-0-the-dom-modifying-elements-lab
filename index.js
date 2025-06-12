// Write your code here!
// Remove the <main id="main"> element
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id to 'victory'
newHeader.id = 'victory';

// Set the text inside the <h1>
newHeader.textContent = 'Mwendwa Thuranira is the champion';

