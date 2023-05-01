const letters = {
    row1: {
        Backquote: ['ё', '`'], 
        Digit1: ['1', '1'], 
        Digit2: ['2', '2'], 
        Digit3: ['3','3'], 
        Digit4: ['4', '4'], 
        Digit5: ['5', '5'], 
        Digit6: ['6','6'], 
        Digit7: ['7', '7'], 
        Digit8: ['8', '8'], 
        Digit9: ['9', '9'], 
        Digit0:['0', '0'], 
        Minus: ['-', '-'], 
        Equal: ['=', '='], 
        Backspace: ['Backspace', 'Backspace'] 
    },
    row2: {
        Tab: ['Tab', 'Tab'], 
        KeyQ: ['й', 'q'], 
        KeyW: ['ц', 'w'], 
        KeyE: ['у', 'e'], 
        KeyR: ['к', 'r'], 
        KeyT: ['е', 't'], 
        KeyY: ['н', 'y'], 
        KeyU: ['г', 'u'], 
        KeyI: ['ш', 'i'], 
        KeyO: ['щ', 'o'], 
        KeyP: ['з', 'p'], 
        BracketLeft: ['х', '['], 
        BracketRight: ['ъ', ']'],
        Bracketlash: ['\\', '\\']
    },
    
    row3: {
        CapsLock: ['CapsLock', 'CapsLock'], 
        KeyA: ['ф', 'a'], 
        KeyS: ['ы', 's'], 
        KeyD: ['в', 'd'], 
        KeyF: ['а', 'f'], 
        KeyG: ['п', 'g'], 
        KeyH: ['р', 'h'], 
        KeyJ: ['о', 'j'], 
        KeyK: ['л', 'k'], 
        KeyL: ['д', 'l'], 
        Semicolon: ['ж', ';'], 
        Quote: ['э', '\''], 
        Enter: ['Enter', 'Enter'] 
    },
    
    row4: {
        CapsLock: ['CapsLock', 'CapsLock'], 
        KeyA: ['ф', 'a'], 
        KeyS: ['ы', 's'], 
        KeyD: ['в', 'd'], 
        KeyF: ['а', 'f'], 
        KeyG: ['п', 'g'], 
        KeyH: ['р', 'h'], 
        KeyJ: ['о', 'j'], 
        KeyK: ['л', 'k'], 
        KeyL: ['д', 'l'], 
        Semicolon: ['ж', ';'], 
        Quote: ['э', ''], 
        Enter: ['Enter', 'Enter']
    },

    row5: {
        ControlLeft: ['Control', 'Control'], 
        MetaLeft: ['Meta', 'Meta'], 
        AltLeft: ['Alt', 'Alt'], 
        Space: [' ', ' '], 
        ControlRight: ['Control', 'Control'], 
        AltRight: ['Alt', 'Alt'], 
        ControlRight: ['Control', 'Control'], 
        ArrowLeft: ['ArrowLeft', 'ArrowLeft'], 
        ArrowUp: ['ArrowUp', 'ArrowUp'], 
        ArrowDown: ['ArrowDown', 'ArrowDown'], 
        ArrowRight: ['ArrowRight', 'ArrowRight']
    }    
   
};

let letters2 = [
    [
        {ControlLeft: ['Control', 'Control']},
        {MetaLeft: ['Meta', 'Meta']},
        {AltLeft: ['Alt', 'Alt']}
    ]
];


class KeyBoard {

    constructor(data)
    {
        this.root = document.getElementById('keyboard');
        this.data = data;
    }

    create()
    {

        console.log(this.data)
    }

}

let keyboard = new KeyBoard(letters2)
keyboard.create()