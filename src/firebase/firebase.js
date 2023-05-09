import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCdsHMahPCxRp9tB4zbT9DfKqXN4H0H-KY",
  authDomain: "budgetapp-f017c.firebaseapp.com",
  databaseURL: "https://budgetapp-f017c-default-rtdb.firebaseio.com",
  projectId: "budgetapp-f017c",
  storageBucket: "budgetapp-f017c.appspot.com",
  messagingSenderId: "864075930066",
  appId: "1:864075930066:web:e4fd2e7622985b678cd00b",
  measurementId: "G-MQLF20Z4ZK"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   })

// database.ref('expenses').push({
//   description: 'rent',
//   notes: '',
//   amount: 150000,
//   createdAt: 0
// });

// database.ref('notes/-NUyxlgpN7xTXrrfUM9T').remove();

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'James',
//   age: 25,
//   stressLevel: 6,
//   job: {
//     title: 'Software Engineer',
//     company: 'Google'
//   },
//   location: {
//     city: 'San Diego',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('data is saved!');
// }).catch((e) => {
//   console.log('failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data removed');
//   }).catch((e) => {
//     console.log('did not remove data', e);
//   });
