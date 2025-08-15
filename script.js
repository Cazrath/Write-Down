// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDwI_yqnJo6A6enpGrKQmFE1k2HTweZYuk",
  authDomain: "my-app-f55fa.firebaseapp.com",
  projectId: "my-app-f55fa",
  storageBucket: "my-app-f55fa.firebasestorage.app",
  messagingSenderId: "233925569187",
  appId: "1:233925569187:web:1400810f17932416a46d16",
  measurementId: "G-0Y14FN9NS3"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Login Function
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById("status").textContent = "✅ Logged in successfully";
      console.log("User:", userCredential.user);
    })
    .catch(error => {
      document.getElementById("status").textContent = "❌ " + error.message;
    });
});
