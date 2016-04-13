'use strict'

function HelloWorld () {
  this.hello = function (name) {
    if (name === 'Bob' || name === 'Sally') {
      return 'Hello, '+ name + '!';
    }
    return 'Hello, World!';
    // switch (name) {
    //   case 'Bob':
    //   case 'Sally':
    //   return 'Hello, ' + name + '!';
    //   default:
    //   return 'Hello, World!';
    // }
  }
}


module.exports = HelloWorld;
