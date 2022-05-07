const keyboard = {
    Backquote: {
        meaning: {
            EN: '`~',
            RU: 'ёЁ',
        },
        row: '1',
    },
    Digit1: {
        meaning: {
            EN: '1!',
            RU: '1!',
        },
        row: '1',
    },
    Digit2: {
        meaning: {
            EN: '2@',
            RU: '2"',
        },
      row: '1',
    },
    Digit3: {
        meaning: {
            EN: '3#',
            RU: '3№',
        },
        row: '1',
    },
    Digit4: {
        meaning: {
            EN: '4$',
            RU: '4;',
        },
        row: '1',
    },
    Digit5: {
      meaning: {
        EN: '5%',
        RU: '5%',
      },
      row: '1',
    },
    Digit6: {
        meaning: {
            EN: '6^',
            RU: '6:',
        },
        row: '1',
    },
    Digit7: {
        meaning: {
            EN: '7&',
            RU: '7?',
        },
        row: '1',
    },
    Digit8: {
        meaning: {
            EN: '8*',
            RU: '8*',
        },
        row: '1',
    },
    Digit9: {
        meaning: {
            EN: '9(',
            RU: '9(',
        },
        row: '1',
    },
    Digit0: {
        meaning: {
            EN: '0)',
            RU: '0)',
        },
        row: '1',
    },
    Minus: {
        meaning: {
            EN: '-_',
            RU: '-_',
        },
        row: '1',
    },
    Equal: {
        meaning: {
            EN: '=+',
            RU: '=+',
        },
        row: '1',
    },
    Backspace: {
        name: '&larr;',
        activity: (value, position) => value.slice(0, position - 1) + value.slice(position),
        row: '1',
    },
    Tab: {
        name: 'Tab',
        activity: (value) => `${value}\t`,
        row: '2',
    },
    KeyQ: {
        meaning: {
            EN: 'qQ',
            RU: 'йЙ',
        },
        row: '2',
    },
    KeyW: {
        meaning: {
            EN: 'wW',
            RU: 'цЦ',
        },
        row: '2',
    },
    KeyE: {
        meaning: {
            EN: 'eE',
            RU: 'уУ',
        },
        row: '2',
    },
    KeyR: {
        meaning: {
            EN: 'rR',
            RU: 'кК',
        },
        row: '2',
    },
    KeyT: {
        meaning: {
            EN: 'tT',
            RU: 'еЕ',
        },
        row: '2',
    },
    KeyY: {
        meaning: {
            EN: 'yY',
            RU: 'нН',
        },
        row: '2',
    },
    KeyU: {
        meaning: {
            EN: 'uU',
            RU: 'гГ',
        },
        row: '2',
    },
    KeyI: {
        meaning: {
            EN: 'iI',
            RU: 'шШ',
        },
        row: '2',
    },
    KeyO: {
        meaning: {
            EN: 'oO',
            RU: 'щЩ',
        },
        row: '2',
    },
    KeyP: {
        meaning: {
            EN: 'pP',
            RU: 'зЗ',
        },
        row: '2',
    },
    BracketLeft: {
        meaning: {
            EN: '[{',
            RU: 'хХ',
        },
        row: '2',
    },
    BracketRight: {
        meaning: {
            EN: ']}',
            RU: 'ъЪ',
        },
        row: '2',
    },
    Backslash: {
        meaning: {
            EN: '\\|',
            RU: '\\/',
        },
        row: '2',
    },
    Delete: {
        name: 'Delete',
        activity: (value, nextPosition) => (nextPosition ? value.slice(0, nextPosition) + value.slice(nextPosition + 1) : value),
        row: '2',
    },
    CapsLock: {
        name: 'CapsLock',
        row: '3',
    },
    KeyA: {
        meaning: {
            EN: 'aA',
            RU: 'фФ',
        },
        row: '3',
    },
    KeyS: {
        meaning: {
            EN: 'sS',
            RU: 'ыЫ',
        },
        row: '3',
    },
    KeyD: {
        meaning: {
            EN: 'dD',
            RU: 'вВ',
        },
        row: '3',
    },
    KeyF: {
        meaning: {
            EN: 'fF',
            RU: 'аА',
        },
        row: '3',
    },
    KeyG: {
        meaning: {
            EN: 'gG',
            RU: 'пП',
        },
        row: '3',
    },
    KeyH: {
        meaning: {
            EN: 'hH',
            RU: 'рР',
        },
        row: '3',
    },
    KeyJ: {
        meaning: {
            EN: 'jJ',
            RU: 'оО',
        },
        row: '3',
    },
    KeyK: {
        meaning: {
            EN: 'kK',
            RU: 'лЛ',
        },
        row: '3',
    },
    KeyL: {
        meaning: {
            EN: 'lL',
            RU: 'дД',
        },
        row: '3',
    },
    Semicolon: {
        meaning: {
            EN: ';:',
            RU: 'жЖ',
        },
        row: '3',
    },
    Quote: {
        meaning: {
            EN: '\'"',
            RU: 'эЭ',
        },
        row: '3',
    },
    Enter: {
        name: '&crarr;',
        activity: (value, position) => `${value.slice(0, position)}\r\n${value.slice(position + 1)}`,
        row: '3',
    },
    ShiftLeft: {
        name: '&uarr;',
        //   activity: (value, position) => value.slice(0, curretPos) + value.slice(curretPos + 1),
        row: '4',
    },
    KeyZ: {
        meaning: {
            EN: 'zZ',
            RU: 'яЯ',
        },
        row: '4',
    },
    KeyX: {
        meaning: {
            EN: 'xX',
            RU: 'чЧ',
        },
        row: '4',
    },
    KeyC: {
        meaning: {
            EN: 'cC',
            RU: 'сС',
        },
        row: '4',
    },
    KeyV: {
        meaning: {
            EN: 'vV',
            RU: 'мМ',
        },
        row: '4',
    },
    KeyB: {
        meaning: {
            EN: 'bB',
            RU: 'иИ',
        },
        row: '4',
    },
    KeyN: {
        meaning: {
            EN: 'nN',
            RU: 'тТ',
        },
        row: '4',
    },
    KeyM: {
        meaning: {
            EN: 'mM',
            RU: 'ьЬ',
        },
        row: '4',
    },
    Comma: {
        meaning: {
            EN: ',<',
            RU: 'бБ',
        },
        row: '4',
    },
    Period: {
        meaning: {
            EN: '.>',
            RU: 'юЮ',
        },
        row: '4',
    },
    Slash: {
        meaning: {
            EN: '/?',
            RU: '.,',
        },
        row: '4',
    },
    ShiftRight: {
        name: '&uarr;',
        //   activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
        row: '4',
    },
    ControlLeft: {
        name: 'Ctrl',
        //   activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
        row: '5',
    },
    MetaLeft: {
        name: 'Win',
        // activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
        row: '5',
    },
    AltLeft: {
        name: 'Alt',
        // activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
        row: '5',
    },
    Space: {
        name: 'Space',
        activity: (value, position) => `${value.slice(0, position)} ${value.slice(position + 1)}`,
        row: '5',
    },
    AltRight: {
        name: 'Alt',
        // activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
        row: '5',
    },
    ControlRight: {
        name: 'Ctrl',
        //   activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
        row: '5',
    },
    ArrowUp: {
        name: '&#5123;',
        activity: (value, position) => `${value.slice(0, position)}&#5123;${value.slice(position + 1)}`,
        row: '5',
    },
    ArrowLeft: {
        name: '&#5130;',
        activity: (value, position) => `${value.slice(0, position)}&#5130;${value.slice(position + 1)}`,
        row: '5',
    },
    ArrowDown: {
        name: '&#5121;',
        activity: (value, position) => `${value.slice(0, position)}&#5121;${value.slice(position + 1)}`,
        row: '5',
    },
    ArrowRight: {
      name: '&#5125;',
      activity: (value, position) => `${value.slice(0, position)}&#5125;${value.slice(position + 1)}`,
      row: '5',
    },
  };
  
  export default keyboard;