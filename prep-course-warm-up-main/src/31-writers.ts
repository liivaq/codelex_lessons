export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

//const getTheTitles = (books: {title: string, author: string}[]) => books.map(book => book.title);

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

const aliveWriters = writers.filter(writer => writer.alive);

aliveWriters.forEach(writer => {
  console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`);
});