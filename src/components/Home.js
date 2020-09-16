import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourColumns from "./HomeFourColumns";
import AboutUs from "./AboutUs";
import WeHelp from "./WeHelp";
import Contact from "./Contact";

import app from 'firebase/app';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}



function Home() {
    return (
        <div className="App">
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourColumns/>
            <AboutUs/>
            <WeHelp/>
            <Contact/>
        </div>
    );
}

export default Home;
