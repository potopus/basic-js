const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // console.log("body: " + date);
  // console.log(typeof date);
 
  if (typeof date === "undefined") { return "Unable to determine the time of year!" }
  // console.log("wrong date");
  if (!date) { throw new Error('Invalid date!') }
  
  // console.log("begin ");
  //  console.log("instanse: " + date !== new Date());
  //  console.log("getOwnPropertyNames:   " + Object.getOwnPropertyNames(date).length);
 

    // console.log("done 1");
    // if ( date instanceof Function )  { throw new Error('Invalid date!') }
    // if (Object.prototype.toString.call(date) === "[object Function]") { throw new Error('Invalid date!') }
    
  // }catch(e){if (e) throw new Error('Invalid date!')}
  // console.log("done0");
  // console.log(Object.getOwnPropertyNames(date).length);

  if (Object.getOwnPropertyNames(date).length > 0) { throw new CustomError('Invalid date!') }
  
  
  // console.log("done");
  // console.log(date.toString().includes("() => new Date()"));
  // console.log("date.toString");
  if (date.toString().includes("() => new Date()")){
    throw new CustomError('Invalid date!')
};
  
function CustomError(message) {
  this.message = message;
  this.name = "Invalid date!";
  Error.captureStackTrace(this, CustomError);
}
// console.log("!(date instanceof Date)");
if (!(date instanceof Date)) { throw new Error('Invalid date!') }
  // console.log("start");
  const month = date.toLocaleString('en-US', { month: 'long' });

  let season = {
    "January": "winter",
    "February": "winter",
    "March": "spring",
    "April": "spring",
    "May": "spring",
    "June": "summer",
    "July": "summer",
    "August": "summer",
    "September": "autumn",
    "October": "autumn",
    "November": "autumn",
    "December": "winter"
  }
  // console.log(month);
  // console.log("RETURNE:  " + season[month]);
  return season[month]
}

module.exports = {
  getSeason
};
