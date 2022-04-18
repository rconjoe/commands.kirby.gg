import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBlcqM5K3OUHiXz2JUHGeeAClOa6H5PoW4",
  authDomain: "kassandrabot.firebaseapp.com",
  databaseURL: "https://kassandrabot-default-rtdb.firebaseio.com",
  projectId: "kassandrabot",
  storageBucket: "kassandrabot.appspot.com",
  messagingSenderId: "960091752117",
  appId: "1:960091752117:web:992fdc38685837b51ca0fc"
};

export const app = initializeApp(firebaseConfig);
