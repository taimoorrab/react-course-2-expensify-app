//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Houston', 'Texas', '77407'];

const [, city, state = 'Florida'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$2.75'];
const [selectedItem, , priceMed] = item;
console.log(`A medium ${selectedItem} costs ${priceMed}`);


//
// Object destructuring
//

// const person = {
//     name: 'Taimor',
//     age: 27,
//     location: {
//         city: 'Texas',
//         temp: 92
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);