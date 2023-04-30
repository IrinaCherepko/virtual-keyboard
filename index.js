const letters = {Backquote: ['ё', '`'], Digit1: ['1', '1'], Digit1: ['2', '2'], Digit1: ['3','3'], Digit1: ['4', '4'], Digit1: ['5', '5'], Digit1: ['6','6'], Digit1: ['7', '7'], Digit1: ['8', '8'], Digit1: ['9', '9'], Digit1:['0', '0'], Minus: ['-', '-'], Equal: ['=', '='], Backspace: ['Backspace', 'Backspace'], Tab: ['Tab', 'Tab'], KeyQ: ['й', 'q'], KeyW: ['ц', 'w'], KeyE: ['у', 'e'], KeyR: ['к', 'r'], KeyT: ['е', 't'], KeyY: ['н', 'y'], KeyU: ['г', 'u'], KeyI: ['ш', 'i'], KeyO: ['щ', 'o'], KeyP: ['з', 'p'], BracketLeft: ['х', '['], BracketRight: ['ъ', ']'], Bracketlash: ['\\', '\\'], CapsLock: ['CapsLock', 'CapsLock'], KeyA: ['ф', 'a'], KeyS: ['ы', 's'], KeyD: ['в', 'd'], KeyF: ['а', 'f'], KeyG: ['п', 'g'], KeyH: ['р', 'h'], KeyJ: ['о', 'j'], KeyK: ['л', 'k'], KeyL: ['д', 'l'], Semicolon: ['ж', ';'], Quote: ['э', ''], Enter: ['Enter', 'Enter'], ShiftLeft: ['Shift', 'Shift'], KeyZ: ['я', 'z'], KeyX: ['ч', 'x'], KeyC: ['с', 'c'], KeyV: ['м', 'v'], KeyB: ['и', 'b'], KeyN: ['т', 'n'], KeyM: ['ь', 'm'], Comma: ['б', ','], Period: ['ю','.'], Slash: ['.', '/'], ShiftRight: ['Shift', 'Shift'], ControlLeft: ['Control', 'Control'], MetaLeft: ['Meta', 'Meta'], AltLeft: ['Alt', 'Alt'], Space: [' ', ' '], ControlRight: ['Control', 'Control'], AltRight: ['Alt', 'Alt'], ControlRight: ['Control', 'Control'], ArrowLeft: ['ArrowLeft', 'ArrowLeft'], ArrowUp: ['ArrowUp', 'ArrowUp'], ArrowDown: ['ArrowDown', 'ArrowDown'], ArrowRight: ['ArrowRight', 'ArrowRight']};

let tagLetters = document.body.insertAdjacentHTML('afterbegin', `<main>${letters}</main>`);
tagLetters.className = 'letters-class';
tagLetters.id = 'letters_id';
document.body.prepend(tagLetters);

function addClass(a){
for(let key in letters){
    key.className = 'letter-class';
    // key.innerHTML = '<div></div>';
    console.log(key);
}
}
addClass(letters);

