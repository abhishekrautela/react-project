import React from 'react';
import './Payment.css';
import { MDBRow, MDBCol } from "mdbreact";
import Paymenticon from './Paymenticon';
const Payment = ()=>{
    return(
<section className="payment-methods">
  <MDBRow className="pm">
    <MDBCol sm="12" className="payment-tray">
      <div className="PaymentIconsContainer standard">
        <Paymenticon src="boku.svg" alt="boku"/>
        <Paymenticon src="easyeft2.svg" alt="easyeft2"/>
        <Paymenticon src="ecobanq.svg" alt="ecobanq"/>
        <Paymenticon src="ecopayz.svg" alt="ecopayz"/>
        <Paymenticon src="euteller.svg" alt="euteller"/>
        <Paymenticon src="giropay.svg" alt="giropay"/>
        <Paymenticon src="idebit.svg" alt="idebit"/>
        <Paymenticon src="instadebit.svg" alt="instadebit"/>
        <Paymenticon src="interac.svg" alt="interac"/>
        <Paymenticon src="jeton.svg" alt="jeton"/>
        <Paymenticon src="maestro.svg" alt="maestro"/>
        <Paymenticon src="mastercard.svg" alt="mastercard"/>
        <Paymenticon src="neteller.svg" alt="neteller"/>
        <Paymenticon src="paypal.svg" alt="paypal"/>
        <Paymenticon src="paysafecard.svg" alt="paysafecard"/>
        <Paymenticon src="skrill.svg" alt="skrill"/>
        <Paymenticon src="sofort.svg" alt="sofort"/>
        <Paymenticon src="trustly-v2.svg" alt="trustly-v2"/>
        <Paymenticon src="visa.svg" alt="visa"/>
  </div>
  </MDBCol>
  </MDBRow>
</section>
);
};
export default  Payment;
