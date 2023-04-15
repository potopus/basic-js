const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) { throw new Error("\'arr\' parameter must be an instance of the Array!") }

  let control = {
    "--discard-next":1,
      "--discard-prev":2,
    "--double-next":3,
      "--double-prev":4,
  }

  let preArr = [];
let item = -1;
  for(let i=0; i<arr.length;i++){

    if(control[arr[i]]===1){
      if (i+1<arr.length){
        i++;
        item = i;
      }
    } else if(control[arr[i]]===2){

      if (i-1>=0&&i-1!==item){preArr.pop()}
      if (i-1===item){item = -1}

    }else if (control[arr[i]]===3){
      if (i+1<arr.length){ preArr.push(arr[i+1])}
    } else if (control[arr[i]]===4){
      if (i-1>=0&&i-1!==item){preArr.push(arr[i-1])}
      if (i-1===item){item = -1}
    }else{preArr.push(arr[i])}

  };

  return preArr
}

module.exports = {
  transform
};
