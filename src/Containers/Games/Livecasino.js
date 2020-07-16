import React from 'react';
const Livecasino = (props)=>{
    return (
        <div className="gcbox">
                <div className="gcimgBox">
                    <img src={require("../../assets/images/livecasino/"+props.src)} style={{height:'172px', width:'250px'}} alt={props.name}/>
                </div>
                <div className="gccontent">
                    <h2 className="livegame">{props.name}</h2>
                    <button className="gcbtn">Play</button>
                </div>
            </div>
    );
}
export default Livecasino;