const letters = {
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
        {Backquote: ['ё', '`']}, 
        {Digit1: ['1', '1']}, 
        {Digit2: ['2', '2']}, 
        {Digit3: ['3','3']}, 
        {Digit4: ['4', '4']}, 
        {Digit5: ['5', '5']}, 
        {Digit6: ['6','6']}, 
        {Digit7: ['7', '7']}, 
        {Digit8: ['8', '8']}, 
        {Digit9: ['9', '9']}, 
        {Digit0:['0', '0']}, 
        {Minus: ['-', '-']}, 
        {Equal: ['=', '=']}, 
        {Backspace: ['Backspace', '']} 
    ],
    [
        {Tab: ['Tab', '']}, 
        {KeyQ: ['й', 'q']}, 
        {KeyW: ['ц', 'w']}, 
        {KeyE: ['у', 'e']}, 
        {KeyR: ['к', 'r']}, 
        {KeyT: ['е', 't']}, 
        {KeyY: ['н', 'y']}, 
        {KeyU: ['г', 'u']}, 
        {KeyI: ['ш', 'i']}, 
        {KeyO: ['щ', 'o']}, 
        {KeyP: ['з', 'p']}, 
        {BracketLeft: ['х', '[']}, 
        {BracketRight: ['ъ', ']']},
        {Bracketlash: ['\\', '\\']}
    ],
    [
        {CapsLock: ['CapsLock', '']}, 
        {KeyA: ['ф', 'a']}, 
        {KeyS: ['ы', 's']}, 
        {KeyD: ['в', 'd']}, 
        {KeyF: ['а', 'f']}, 
        {KeyG: ['п', 'g']}, 
        {KeyH: ['р', 'h']}, 
        {KeyJ: ['о', 'j']}, 
        {KeyK: ['л', 'k']}, 
        {KeyL: ['д', 'l']}, 
        {Semicolon: ['ж', ';']}, 
        {Quote: ['э', '\'']}, 
        {Enter: ['Enter', '']} 
    ],
    [
        {ShiftLeft: ['Shift', '']}, 
        {KeyZ: ['я', 'z']}, 
        {KeyX: ['ч', 'x']}, 
        {KeyC: ['с', 'c']}, 
        {KeyV: ['м', 'v']}, 
        {KeyB: ['и', 'b']}, 
        {KeyN: ['т', 'n']}, 
        {KeyM: ['ь', 'm']}, 
        {Comma: ['б', ',']}, 
        {Period: ['ю', '.']}, 
        {Slash: ['.', '/']}, 
        {ShiftRight: ['Shift', '']}, 
    ],
    [
        {ControlLeft: ['Control', '']}, 
        {MetaLeft: ['Meta', '']}, 
        {AltLeft: ['Alt', '']}, 
        {Space: [' ', ' ']}, 
        {ControlRight: ['Control', '']}, 
        {AltRight: ['Alt', '']}, 
        {ControlRight: ['Control', '']},
        {
            Arrow: {
                ArrowLeft: ['ArrowLeft', '&larr;'], 
                ArrowUp: ['ArrowUp', '&uarr;'], 
                ArrowDown: ['ArrowDown', '&darr;'], 
                ArrowRight: ['ArrowRight', '&rarr;']
            }
        },
    ]
];


class KeyBoard {

    constructor(data)
    {
        this.root = document.getElementById('keyboard2');
        this.data = data;
    }

    create()
    {
        this.row(0, "one-row");
        this.row(1, "two-row");
        this.row(2, "three-row");
        this.row(3, "four-row"); 
        console.log(this.data)
    }

    row(k, row_class)
    {
        this.root.insertAdjacentHTML('beforeEnd', `<div class="row ${row_class}"></div>`)
        let one = this.root.querySelector(`.${row_class}`);
        this.data[k].forEach(element => {
            for (const key in element) {
                if(key != "Arrow") {
                    one.insertAdjacentHTML('beforeEnd', `
                    <div class="letter" data-key="${key}">
                        <div class="top">${element[key][0]}</div>
                        <div class="bottom">${element[key][1]}</div>
                    </div>
                    `)
                } else {
                    
                }
                
            }
        });
    }

}

let keyboard = new KeyBoard(letters2)
keyboard.create()