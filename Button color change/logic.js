// selections
const toggle = document.getElementById('options');
const object = document.querySelectorAll('.object');



// functions
const redColorChange = () => {
    for (let i = 0; i < object.length; i++) {
        // object[i].classList.remove(object[i].classList[1]);
        object[i].style.backgroundColor = 'red';
        // object[i].classList.add('redCode');
    }
}

const greenColorChange = () => {
    for (let i = 0; i < object.length; i++) {
        // object[i].classList.remove(object[i].classList[1]);
        object[i].style.backgroundColor = 'green';
        // object[i].classList.add('greenCode');
    }
}

const randomColorChange = () => {    
    for (let i = 0; i < object.length; i++) {
        // object[i].classList.remove(object[i].classList[1]);

        let rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
        let color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        object[i].style.backgroundColor = color;
    }
}

const restoreDefault = () => {
    for (let i = 0; i < object.length; i++) {
        object[i].style.removeProperty('background-color');
    }
}



// event listeners
toggle.addEventListener('change', () => {
    const value = toggle.value;
    switch (value) {
        case ('red'):
            redColorChange();
            break;
        case ('green'):
            greenColorChange();
            break;
        case ('random'):
            randomColorChange();
            break;
        case ('default'):
            restoreDefault();
            break;
        default:
            break;
    }
});


