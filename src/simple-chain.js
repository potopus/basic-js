const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  mass: [],
  getLength() {
    return this.mass.length;
  },
  addLink(value) {
    this.mass.push(value);
    return this;
  },
  removeLink(position) {
    // console.log("removeLink: " + position);
    position= position -1;
    // console.log("position--: " + position);
    // console.log(parseInt(position) === position );
    // console.log(position > 0 );
    // console.log( position < this.mass.length);
    // console.log("this.mass:  "+ this.mass);
    // console.log("this.mass.length :"+ this.mass.length);
    if (parseInt(position) === position && position >= 0 && position < this.mass.length) {
      (this.mass).splice(position, 1);
      return this;
    } else { 
      // console.log("eRROR");
      this.mass=[];
      throw new Error("You can't remove incorrect link!") }
  },
  reverseChain() {
    // console.log("reverseChain()");
    this.mass.reverse();
    // console.log("reverse: " + [...this.mass]);
    return this
  },

  finishChain() {
    // console.log("start finishChain()");
    let result = this.mass.reduce((acc, elem, ind, arr) => {
      if (ind !== arr.length - 1) {
        return acc + `${elem} )~~( `
      } else {
        return acc + `${elem} )`
      }
    }, "( ");
    this.mass = [];
    // console.log("result: " + result);
    return result
  }

};

module.exports = {
  chainMaker
};
