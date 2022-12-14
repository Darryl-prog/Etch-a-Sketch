
let color = 'black'; // default color

let size = 32; //default dimension

let mouseDown = false; //default
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


const defaultSize = () => {
    const sketchpad = document.querySelector('#sketchpad');
    const squares = document.querySelectorAll('.square');

    squares.forEach((div) => div.remove());

    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    document.querySelector('#dimension').textContent = `${size} X ${size}`;

    let area = size * size;

    for (let i = 1; i <= area; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        squares.classList.add('border');
        squares.style.userSelect = 'none';
        squares.addEventListener('mouseover', paint);
        squares.addEventListener('mousedown', paint)
        sketchpad.appendChild(squares);
    }
}

const changeSize = (size) => {
    const sketchpad = document.querySelector('#sketchpad');
    const squares = document.querySelectorAll('.square');

    squares.forEach((div) => div.remove());

    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    document.querySelector('#dimension').textContent = `${size} X ${size}`;

    let area = size * size;

    for (let i = 1; i <= area; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        squares.classList.add('border');
        squares.style.userSelect = 'none';
        squares.addEventListener('mouseover', paint);
        squares.addEventListener('mousedown', paint)
        sketchpad.appendChild(squares);
    }
}

const sizeInput = function () {
    changeSize(this.value)
}

const paint = function (e) {
    if (mouseDown && e.type === 'mouseover') {
        if (color === 'random') {
            const colorR = Math.floor(Math.random() * 256);
            const colorG = Math.floor(Math.random() * 256);
            const colorB = Math.floor(Math.random() * 256);
            const color = `rgb(${colorR}, ${colorG}, ${colorB}, 0.8)`;
            this.style.background = color;
            document.querySelector('#button-random').style.background = color;
        }
        else if (color === 'select') {
            const color = document.querySelector(`input[type='color']`).value;
            console.log(color);
            this.style.background = color;
        }
        else {
            this.style.background = color;
        }

    }
    else if (e.type === 'mousedown') {
        if (color === 'random') {
            const colorR = Math.floor(Math.random() * 256);
            const colorG = Math.floor(Math.random() * 256);
            const colorB = Math.floor(Math.random() * 256);
            const color = `rgb(${colorR}, ${colorG}, ${colorB}, 0.8)`;
            this.style.background = color;
            document.querySelector('#button-random').style.background = color;
        }
        else if (color === 'select') {
            const color = document.querySelector(`input[type='color']`).value;
            this.style.background = color;
        }
        else {
            this.style.background = color;
        }
    }
}

const changeColor = function (choice) {
    color = choice;
}

const reset = function () {
    const squares = document.querySelectorAll('.square');
    squares.forEach((div) => div.style.background = 'white');
}

const toggle = function () {
    const squares = document.querySelectorAll('.square');
    squares.forEach((div) => div.classList.toggle('border'));
}

const colorSelector = function () {
    color = `${this.value}`;
    document.querySelector('.fas').style.background = `${this.value}`;
    document.querySelector('#button-pen').style.background = `${this.value}`;

}

//Event listeners
document.querySelector(`input[type='range']`).addEventListener('change', sizeInput);
document.querySelector(`input[type='color']`).addEventListener('change', colorSelector);
document.querySelector('#button-pen').addEventListener('click', () => changeColor('select'));
document.querySelector('#button-erase').addEventListener('click', () => changeColor('white'));
document.querySelector('#button-random').addEventListener('click', () => changeColor('random'));
document.querySelector('#button-reset').addEventListener('click', reset);
document.querySelector('#button-toggle').addEventListener('click', toggle);


defaultSize();