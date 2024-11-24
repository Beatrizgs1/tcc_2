// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import Firebase Authentication and Google Auth Provider
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6qzfuzK0vtIzwsNZVIQArVou15TE3kAQ",
  authDomain: "robokids-f56c8.firebaseapp.com",
  projectId: "robokids-f56c8",
  storageBucket: "robokids-f56c8.firebasestorage.app",
  messagingSenderId: "563715668247",
  appId: "1:563715668247:web:ffae1008fac27273d81f52",
  measurementId: "G-W4G1YZ9LC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Function to handle Google login
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log('User logged in with Google:', user);
    // You can now access user details (e.g., user.uid, user.email)
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

export { auth, googleProvider, signInWithGoogle };
