import keyboard from './keyboard.js';
let keyboardArr = Object.entries(keyboard);
let keyboardValues = Object.values(keyboard);
let lang = ['EN', 'RU'];
console.log(keyboardArr)


function setLocalStorage() {
    const language  = localStorage.getItem('language') || 'EN';
    localStorage.setItem('language', language);
    }

window.addEventListener('beforeunload', setLocalStorage);

function drawKeyboardField(language = "EN") {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', '<div id="container"></div>');

    const container = document.querySelector('#container');
    container.insertAdjacentHTML('beforeend', '<h1 id="heading">Виртуальная клавиатура</h1>');
    container.insertAdjacentHTML('beforeend', '<textarea id="textarea" autofocus/>');
    container.insertAdjacentHTML('beforeend', '<div id="keyboard_container"></div>');
    container.insertAdjacentHTML('beforeend', '<div id="additional_info"><div>Клавиатура создана в операционной системе Windows<div/><div>Для переключения языка комбинация: левые shift (двойной клик) + ctrl<div/></div>');

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
    const buttons = document.querySelectorAll('.btn');
    const letterButtons = document.querySelectorAll('.letter_btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].insertAdjacentText('beforeend', keyboardArr[i][1].meaning[language][0])
    }
}

window.onload = function() {
    drawKeyboardField(localStorage.getItem('language') || 'EN');

    const rows = document.querySelectorAll('.row');
    const buttons = document.querySelectorAll('.btn');
    const capsLock = rows[2].children[0];
    const shiftLeft = rows[3].children[0];
    const ctrlLeft = rows[4].children[0];
    const letterButtons = document.querySelectorAll('.letter_btn');
    const digitButtons = document.querySelectorAll('.digit_btn');
    const symbolButtons = document.querySelectorAll('.symbol_btn');
    const activityButtons = document.querySelectorAll('.activity_btn');
    const arrowButtons = document.querySelectorAll('.arrow_btn');
    const textarea = document.querySelector('#textarea');
    capsLock.addEventListener('click', toggleCaps);
    shiftLeft.addEventListener('dblclick', toggleShift);
    ctrlLeft.addEventListener('click', toggleLanguage);
    letterButtons.forEach(btn => btn.addEventListener('click', writeInTextarea));
    digitButtons.forEach(btn => btn.addEventListener('click', writeInTextarea));
    symbolButtons.forEach(btn => btn.addEventListener('click', writeInTextarea));
    textarea.addEventListener('input', function updateValue(e) {
        textarea.value = e.target.value;
    })
    textarea.addEventListener('keydown', f);
    activityButtons.forEach(btn => btn.addEventListener('click', activityInTextarea));
    arrowButtons.forEach(btn => btn.addEventListener('click', activityInTextarea));
    document.addEventListener('keydown', e => {
        if(document.activeElement !== textarea) {
            const end = textarea.value.length;
            textarea.setSelectionRange(end, end);
            textarea.focus();
        }
    })

    function toggleLanguage() {
        let l;
        if (localStorage.getItem('language') === lang[0]) {
            l = lang[1]
        } else l = lang[0];
        ctrlLeft.classList.toggle('selected');
        if (shiftLeft.classList.contains('selected')) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].textContent = `${keyboardArr[i][1].meaning[l][0]}`;
            }
            localStorage.setItem('language', l);
        }

        ctrlLeft.classList.toggle('selected');
        shiftLeft.classList.toggle('selected');
    }
    

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
                b.textContent = `${keyboardArr[i][1].meaning[localStorage.language][1]}`;
                i++;
                }
            )
        } else if ((event.getModifierState("ShiftLeft") || shiftLeft.classList.contains('selected')) && capsLock.classList.contains('selected')){
            let i = 0;
            buttons.forEach(b => {
                b.textContent = `${keyboardArr[i][1].meaning[localStorage.language][1]}`;
                i++;
                }
            )
            letterButtons.forEach(b => b.textContent = b.textContent.toLowerCase());
        } else if ((!event.getModifierState("ShiftLeft") || !shiftLeft.classList.contains('selected')) && capsLock.classList.contains('selected')){
            let i = 0;
            buttons.forEach(b => {
                b.textContent = `${keyboardArr[i][1].meaning[localStorage.language][0]}`;
                i++;
                }
            )
            letterButtons.forEach(b => b.textContent = b.textContent.toUpperCase())
        } else {
            letterButtons.forEach(b => b.textContent = b.textContent.toLowerCase())
        }
    }

    function writeInTextarea(e) {
        e.target.classList.toggle('selected');
        const text = textarea.value;
        const cursorPosition = textarea.selectionStart;
        textarea.value = text.substring(0, cursorPosition) + e.target.textContent + text.substring(cursorPosition, text.length);
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
        textarea.selectionStart = cursorPosition + 1;
        setTimeout(() => e.target.classList.toggle('selected'), 300)
    }

    function activityInTextarea(e) {
        const text = textarea.value;
        const cursorPosition = textarea.selectionStart;
        e.target.classList.toggle('selected');
        
        let n = 0;
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].outerHTML == e.target.outerHTML) {
                n = i;
                textarea.value = keyboardValues[i].activity(textarea.value, cursorPosition);
                break; 
            }
             
        }
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
        textarea.selectionStart = cursorPosition;
        setTimeout(() => e.target.classList.toggle('selected'), 300)
    }

    function f(e) {
        let n;
        for (let i = 0; i < keyboardArr.length; i++) {
            if (keyboardArr[i][0] == `${e.code}`) {
                n = i;
                break;
            }
        }
        buttons[n].classList.toggle('selected');
        setTimeout(() => buttons[n].classList.toggle('selected'), 300)
    }
}