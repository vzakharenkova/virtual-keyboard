import keyboard from './keyboard.js';
let keyboardArr = Object.entries(keyboard);
console.log(keyboardArr);
let language = "EN";

function setLocalStorage() {
    localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage);


function drawKeyboardField() {

    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', '<div id="container"></div>');

    const container = document.querySelector('#container');
    container.insertAdjacentHTML('beforeend', '<h1 id="heading">Виртуальная клавиатура</h1>');
    container.insertAdjacentHTML('beforeend', '<textarea id="textarea" autofocus/>');
    container.insertAdjacentHTML('beforeend', '<div id="keyboard_container"></div>');
    container.insertAdjacentHTML('beforeend', '<div id="additional_info"><div>Клавиатура создана в операционной системе Windows<div/><div>Для переключения языка комбинация: левые ctrl + shift<div/></div>');

    const keyboardContainer = document.querySelector('#keyboard_container');
    let rowsAmount = 5;
    for (let i = 0; i < rowsAmount; i++) {
        keyboardContainer.insertAdjacentHTML('beforeend', '<div class="row"></div>');
        let rows = document.querySelectorAll('.row');
        switch (i) {
            case 0: 
                rows[0].insertAdjacentHTML('beforeend', '<div class="btn letter_btn symbol_btn"></div>');
                for (let i = 0; i < 10; i++) {
                    rows[0].insertAdjacentHTML('beforeend', '<div class="btn digit_btn"></div>');
                }
                for (let i = 0; i < 2; i++) {
                    rows[0].insertAdjacentHTML('beforeend', '<div class="btn symbol_btn"></div>');
                }
                rows[0].insertAdjacentHTML('beforeend', '<div class="btn activity_btn"></div>');
                break;
            case 1: 
                rows[1].insertAdjacentHTML('beforeend', '<div class="btn activity_btn"></div>');
                for (let i = 0; i < 10; i++) {
                    rows[1].insertAdjacentHTML('beforeend', '<div class="btn letter_btn"></div>');
                }
                for (let i = 0; i < 2; i++) {
                    rows[1].insertAdjacentHTML('beforeend', '<div class="btn letter_btn symbol_btn"></div>');
                }
                rows[1].insertAdjacentHTML('beforeend', '<div class="btn symbol_btn"></div>');
                rows[1].insertAdjacentHTML('beforeend', '<div class="btn activity_btn"></div>');
                break;
            case 2: 
                rows[2].insertAdjacentHTML('beforeend', '<div class="btn activity_btn"></div>');
                for (let i = 0; i < 9; i++) {
                    rows[2].insertAdjacentHTML('beforeend', '<div class="btn letter_btn"></div>');
                }
                for (let i = 0; i < 2; i++) {
                    rows[2].insertAdjacentHTML('beforeend', '<div class="btn letter_btn symbol_btn"></div>');
                }
                rows[2].insertAdjacentHTML('beforeend', '<div class="btn activity_btn"></div>');
                break;
            case 3:
                rows[3].insertAdjacentHTML('beforeend', '<div class="btn activity_btn"></div>');
                for (let i = 0; i < 7; i++) {
                    rows[3].insertAdjacentHTML('beforeend', '<div class="btn letter_btn"></div>');
                }
                for (let i = 0; i < 2; i++) {
                    rows[3].insertAdjacentHTML('beforeend', '<div class="btn letter_btn symbol_btn"></div>');
                }
                rows[3].insertAdjacentHTML('beforeend', '<div class="btn symbol_btn"></div>');
                rows[3].insertAdjacentHTML('beforeend', '<div class="btn activity_btn"></div>');
                break;
            case 4:
                for (let i = 0; i < 6; i++) {
                    rows[4].insertAdjacentHTML('beforeend', '<div class="btn activity_btn"></div>');
                }
                rows[4].insertAdjacentHTML('beforeend', '<div id="keyboard_arrows"></div>');
                let keyboardArrows =  document.querySelector('#keyboard_arrows');
                for (let i = 0; i < 4; i++) {
                    keyboardArrows.insertAdjacentHTML('beforeend', '<div class="btn arrow_btn"></div>');
                }
                break;
        }
    }
    const rows = document.querySelectorAll('.row');
    const buttons = document.querySelectorAll('.btn');
    const letterButtons = document.querySelectorAll('.letter_btn');
    console.log(letterButtons)
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].insertAdjacentText('beforeend', `${keyboardArr[i][1].meaning[`${language}`][0]}`)
    }
}




// function toggleLanguage(lang) {

// }


window.onload = function() {

    drawKeyboardField();
    // getLocalStorage();

    const rows = document.querySelectorAll('.row');
    const buttons = document.querySelectorAll('.btn');
    const capsLock = rows[2].children[0];
    const shiftLeft = rows[3].children[0];
    const letterButtons = document.querySelectorAll('.letter_btn');
    const digitButtons = document.querySelectorAll('.digit_btn');
    const symbolButtons = document.querySelectorAll('.symbol_btn');
    const textarea = document.querySelector('#textarea');
    capsLock.addEventListener('click', toggleCaps);
    shiftLeft.addEventListener('dblclick', toggleShift);
    letterButtons.forEach(btn => btn.addEventListener('click', writeInTextarea));
    digitButtons.forEach(btn => btn.addEventListener('click', writeInTextarea));
    symbolButtons.forEach(btn => btn.addEventListener('click', writeInTextarea));

    function toggleCaps (event) {
        capsLock.classList.toggle('selected');
        if ((event.getModifierState("CapsLock") || capsLock.classList.contains('selected')) && !shiftLeft.classList.contains('selected')) {
            letterButtons.forEach(b => b.textContent = b.textContent.toUpperCase())
        } else if ((event.getModifierState("CapsLock") || capsLock.classList.contains('selected')) && shiftLeft.classList.contains('selected')) {
            letterButtons.forEach(b => b.textContent = b.textContent.toLowerCase())
        } else if ((!event.getModifierState("CapsLock") || !capsLock.classList.contains('selected')) && shiftLeft.classList.contains('selected')) {
            letterButtons.forEach(b => b.textContent = b.textContent.toUpperCase())
        } else {
            letterButtons.forEach(b => b.textContent = b.textContent.toLowerCase())
        }
    }

    function toggleShift (event) {
        shiftLeft.classList.toggle('selected');
        if ((event.getModifierState("ShiftLeft") || shiftLeft.classList.contains('selected')) && !capsLock.classList.contains('selected')) {
            let i = 0;
            buttons.forEach(b => {
                b.textContent = `${keyboardArr[i][1].meaning[`${language}`][1]}`;
                i++;
                }
            )
        } else if ((event.getModifierState("ShiftLeft") || shiftLeft.classList.contains('selected')) && capsLock.classList.contains('selected')){
            let i = 0;
            buttons.forEach(b => {
                b.textContent = `${keyboardArr[i][1].meaning[`${language}`][1]}`;
                i++;
                }
            )
            letterButtons.forEach(b => b.textContent = b.textContent.toLowerCase());
        } else if ((!event.getModifierState("ShiftLeft") || !shiftLeft.classList.contains('selected')) && capsLock.classList.contains('selected')){
            let i = 0;
            buttons.forEach(b => {
                b.textContent = `${keyboardArr[i][1].meaning[`${language}`][0]}`;
                i++;
                }
            )
            letterButtons.forEach(b => b.textContent = b.textContent.toUpperCase())
        } else {
            letterButtons.forEach(b => b.textContent = b.textContent.toLowerCase())
        }
    }

    function writeInTextarea(e) {
        textarea.textContent += e.target.textContent;
    }

    // function getLocalStorage() {
    //     if(localStorage.getItem('language')) {
    //       const lang = localStorage.getItem('language');
    //       toggleLanguage(lang);
    //     }
    // }
    
    
}