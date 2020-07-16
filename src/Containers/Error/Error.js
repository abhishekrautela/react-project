import React from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import ErrorComponent from './ErrorComponent';
const Error = () => {

    return (
        <React.Fragment>
            <Header />
            <div id="content-container">
                <ErrorComponent />
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default Error;