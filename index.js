import keyboard from './keyboard.js';



function drawKeyboardField() {
    let elInRow = [14, 15, 13, 12, 10];
    let rowI = 0;

    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', '<div id="container"></div>');

    const container = document.querySelector('#container');
    container.insertAdjacentHTML('beforeend', '<h1 id="heading">Виртуальная клавиатура</h1>');
    container.insertAdjacentHTML('beforeend', '<input id="input" type="textarea"/>');
    container.insertAdjacentHTML('beforeend', '<div id="keyboard_container"></div>');
    container.insertAdjacentHTML('beforeend', '<div id="additional_info"><div>Клавиатура создана в операционной системе Windows<div/><div>Для переключения языка комбинация: левыe ctrl + shift<div/></div>');

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
}


window.onload = function() {
    drawKeyboardField();
}