// Display date and time
const dateTime = new Date();
const dateTimeString = `Today is ${dateTime.toLocaleTimeString()} on ${dateTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`;
document.getElementById("date-time").innerHTML = dateTimeString;

// Handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const mood = document.getElementById('mood').value;
  document.getElementById("greeting").innerHTML = `The Romantic Panda welcomes you, ${name}! Were glad youre doing ${mood}.`;
})

//Add Functionality for Buttons
const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
  document.body.style.color = 'yellow';
});

const button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
  alert('Congratulations, you clicked the button!');
});

const button4 = document.getElementById('button4');
button4.addEventListener('click', () => {
  const num1 = parseFloat(prompt('Enter the first number:'));
  const num2 = parseFloat(prompt('Enter the second number:'));
  const sum = num1 + num2;
  alert(`The sum of ${num1} and ${num2} is ${sum}`);
});

const button5 = document.getElementById('button5');
button5.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});