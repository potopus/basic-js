const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {


  calculateDepth(recurArr) {
    console.log("BEGIN  :::")
    // console.log(`arr: [ ${[...arr]}  ]`);
    // let maxCount = 0;

    // function recursion


    let count = 0;
    if (Array.isArray(recurArr) && recurArr.length === 1) {
      count++;
      recurArr.forEach((elem, ind, arr) => {//цикл для ОДНОГО элемента в массиве
        // console.log(`elem   ${elem}   :  `);
        if (Array.isArray(elem)) {//этот  ОДИН элемент массив?
          count = count + this.calculateDepth(elem);
        };
      })
    } else if (Array.isArray(recurArr) && recurArr.length === 0) {
      count++
    } else if (Array.isArray(recurArr) && recurArr.length > 1) {// БОЛШОЙ массив
      count++
      let maxDepth = 0;
      recurArr.forEach((elem) => {
        if (Array.isArray(elem)) {//этот  элемент БОЛЬШОГО МАССИВА сам тоже массив?
          let elemDepth = this.calculateDepth(elem); //глубина i-го элемента
          if (elemDepth > maxDepth) { maxDepth = elemDepth }
        }
      })
      count = count + maxDepth;
    }
    // if (count > maxCount) { maxCount=count}
    // else{maxCount};
    // console.log("count:  " + count);
    // console.log(maxCount);
    // !end recursion
    return count;
  }
}

module.exports = {
  DepthCalculator
};
