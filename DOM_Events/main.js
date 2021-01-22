const generateHeading = (content, type) => {
    let newHeading = document.createElement(type);
    let newText = document.createTextNode(content);
    newHeading.appendChild(newText);
    newHeading.id = type;

    return newHeading;
}

const generateParagraph = content => {
    let newParagraph = document.createElement('p');
    let newText = document.createTextNode(content);
    newParagraph.appendChild(newText);

    return newParagraph;
}

const generateButton = content => {
    let newButton = document.createElement('button');
    let newText = document.createTextNode(content);
    newButton.appendChild(newText);
    newButton.classList.add('btn', 'btn-secondary');

    return newButton;
}

const renderToApp = arr => {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById('app').appendChild(arr[i]);
    }
}

const changeColorRed = () => {
    document.getElementById('h1').style.color === 'red' ? document.getElementById('h1').style.color = 'black' : document.getElementById('h1').style.color = 'red';
}

const el1 = generateHeading('Hello World!', 'h1');
const el2 = generateHeading('How you doing?', 'h2');
const el3 = generateParagraph('Its nice to see you here!');
const el4 = generateButton('This is a button');
const el5 = generateButton('This is another button');
const el6 = generateButton('Make h1 red');
el6.addEventListener('click', changeColorRed);

//Prints info about the event and removes the element that triggered the event from dom
const eventHandlerFunction = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log(event.timeStamp);
    event.path[0].remove();
}

const el7 = generateButton('eventHandlerFunction');
el7.addEventListener('click', eventHandlerFunction);

let elements = [el1, el2, el3, el4, el5, el6, el7];

renderToApp(elements);