const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let binaryArray = expr.split('');
    let result = '';

    function deleteZeros(letter) {
        while (letter[0] === '0') {
            letter.splice(0, 1);
        }        
        return letter;
    }

    function decodeFromBinaryToMorse(letter) {
        let decodedToMorseLetter = '';
        while (letter.length !== 0) {
            let currentSymbol = letter.splice(0, 2).join('');
            if (currentSymbol === '10') {
                decodedToMorseLetter += '.';
            } else {
                decodedToMorseLetter += '-';
            }
        }    
        return decodedToMorseLetter;         
    }

    while (binaryArray.length !== 0) {
        let letter = binaryArray.splice(0, 10);   
        
        if (letter[0] === '*') {
            result += " ";
        } else {
            letter = deleteZeros(letter);
            letter = decodeFromBinaryToMorse(letter);
            result += MORSE_TABLE[letter];
        }
    }
    
    return result;
}

module.exports = {
    decode
}