const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyCkq0ard-3b-OZXG5mpADM546zjC3Itvoc",
    authDomain: "wesopt29-328c5.firebaseapp.com",
    projectId: "wesopt29-328c5",
    storageBucket: "wesopt29-328c5.appspot.com",
    messagingSenderId: "260907935798",
    appId: "1:260907935798:web:36e43bca4878e6f70bd097",
    measurementId: "G-6896CRBP4T"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };