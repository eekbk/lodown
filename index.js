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
 * 
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
* @return {value} data: function returns input value, unchanged
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
*
* @return {string} : a string describing the type of value passed as an argument 
*   i.e. 'string', 'boolean', 'object'.
* Usage: 
*       
*       const freeBirdObservation = 'It is long';
*       console.log(_.typeOf(freeBirdObservation));
*           // prints 'string'
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
*
* @return {Array}: an Array containing the first x number of elements from the input array
*
* Usage:
*       let myArr = [ 'a', 'b', 'c', 'd' ];
*       console.log(_.first(myArr, 2));     // prints [ 'a', 'b' ]
}
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
* @return {Array} collection: an array containing the final x number of elements from the input 
*   array.
* Usage:
*       let myArr = [ 'A', 'B', 'C', 'D' ];
*       console.log(_.last(myArray, 2))     // prints [ 'D', 'C' ];
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
* @param {Array} collection : The array to iterate through.
* @param {Value} value : The value to search for.
* @return {number}: The index of the first occurance of the value
* Usage:
*       let myArr = [ 1, 1, 2, 2, 2, 3 ];
*       console.log(_.indexOf(myArr, 2))    // returns 2
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
* @return {Boolean}: True or false, whether or not value is present
* Usage: 
*   let myArr = [ 1, 2, 3, 4, 5 ]:
*   console.log(_.contains(myArr, 6));      // prints false
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
* @param {Array} collection: the array through which to search for duplicates.
* @return {Array} collection: A new array with all of the duplicates removed
* Usage:
*       let myArr = [1, 2, 2, 2, 3];
*       console.log(_.unique(myArr));   // prints [1, 2, 3];
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
* @param {Function} test : The function with which to check the truthiness of the
*   elements. The test function must return a boolean
* @return {Array} collection: A new array containing the filtered collection values
* Usage:
*       const myArr = ['a', true, false, null, 3, true];
*       let myBoos = _.filter(myArr, function(element){
*           return typeOf element === 'boolean';
*       });
*       console.log(myBoos); // prints [true, false, true];
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
* @return {Array}: A new array of all false elements;
* Usage:
*       let myArr = ['a', 'b', 'c', 'd'];
        let noBs = _.filter(myArr, function(element) {
            return element === 'b';
        });
        console.log(noBs);      // ['a', 'c', 'd'];
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
/**
* reduce: Designed to execute a callback function on each element of an array, passing in
*   the return value on the preceding element.
*
* @param {Array} array : The array containing the elements on which to call the function.
* @param {Function} func : The function that will be called on each element
* @param {Seed} seed : an initial value for the "previousValue" the first time the
*   function is called. If no seed is given, the initial value is the first element in the
*   array and the loop starts at the second index.
* @return {Value} data: The value that results from running the "reducer" callback function 
*   to completion over the entire array.
* Usage:
*       let myArr = [4, 43, 2, 643, 6, 29]
*       let biggestNum = _.reduce(myArr, function(accumulator, current){
            if (accumulator >= current) {
                return accumulator;
            } else {
                return current;
            }
*       });
*       console.log(biggestNum);       // prints 643
*/

_.reduce = function(array, func, seed) {
    //determine if seed is undefined
    if (seed === undefined) {
        seed = array[0];
        // iterate through input array
        for (let i = 1; i < array.length; i++) {
            // reassign seed to the result of passing seed, the current value of the array, the current index and the collection
            seed = func(seed, array[i], i, array);
        }
    } else {
        // iterate through input array
        for (let i = 0; i < array.length; i++){
            seed = func(seed, array[i], i, array);
        }
    }
    return seed;
};
module.exports.reduce = reduce;

/////////////////////////////////////////////////////////////////////////////////////////
/**
* extend: Designed to copy the properties from any number of objects into another object.
*   This function is "destructive", meaning that it will change the value of the first 
*   object passed in.
*
* @param {Object} object1 : This is the target object onto which the properties will be
*   copied. Will be returned, changed, at end of function.
* @param {Object} object2 : The object whose values will be copied onto the target object.
*   Can pass as many objects as arguments as required.
* @return {Object} : returns Object1, altered.
* Usage:
*       let myObj = { name: 'Eric', age: 42 };
*       let moreInfo = { canVote: true };
*       let yetMoreInfo = { faveColor: 'Orange' }
*       _.extend(myObj, moreInfo, yetMoreInfo);
*       console.log(myObj);     // prints {
                                    name: 'Eric',
                                    age: 42,
                                    canVote: true,
                                    faveColor: 'Orange'
                                    }
*/

_.extend = function(object1, object2, ...objects) {
    // iterate thru arguments, starting at index 1
    for (let i = 1; i < arguments.length; i++) {
        // iterate thru current object
        for (let key in arguments[i]) {
            // copy current properties to object 1
            object1[key] = arguments[i][key];
        }
    }
    // return object1
    return object1;  
};
module.exports.extend = extend;


//////////////////////////////////////////////////////////////////////////////////////////
/**
 * pluck: takes an array of objects and a property and returns a new array containing the 
 *  value of input property for every element in input array.
 * 
 * @param {Array}: an array of objects
 * @param {Property}: a property to pluck from each object in the array
 * @return {Array}: a new array containing the values of input property for each object
 * Usage: 
 *      let myArr = [{name: 'Eric', age: 42}, {name: 'Thom', age: 37}, {name: 'Jamie', 
 *          age: 'timeless'}];
 *      let ageArray = _.pluck(myArr, 'age');
 *      console.log(ageArray);      // prints [42, 37, 'timeless'];
 */
 _.pluck = function(array, prop) {
    // invoke map function on input array
    let result = _.map(array, function(element){
        // what should this function return
        return element[prop];
    });

    return result;
}
module.exports.pluck = pluck;

/////////////////////////////////////////////////////////////////////////////////////////
/**
 * every: takes a collection and a function and returns a boolean statement based on
 *  whether calling function on every element in collection is true or not.
 * @param {Array or Object} collection: the collection containing the elements to call the
 *  function on
 * @param {Function}: the function to call on each element of the collection
 * @return {Boolean}: true if every element passes the test. False otherwise
 * Usage:
 *      let myArr = [2, 4, 6, 8, 133];
 *      let isEveryEven = _.every(myArr, function(element){
 *          return element % 2 === 0;
 *      });
 *      console.log(isEveryEven);       // prints false
 */
 _.every = function(collection, func) {
    // determine if collection is an array
    if (Array.isArray(collection)) {
        // loop thru array, checking if the result of calling function on current item is false
        for (let i = 0; i < collection.length; i++) {
            if (func && !func(collection[i], i, collection)){
                // if so, return false
                return false;
            // if no function is passed in, check if any value is falsey
            } else {
                if (!collection[i]) {
                    //return false
                    return false;
                }
            }
        }
    // else its an object
    } else {
    // loop thru object, checking if func exists and if the result of calling function on current item is false
        for (let key in collection) {
            if(func && !func(collection[key], key, collection)) {
               // if so, return falsse
               return false;
            // otherwise check if any value is falsey and return false if so
            } else {
                if (!collection[key]) {
                    return false;
                }
            }
        }
    }
    // else return true
    return true;
};

module.exports.every = every;
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * map: Designed to take a collection and a function. map will save the return value of 
 *  calling the function on each element and store it in a new array which is then returned
 * @param {Array or Object} collection: The collection containing the elements on which to
 *      call the function
 * @param {Function}: The function to call on the elements
 * @return {Array}: A new array, containing the results of function being called on each 
 *      of the elements.
 * Usage:
 *      let myArr = ['I', 'am', 'not', 'shouting'];
 *      let newArr = _.map(myArr, function(element){
 *          return element.toUpperCase();
 *      });
 *      console.log(newArr);        // prints ['I', 'AM', 'NOT', 'YELLING'] 
 */
 _.map = function(collection, func) {
    // create output variable
    let mapped = [];
    // check if collection is an array
    if (Array.isArray(collection)){
        //iterate using for loop
        for (let i = 0; i < collection.length; i++) {
            let result = func(collection[i], i, collection);
            mapped.push(result);
        }
     // else it's an object
    } else {
        for (let key in collection) {
            let result = func(collection[key], key, collection);
            mapped.push(result);
        }

    }
    // return mapped
    return mapped;

}
module.exports.map = map;

//////////////////////////////////////////////////////////////////////////////////////////
/**
 * some: similar to every, but designed to take a collection and return true if ANY of the 
 *  elements return true. False otherwise.
 * @param {Array or Object}: collection containing elements on which to test function
 * @param {Function}: the function on which to test the elements
 * @return {Boolean}: True if ANY of the elements pass the test. False if all fail
 * Usage:
 *      let myArr = [1, 3, 5, 7, 9, 144]
 *      let isAnyEven = _.some(myArr, function(element){
 *          return element % 2 === 0;
 *      });
 *      console.log(isAnyEven);     // returns true;
 */
 _.some = function(collection, func) {
    // check if collection is an array
    if (Array.isArray(collection)) {
        // if so, iterate thru array, 
        for (let i = 0; i  < collection.length; i++) {
            // if function isnt provided or doesnt return boolean
            if (!func || typeof func(collection[i], i, collection) !== 'boolean') {
                // check if at least one element is truthy
                if (collection[i]) {
                    return true;
                }
            // else if boolean func exists, call function at every iteration 
            } else {
                // if return value is true for any element return true
                if (func(collection[i], i, collection)){
                    return true;
                }
            }
        }
    // else if collection is not an array
    } else {
        // iterate thru object,
        for (let key in collection){
            // if function isnt provided or doesnt return boolean
            if (!func || typeof func(collection[key], key, collection) !== 'boolean'){
                // check if at least one element is truthy
                if (collection[key]) {
                    return true;
                 }
            // else if boolean func exists, call function at every iteration
            } else {
                // if return value is true for any element return true
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        } 
    }
    // if false for all elements, return false
    return false;
}
module.exports.some = some;

///////////////////////////////////////////////////////////////////////////////////////////
/**
 * partition: designed to call a function on each element of an array and return an array of 
 *  two new arrays: one for values for which the function returned true and another for 
 *  values which the function returned false.
 * @param {Array}: The array containing the elements to call the function on
 * @param {Function}: The tester function to call on each element
 * @return {Array}: An array containing two arrays. The first contains all of the elements
 *  on which the function returned true. The second for all falsy elements.
 * Usage:
 *          let myArr = [1, 2, 3, 4, 5, 6]
 *          let evenOrOdd = _.partition(myArr, function(element){
 *              return element % 2 === 0;
 *          });
 *          console.log(evenOrOdd);     // prints [[2, 4], [1, 3, 5]]
 */
 _.partition = function(array, func) {
    // create an output array
    let output = [];
    // create a truthy array
    let truthyArr = [];
    // create a falsey array
    let falseyArr = [];
    // iterate thru the input array 
    for (let i = 0; i < array.length; i++) {
        // if function call returns something truthy, push to truthy array
        if (func(array[i], i, array)) {
            truthyArr.push(array[i]);
        // if function call returns something falsey, push to falsey array   
        } else if (!func(array[i], i, array)) {
            falseyArr.push(array[i]);
        }
    }
    // push truthy array and falsey array to output array
    output.push(truthyArr, falseyArr);
    // return output array
    return output;
};

module.exports.partition = partition;

//////////////////////////////////////////////////////////////////////////////////////////