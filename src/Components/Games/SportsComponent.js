import React from 'react';
import {Link} from 'react-router-dom';
const SportsComponent = (props) => {
    return (
        <div className="lc-box">
            <div className="imgBox">
                <img src={require("../../assets/images/sports/" + props.src)} style={{ height: '172px', width: '250px' }} alt={props.name} />
            </div>
            <div className="content">
                <h2 className="livegame">{props.name}</h2>
                <Link to="/games"> <button className="bttn btn-1">Try Now</button></Link>
            </div>
        </div>
    );
}
export default SportsComponent;