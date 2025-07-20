// src/authService.js
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOutUser() {
  return signOut(auth);
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
} 