const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActive) {
  console.log(sampleActive);
  if (typeof sampleActive !== 'string') return false;
  if(sampleActive.indexOf(' ') >= 0) return false;
  if (isNaN(sampleActive)) return false;
  if (!isFinite(sampleActive))return false;
  let numSampleActive = parseFloat(sampleActive)
  if(numSampleActive<=0||numSampleActive>=15)return false;

  let t = Math.log(MODERN_ACTIVITY/sampleActive)/(0.693/HALF_LIFE_PERIOD);
console.log(t);
console.log(typeof t);
if (!isFinite(t))return false;
console.log("done");
  return Math.ceil(t)
}

module.exports = {
  dateSample
};
