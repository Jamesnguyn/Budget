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

database.ref().set({
  name: 'James',
  age: 25,
  isSingle: false,
  location: {
    city: 'San Diego',
    country: 'United States'
  }
});

// database.ref().set('my data');

database.ref('age').set(26);
database.ref('location/city').set('New York');

const attributes = {
  height: 69,
  wieght: 165
};

database.ref('attributes').set(attributes);