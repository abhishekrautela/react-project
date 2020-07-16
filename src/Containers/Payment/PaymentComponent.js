import React from 'react';
import  '@fortawesome/react-fontawesome'
import './Payment.css';
import { MDBDataTableV5, MDBContainer } from 'mdbreact';
import Zoom from 'react-reveal/Zoom';
const PaymentComponent = () => {
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Payment Method',
                field: 'payment',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Type',
                field: 'type',
                width: 270,
            },
            {
                label: 'Fee',
                field: 'fee',
                width: 200,
            },
            {
                label: 'Time',
                field: 'time',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Minimum Limit',
                field: 'minimum',
                sort: 'enabled',
                width: 100,
            },
            {
                label: 'Maximum Limit',
                field: 'maximum',
                sort: 'enabled',
                width: 100,
            },
        ],
        rows: [
            {
                payment: 'Visa',
                type: 'Bank Transfer',
                fee: '0',
                time: 'Instant',
                minimum: '$20',
                maximum: '$350',
            },
            {
                payment: 'Paypal',
                type: 'Bank Transfer',
                fee: '0',
                time: 'Instant',
                minimum: '$10',
                maximum: '$200',
            },
            {
                payment: 'Neteller',
                type: 'Credit Card',
                fee: '0',
                time: 'Instant',
                minimum: '$50',
                maximum: '$500',
            },
            {
                payment: 'Trustly',
                type: 'Credit Card',
                fee: '0',
                time: 'Instant',
                minimum: '$10',
                maximum: '$400',
            },
            {
                payment: 'MasterCard',
                type: 'Credit Card',
                fee: '0',
                time: 'Instant',
                minimum: '$80',
                maximum: '$200',
            },
            {
                payment: 'Ecopayz',
                type: 'Bank Transfer',
                fee: '0',
                time: 'Instant',
                minimum: '$35',
                maximum: '$400',
            },
            {
                payment: 'Jeton',
                type: 'Bank Transfer',
                fee: '0',
                time: 'Instant',
                minimum: '$20',
                maximum: '$150',
            },
            {
                payment: 'Skrill',
                type: 'Bank Transfer',
                fee: '0',
                time: 'Instant',
                minimum: '$60',
                maximum: '$440',
            },
            
        ],
    });

    return (
        <React.Fragment>
              <section id="breadcrumbs" className="breadcrumbs">
                <MDBContainer>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Payment Methods</h2>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>Payment Methods</li>
                        </ol>
                    </div>

                </MDBContainer>
            </section>
            
        <section className="payment-methods-component" >
            <MDBContainer>
                <h2 className="payment-component-header">Payment Methods</h2>
                <Zoom>
                <MDBDataTableV5  responsiveMd hover searching={false} paging={false} data={datatable} />
                </Zoom>
            </MDBContainer>
        </section>
        
        </React.Fragment>
    );
}
export default PaymentComponent;