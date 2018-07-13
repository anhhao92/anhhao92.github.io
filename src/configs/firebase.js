import firebase from 'firebase/app';
import { FirebaseConfig } from './keys';
import 'firebase/database';
import 'firebase/auth';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const dashboardRef = databaseRef.child('dashboard');
export const contactsRef = databaseRef.child('contacts');
export const tasksRef = databaseRef.child('tasks');
export const stocksRef = databaseRef.child('stocks');
export const reportsRef = databaseRef.child('reports');
export const usersRef = databaseRef.child('users');

const auth = firebase.auth();
auth.useDeviceLanguage();

export { firebase };
