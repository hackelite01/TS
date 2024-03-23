// Initialize Firebase (replace with your actual Firebase configuration)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Signup form
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signup successful, do something if needed
            })
            .catch((error) => {
                // Handle signup errors
                console.error('Signup error:', error);
            });
    });
}

// Login form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Login successful, do something if needed
            })
            .catch((error) => {
                // Handle login errors
                console.error('Login error:', error);
            });
    });
}

// Logout button
const logoutButton = document.getElementById('logout-btn');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        firebase.auth().signOut()
            .then(() => {
                // Logout successful, do something if needed
            })
            .catch((error) => {
                // Handle logout errors
                console.error('Logout error:', error);
            });
    });
}

// Check authentication state
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is logged in
        // Update UI accordingly, e.g., show profile information
    } else {
        // User is not logged in
        // Redirect to login page or handle authentication state
    }
});