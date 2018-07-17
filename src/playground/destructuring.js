/**
 * Object destructuring
 */

const person = {
  // name: 'Florent',
  age: 24,
  location: {
    city: 'Strasbourg',
    temp: 21
  }
};

const { name: firstname = 'Anonymous', age } = person;
console.log(`${firstname} is ${age}.`);

const { city, temp: temperature } = person.location;
console.log(`It's ${temperature} in ${city}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log({ publisherName });

/**
 * Array destructuring
 */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, , state = 'New York'] = address;
console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , price] = item;
console.log(`A medium ${product} costs ${price}`);
