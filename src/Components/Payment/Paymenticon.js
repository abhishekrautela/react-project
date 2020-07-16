import React from 'react';
const Paymenticon = (props) => {
  return (
    <div className="Payment-icon">
      <img src={require('./icons/' + props.src)} alt={props.alt} />
    </div>
  )
};
export default Paymenticon;