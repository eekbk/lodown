'use strict';

const { identity } = require("lodash");
const { typeOf } = require("../eric-kuehnemann.github.io/projects/underpants/underpants");

// YOU KNOW WHAT TO DO //

/////////////////////////////////////////////////////////////////////////////////////////
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

///////////////////////////////////////////////////////////////////////////////////////
/**
* identity: Designed to take any value and return it unchanged
*
* @param {value} data : the value to be returned
* 
*/

 _.identity = function(value){
    return value;
};
module.exports.identity = identity;

//////////////////////////////////////////////////////////////////////////////////////
/**
* typeOf: Designed to take a value and return a string representing the type of value 
*   it is, including if it is an array or null
*
* @param {value} value : the value to be analyzed
*/

_.typeOf = function(value){
    // check if value is an array, and if so return 'array'
    if (Array.isArray(value)) {
        return 'array';
    // check if value is null, if so return 'null';
    } else if (value === null) {
        return 'null';
    // otherwise, return typeof method on value
    } else {
        return typeof value;
    }
};
module.exports.typeOf = typeOf;

////////////////////////////////////////////////////////////////////////////////////
/**
* first: designed to take in an array and return a defined number of elemnts from
*   the beginning of array
*
* @param {Array} array : the array to search through. If not an array, an empty 
*   array will be returned.
* @param {number} number : the number of elements to return. If not a number, first 
*   element will be returned.
*/

_.first = function(array, number) {
    let result = [];
    // check if array is an array, and if not, return []
    if (!Array.isArray(array) || number < 0) {
        return [];
    // check if number is not given or not a number and return the first element in array if the case
    } else if (!number || typeof number !== 'number'){
        return array[0];
    // check if number is bigger than input array, if so return whole array
    } else if (number > array.length) {
        return array;
    // otherwise, return the first <number> of items in the array
    } else {
        // create a for loop for the array
        for (let i = 0; i < number; i++) {
            result.push(array[i]);
        }
    }
// return result
return result;
};
module.exports.first = first;

/////////////////////////////////////////////////////////////////////////////////////
/**
* last: Designed to take in an array and return a defined number of elements from
*   the end of the array
*
* @param {Array} array : the array to search through. If not an array, an empty array
*   will be returned.
* @param {Number} number : the number of elements to return. If not a number, final
*   element will be returned.
*/

_.last = function(array, number) {
    // create an output result
      let result = [];
    // check if array is an array, and if not, return []
    if (!Array.isArray(array) || number < 0) {
        return [];
    // check if number is not given or not a number and return the last element in array if the case
    } else if (!number || typeof number !== 'number'){
        return array[array.length - 1];
    // check if number is bigger than input array, if so return whole array
    } else if (number > array.length) {
        return array;
    // otherwise, return the first <number> of items in the array
    } else {
        // iterate thru the array starting at
        for (let i = array.length - number; i < array.length; i++) {
            result.push(array[i]);
        }
    }
// return result
return result;
};
module.exports.last = last;

//////////////////////////////////////////////////////////////////////////////////////
/**
* indexOf: Designed to iterate through an array and return the index of the first 
*   occurance of a value. If value is not found, -1 is returned
*
* @param {Array} array : The array to iterate through.
* @param {Value} value : The value to search for.
*/

_.indexOf = function(array, value) {
    // iterate through array and return the index of the first occurance of value
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
  // if value is not in array, return -1
  return -1;
};
module.exports.indexOf = indexOf;

////////////////////////////////////////////////////////////////////////////////////
/**
* contains: Designed to determine whether an array contains a given value. Returns
*   true or false.
*
* @param {Array} array : The array to search through.
* @param {Value} value : The value to search for. **For which to search, I mean.**
*/

_.contains = function(array, value) {
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            // if array contains value return true
            return true;
        }
    }
    // return false otherwise
    return false;
};
module.exports.contains = contains;

////////////////////////////////////////////////////////////////////////////////////
/**
* unique: Designed to take in an array and return a new array with all of the 
*   duplicate elements removed.
*
* @param {Array} arr : the array through which to search for duplicates.
*/

_.unique = function(arr){
   // create an output array
   let output = [];
   // loop throughthe input array, checking if the  pushing _.index on each element
   for (let i = 0; i < arr.length; i++) {
       // find the first Occurance of each element
       let firstOccurance = _.indexOf(arr, arr[i]);
       // if the output array doesnt already contain the first unique instance, push it
       if (!_.contains(output, arr[firstOccurance])){
           output.push(arr[firstOccurance]);
       }   
   }
   return output;
};
module.exports.unique = unique;

/////////////////////////////////////////////////////////////////////////////////////
/**
* filter: Designed to determine which elements of an array return true for a certain 
*   function and return a new array of all passing elements
*
* @param {Array} array : The array to filter through.
* @param {Function} func : The function with which to check the truthiness of the
*   elements.
*/

_.filter = function(array, func) {
    // create new output array
    let newArr = [];
    // go through each element in the array
    for (let i = 0; i < array.length; i++) {
        // check if function returns true on the element
        if (func(array[i], i, array)) {
            // if so, push it into newArr
            newArr.push(array[i]);
        }
    }
    // return new array
    return newArr;
};
module.exports.filter = filter;

////////////////////////////////////////////////////////////////////////////////////////
/**
* reject: Designed to determine which elements of an array return false for a certain
*   function and return a new array of all false elements
*
* @param {Array} array : The array to filter through
* @param {Function} func : The function with which to check the truthiness of the
*   elements. 
*/

_.reject = function(array, func) {
    // create output array
    let newArr = [];
    // iterate through input array
    for (let i = 0; i < array.length; i++) {
    // check if function returns false on element
        if (!func(array[i], i, array)) {
            // if so, push into new array
            newArr.push(array[i]);
        }
    }

    // return output array
    return newArr;
};
module.exports.reject = reject;

/////////////////////////////////////////////////////////////////////////////////////////