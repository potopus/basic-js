const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  ALF = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    } else {
      text = text.toUpperCase();
      key = key.toUpperCase();
    }

    let formatKey = this.adjustKey(text, key);
    let compleateCode = this.coder(text, formatKey, true);
    return this.choosingMashine(compleateCode);
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    } else {
      text = text.toUpperCase();
      key = key.toUpperCase();
    }
    // text = this.choosingMashine(text);
    let formatKey = this.adjustKey(text, key);
    let decodeCompleate = this.coder(text, formatKey, false);

    return this.choosingMashine(decodeCompleate);
  }

  coder(text, formatKey, coder) {

    let cipherText = '';
    for (let i = 0; i < text.length; i++) {
      let numSymbKey = this.ALF.indexOf(formatKey[i]);//!!МИНУС -1 может быть, что такого символа нет в алфавите!
      let numSymbText = this.ALF.indexOf(text[i]);
      if (numSymbKey !== -1 && numSymbText !== -1) {
        coder === true ? numSymbKey : numSymbKey = -numSymbKey;
        let numSymbCode = (this.ALF.length+(numSymbText + numSymbKey)) % this.ALF.length;
        cipherText = cipherText + this.ALF[numSymbCode];
      } else {
        cipherText = cipherText + text[i];
      }
    }

    return cipherText
  }

  choosingMashine(text) {
    if (this.type === false) { return text = text.split("").reverse().join("") }
    else { return text }
  }

  adjustKey(text, key) {
    let formatKey = "";
    let countKeySymb = 0;
    for (let i = 0; i < text.length; i++) {
      if (this.ALF.includes(text[i])) {
        countKeySymb === key.length ? countKeySymb = 0 : countKeySymb;
        formatKey = formatKey + key[countKeySymb];
        countKeySymb++;
      } else {
        formatKey = formatKey + text[i];
      }
    }

    return formatKey
  }
}

module.exports = {
  VigenereCipheringMachine
};
