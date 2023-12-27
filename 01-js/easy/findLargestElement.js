/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let maximum_number = numbers[0];

    for (let i =0 ; i < numbers.length; i++){

        if (numbers[i] > maximum_number){
            maximum_number= numbers[i];

        }

        //console.log(maximum_number);

        



    }

    return maximum_number;
     
}

//console.log(findLargestElement([1,-1,34,6,2]));

module.exports = findLargestElement;