import firebase from 'react-native-firebase';

const config = {
    apiKey: "AIzaSyA1vDwPQkFcyQTsho7TrRWuPW_xNErBv2E",
    authDomain: "besttile-a546b.firebaseapp.com",
    databaseURL: "https://besttile-a546b.firebaseio.com",
    storageBucket: "besttile-a546b.appspot.com",
    projectId: "besttile-a546b.appspot"
};

const fire = firebase.initializeApp(config);

export default fire;