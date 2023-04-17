const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.additionRepeatTimes = options.additionRepeatTimes >= 0 ? options.additionRepeatTimes : 1;
  options.repeatTimes = options.repeatTimes >= 0 ? options.repeatTimes : 1;

  options.separator = "" + (options.separator || '+');
  options.additionSeparator = '' + (options.additionSeparator || '|');

  str = "" + str;
  options.addition =  typeof options.addition === "undefined"? "" : ""+options.addition ;


  let fullString = '';

  let fullAddition = '';
  fullAddition = Array.from({ length: options.additionRepeatTimes }, (el) => { return options.addition }).join(options.additionSeparator);
  console.log("FULLSTRING:    ", fullAddition);
  fullString = Array.from({ length: options.repeatTimes }, (el,ind) => { return str + fullAddition });
  fullString = fullString.join(options.separator);
  console.log("FULLSTRING:    ", fullString)
  return fullString
}

module.exports = {
  repeater
};
// let b = {
//   repeatTimes: 4,
//   separator: '1L467Kdqx2',
//   addition: 'IMqCarClDg',
//   additionRepeatTimes: 8,
//   additionSeparator: 'U7L9D0f8pb'
// }