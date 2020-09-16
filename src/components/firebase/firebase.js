import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import React from "react";

const config = {

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
