import React from 'react';
const Game = (props) => {
    return (
        <div className="gcbox">
            <div className="gcimgBox">
                <img src={require("../../assets/images/slots/" + props.src)} alt={props.name}/>
            </div>
            <div className="gccontent">
                <h2>{props.name}</h2>
                <button className="gcbtn">Play</button>
            </div>
        </div>
    );
}
export default Game;