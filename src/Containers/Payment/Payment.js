import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PaymentComponent from './PaymentComponent';
const Payment = ()=>{
return(
    <React.Fragment>
    <Header/>
    <div id="content-container">
    <PaymentComponent/>
    <Footer/>
    </div>
    </React.Fragment>
)
}
export default Payment;