import React from 'react';
import {Link} from 'react-router-dom';
const Livecasino = (props) => {
    return (
        <div className="lc-box">
            <div className="imgBox">
                <img src={require("../../assets/images/livecasino/" + props.src)} style={{ height: '172px', width: '250px' }} alt={props.name} />
            </div>
            <div className="content">
                <h2 className="livegame">{props.name}</h2>
                <Link to="/games"> <button className="bttn btn-1">Play</button></Link>
            </div>
        </div>
    );
}
export default Livecasino;