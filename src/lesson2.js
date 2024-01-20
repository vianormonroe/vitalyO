// Lesson 2: nested objects mutation
const cloneDeep = require('lodash/cloneDeep');

/**
 *  Collection "library" contains information about books (e.g. author, title, etc.)
 *  Mostly used as response data structure in JSON format
*/
let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

/**
 * Dummy response data from server for shallow copy demonstration
 */
const serverResponse = {
    headers: {
        'Content-Type': 'text/json'
    },
    data: [...library]
}

/**
 * Sorting random collection implementation
 * @param {Object} collection
 * @param {string} field
 * @returns 
 */
function getSortedCollection(collection, field) {
    let copyRes = cloneDeep(collection); // or we can use integrated JS function "structuredClone" (https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
    copyRes.data.sort((a, b) => a[field] < b[field] ? -1 : 1);
    return copyRes;
}

console.log('source data before calling getSortedCollection', serverResponse.data)
console.log('result data', getSortedCollection(serverResponse, 'title').data)
console.log('source data after calling getSortedCollection', serverResponse.data)