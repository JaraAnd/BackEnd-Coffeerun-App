(function (window) {
    'use strict';
    var App = window.App || {};
var FirebaseConfig = {
    apiKey: "AIzaSyBeuxuLsJCCOuODauQ8CsiCvD1v2cQtQ0w",
    authDomain: "coffee-run-ee151.firebaseapp.com",
    databaseURL: "https://coffee-run-ee151-default-rtdb.firebaseio.com",
    projectId: "coffee-run-ee151",
    storageBucket: "coffee-run-ee151.appspot.com",
    messagingSenderId: "260653795912",
    appId: "1:260653795912:web:7fbacd66ee5b7067bf267d",
    measurementId: "G-NV5JEXCC8E"

};
App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;
})(window);