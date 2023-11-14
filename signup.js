// Firebase Configuration (from firebase-config.js)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDIx4rgqWvoNlSYKCsuDMSqTwp67yySNs",
  authDomain: "test3-4a414.firebaseapp.com",
  databaseURL: "https://test3-4a414-default-rtdb.firebaseio.com",
  projectId: "test3-4a414",
  storageBucket: "test3-4a414.appspot.com",
  messagingSenderId: "560666547360",
  appId: "1:560666547360:web:f8d67a0bc3e84a670365c5",
  measurementId: "G-HB5F6L08X6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Sign-up Logic
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = `${name}@gmail.com`;
    const password = document.getElementById("password").value;

    // Create user in Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Store user data in Firebase Realtime Database or Firestore
            // Replace 'users' with your own database reference
            firebase.database().ref('users/' + user.uid).set({
                name: name,
                email: email,
                password: password,
            });

            // Redirect or show a success message
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
});