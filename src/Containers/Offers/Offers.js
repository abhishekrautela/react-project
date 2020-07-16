import React from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import OfferComponent from './OfferComponent';
const Offer = () => {

    return (
        <React.Fragment>
            <Header />
            <div id="content-container">
                <OfferComponent />
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default Offer;