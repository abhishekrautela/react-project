import React from 'react';
import {Link} from 'react-router-dom';
const Game = (props)=>{
    return (
        <div className="gamecontainer">
        <div className="box">
                <div className="imgBox">
                    <img src={require("../../assets/images/slots/"+props.src)} className="swiper-lazy"/>
                </div>
                <div className="content">
                    <h2>{props.name}</h2>
                    <Link to="/games"> <button className="bttn btn-1">Play</button></Link>
                </div>
            </div>
            </div>
    );
}
export default Game;