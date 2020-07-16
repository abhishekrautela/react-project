import React from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import AboutComponent from './AboutComponent';
const AboutPage = () => {

    return (
        <React.Fragment>
            <Header />
            <div id="content-container">
            <AboutComponent/>
            <Footer/>
            </div>
        </React.Fragment>
    );
}

export default AboutPage;