import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD5MK9jAi1y2cXAFuINBZkLXXJxcu9Zl5U',
  authDomain: 'tribezone-a0224.firebaseapp.com',
  projectId: 'tribezone-a0224',
  storageBucket: 'tribezone-a0224.firebasestorage.app',
  messagingSenderId: '532508517361',
  appId: '1:532508517361:web:92dc28cf2dd88300ae5a50',
  measurementId: 'G-1NED4VHF0F',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 