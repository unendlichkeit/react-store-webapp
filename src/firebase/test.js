import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

var testDB = firestore.collection('users').doc('dEkCYFkqIEG3Qb63ZvVo');


export default testDB;