import React from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import PricingComponent from './PricingComponent';
const Pricing = () => {

    return (
        <React.Fragment>
            <Header />
            <div id="content-container">
                <PricingComponent />
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default Pricing;