//  ex1
function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  //  ex2
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  s.sort()

  // Only change code above this line
}
editInPlace();


    