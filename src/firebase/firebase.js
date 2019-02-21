import * as firebase from 'firebase';

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

export { firebase, database as default };
