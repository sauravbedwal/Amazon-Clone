import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyBkjwd5E-miNBCPTrXErBypLQcwfyBtDPQ",
  authDomain: "e-clone-ea118.firebaseapp.com",
  projectId: "e-clone-ea118",
  storageBucket: "e-clone-ea118.appspot.com",
  messagingSenderId: "408760115315",
  appId: "1:408760115315:web:1e8ac8832825c7e7ec8a06",
  measurementId: "G-JJ3L0G1K9N",
};

const whatsApp = firebase.initializeApp(firebaseConfig);

const db = whatsApp.firestore();

const auth = firebase.auth();

export default db;
export { auth };
