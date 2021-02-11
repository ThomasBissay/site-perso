import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBd3YI3YBHLV50NJyo0vVsEd9kkTGXD_1U",
    authDomain: "site-perso-d0304.firebaseapp.com",
    databaseURL: "https://site-perso-d0304.firebaseio.com",
    projectId: "site-perso-d0304",
    storageBucket: "site-perso-d0304.appspot.com",
    messagingSenderId: "624830874134",
    appId: "1:624830874134:web:add71b64dfe6d9381b6b37"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;