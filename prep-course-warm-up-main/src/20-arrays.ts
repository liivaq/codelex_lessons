export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

// works with multiple people in the array

function stringToArray (listOfPeople: string[]) {
    return listOfPeople.flatMap(person => person.split(' '))
}



// works with one person in the array

/*function stringToArray (listOfPeople: string[]) {
    return listOfPeople.toString().split(' ')
}*/

console.log(stringToArray(["John Doe", "Dane Much"])); // Expected output: ['John', 'Doe']

/* 1. select each array element
2. split elements by words
3. put the words in an array */