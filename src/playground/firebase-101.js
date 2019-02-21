import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
  apiKey: "AIzaSyDQ920Rs3zFYW_hvmTID8L2BHojeDOZ8-M",
  authDomain: "expensify-69604.firebaseapp.com",
  databaseURL: "https://expensify-69604.firebaseio.com",
  projectId: "expensify-69604",
  storageBucket: "expensify-69604.appspot.com",
  messagingSenderId: "378223131122"
};

firebase.initializeApp(config);

const database = firebase.database();


database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expensesArray = [];

//     snapshot.forEach((child) => {
//       expensesArray.push({
//         firebaseId: child.key,
//         ...child.val(),
//       });
//     });

//     console.log(expensesArray);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expensesArray = [];

//     snapshot.forEach((child) => {
//       expensesArray.push({
//         firebaseId: child.key,
//         ...child.val(),
//       });
//     });

//     console.log(expensesArray);
//   });

// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense);
// });

// database.ref('notes/-LZ1fWZpQFht1NppryJh').remove();

// database.ref('notes/-LZ1fWZpQFht1NppryJh').update({
//   body: 'Buy food',
// });

// database.ref('notes').push({
//   title: 'Foo',
//   body: 'Bar',
// });

// const firebaseNotes = {
//   notes: {
//     piojselfkjs: {
//       body: 'This is my body',
//       title:'First note!',
//     },
//     podfpgkjqm: {
//       body: 'Another body bites the dust',
//       title:'Another note',
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   body: 'This is my body',
//   title:'First note!',
// }, {
//   id: '761',
//   body: 'Another body bites the dust',
//   title:'Another note',
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const { name, job } = snapshot.val();
//   console.log(`${name} is a ${job.title} at ${job.company}.`);
// });

// database.ref('bar/fizz')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   foo: 42,
//   bar: {
//     baz: 'Dummy',
//     fizz: 'Buzz',
//   },
// });
