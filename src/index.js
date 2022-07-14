const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
    str = [];
    for (let i = 0; i < expr.length/10; i++){
        str.push(String(+expr.slice(i*10, i*10+10)))
    }
    str = str.map((el) => {
      if (el.includes('1')) {
        temp = [];
        for (let i = 0; i < el.length / 2; i++) {
          temp.push(el.slice(i * 2, i * 2 + 2));
        }
        return temp.map((el) => (el === '10' ? "." : "-")).join('');
    } else {return ' ' }
    });

    return str.map(el => MORSE_TABLE[el] ? MORSE_TABLE[el] : ' ' ).join('')
  }

module.exports = {
  decode,
};
