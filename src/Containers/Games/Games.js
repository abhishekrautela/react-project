import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import GameComponent from './GameComponent';
const Games = ()=>{
return(
    <React.Fragment>
    <Header/>
    <div id="content-container">
    <GameComponent/>
    <Footer/>
    </div>
    </React.Fragment>
)
}
export default Games;