// Import & configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwI_yqnJo6A6enpGrKQmFE1k2HTweZYuk",
  authDomain: "my-app-f55fa.firebaseapp.com",
  projectId: "my-app-f55fa",
  storageBucket: "my-app-f55fa.firebasestorage.app",
  messagingSenderId: "233925569187",
  appId: "1:233925569187:web:1400810f17932416a46d16",
  measurementId: "G-0Y14FN9NS3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get Auth reference
const auth = firebase.auth();

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect after login
    })
    .catch(error => {
      alert(error.message);
    });
}

// Signup function
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Account created!");
    })
    .catch(error => {
      alert(error.message);
    });
}
