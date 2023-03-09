// const removeFromArray = function(array, num) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === num) {
//             array.splice(array[i - 1], 1)
//         }
//     }
//     return array;
// };
const removeFromArray = function(array, ...num) {
    for (let i = array.length - 1; i >= 0; i--) {
      for (let j = 0; j < num.length; j++) {
        if (array[i] === num[j]) {
          array.splice(i, 1);
        }
      }
    }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
