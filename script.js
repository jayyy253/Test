// Firebase initialization and login handling
// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkzavGtc_WL0mqP_SC0CMpi-45MybYDMg",
    authDomain: "user-data-e96ed.firebaseapp.com",
    projectId: "user-data-e96ed",
    storageBucket: "user-data-e96ed.appspot.com",
    messagingSenderId: "1066626734064",
    appId: "1:1066626734064:web:ba3150781be7cf22422f35",
    measurementId: "G-XTX9L4NJ2J"
  };

try {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// Function to handle successful login
function handleLogin() {
  // You can perform any actions you want here
  // For example, you can redirect the user to another page
  window.location.href = "welcome.html";
}

// Add event listener to the login button
document.querySelector(".login").addEventListener("click", handleLogin);

// Get the modal element
const modal = document.getElementById("forgotPasswordModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the "Forgot Password?" link, open the modal
document.getElementById("forgotPassword").onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};