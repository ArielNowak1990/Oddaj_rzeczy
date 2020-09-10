import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourColumns from "./HomeFourColumns";
import AboutUs from "./AboutUs";
import WeHelp from "./WeHelp";
import Contact from "./Contact";

function Home() {
    return (
        <div className="App">
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourColumns/>
            <AboutUs/>
            <WeHelp/>
            <Contact/>
            {/*<Footer/>*/}
        </div>
    );
}

export default Home;
