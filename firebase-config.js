// Import Firebase SDKs (Compat version for easy HTML usage)
document.write('<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-storage-compat.js"><\/script>');

window.addEventListener('load', function() {
    const firebaseConfig = {
        apiKey: "AIzaSyBCUgxjCN53ODl8aJHGdFo7WhiNG8D91fk",
        authDomain: "writebuddy-1b931.firebaseapp.com",
        projectId: "writebuddy-1b931",
        storageBucket: "writebuddy-1b931.firebasestorage.app",
        messagingSenderId: "17498350116",
        appId: "1:17498350116:web:647c98909262ea2b62eeb1",
        measurementId: "G-5JGNE8JDEG"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    window.db = firebase.firestore();
    window.auth = firebase.auth();
    window.storage = firebase.storage();
});