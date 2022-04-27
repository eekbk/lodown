'use strict';

// YOU KNOW WHAT TO DO //

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

/**
* identity: Designed to take any value and return it unchanged
*
* @param {value} data : the value to be returned
* 
*/

 _.identity = function(value){
    return value;
};


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

/**
* first: designed to take in an array and return a defined number of elemnts from
*   the beginning of array
*
* @param {Array} array : the array to search through. If not an array, an empty 
*   array will be returned.
* @param {number} number : the number of elements to return
*/

