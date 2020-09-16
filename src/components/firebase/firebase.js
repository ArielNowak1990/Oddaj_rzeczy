import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const config = {
    apiKey: "AIzaSyCJ-HtqbKRnKtjr471bp-k2veHvGQAiWQc",
    authDomain: "oddajubrania.firebaseapp.com",
    databaseURL: "https://oddajubrania.firebaseio.com",
    projectId: "oddajubrania",
    storageBucket: "oddajubrania.appspot.com",
    messagingSenderId: "548515526156",
    appId: "1:548515526156:web:0739b8c1742e1255ae6029",
    measurementId: "G-B0795HMPEY"
};


class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    //Auth API

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    //User API

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

}

export default Firebase;
