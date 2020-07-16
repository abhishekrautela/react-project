import React from 'react';
import '@fortawesome/react-fontawesome'
import {MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Game from './Game';
import './Games.css';
import Livecasino from './Livecasino';
import Zoom from 'react-reveal/Zoom';
import {Link} from 'react-router-dom';
class GameComponent extends React.Component {
    state = {
        showSlots: true,
        showLiveCasino: false,
        
    }
    toggleSlotsHandler = () => {
        const doesShow = this.state.showSlots;
        const liveVisible = this.state.showLiveCasino;
        this.setState({ showSlots: !doesShow });
        this.setState({ showLiveCasino: !liveVisible });
    }
    toggleLiveCasinoHandler = () => {
        const doesShow = this.state.showLiveCasino;
        const slotVisible = this.state.showSlots;
        this.setState({ showLiveCasino: !doesShow });
        this.setState({ showSlots: !slotVisible });

    }
    render() {
        let slots = null;
        if (this.state.showSlots) {
            slots = (
                <div className="gamecomponentcontainer">
                    <Zoom><Game src="bali.png" name="Bali" /></Zoom>
                    <Zoom><Game src="bat_cat.png" name="Bat Cat" /></Zoom>
                    <Zoom><Game src="bingo_bomb.png" name="Bingo Bomb" /></Zoom>
                    <Zoom><Game src="cambodia.png" name="Cambodia" /></Zoom>
                    <Zoom><Game src="chinese_beauty.png" name="Chinese Beauty" /></Zoom>
                    <Zoom><Game src="chinese_emperor.png" name="Chinese Emperor" /></Zoom>
                    <Zoom><Game src="chinese_new_year.png" name="Chinese New Year" /></Zoom>
                    <Zoom><Game src="cock_fighting.png" name="Cock Fighting" /></Zoom>
                    <Zoom><Game src="constellations.png" name="Constellations" /></Zoom>
                    <Zoom><Game src="cowboy_club.png" name="Cowboy Club" /></Zoom>
                    <Zoom><Game src="crazy_night.png" name="Crazy Night" /></Zoom>
                    <Zoom><Game src="five_golden_fish.png" name="Five Golden Fish" /></Zoom>
                    <Zoom><Game src="iron_baby.png" name="Iron Baby" /></Zoom>
                    <Zoom><Game src="ninja.png" name="Ninja" /></Zoom>
                    <Zoom><Game src="mongolian.png" name="Mongolian" /></Zoom>
                    <Zoom><Game src="pirate_island.png" name="Pirate Island" /></Zoom>
                    <Zoom><Game src="vikings_conquest.png" name="Vikings Conquest" /></Zoom>
                    <Zoom><Game src="zodiac.png" name="Zodiac" /></Zoom>
                    <Zoom><Game src="irish_luck.png" name="Irish Luck" /></Zoom>
                    <Zoom><Game src="magic_show.png" name="Magic Show" /></Zoom>
                    <Zoom><Game src="monkey_king.png" name="Monkey King" /></Zoom>
                    <Zoom><Game src="penguin.png" name="Penguin" /></Zoom>
                    <Zoom><Game src="school_girl.png" name="School Girl" /></Zoom>
                    <Zoom><Game src="thai_wonderland.png" name="Thai Wonderland" /></Zoom>
                    <Zoom><Game src="witch_hunter.png" name="Witch Hunter" /></Zoom>
                    <Zoom><Game src="zombie_party.png" name="Zombie Party" /></Zoom>
                    <Zoom><Game src="medusa.png" name="Medusa" /></Zoom>
                    <Zoom><Game src="safari_time.png" name="Safari Time" /></Zoom>
                    <Zoom><Game src="universe.png" name="Universe" /></Zoom>
                    <Zoom><Game src="super_dog.png" name="Super Dog" /></Zoom>
                    <Zoom><Game src="forbidden_legend.png" name="Forbidden Legend" /></Zoom>
                    <Zoom><Game src="geisha_art.png" name="Geisha Art" /></Zoom>
                    <Zoom><Game src="gold_mining.png" name="Gold Mining" /></Zoom>
                    <Zoom><Game src="golden_champion.png" name="Golden Champion" /></Zoom>
                    <Zoom><Game src="halloween.png" name="Halloween Night" /></Zoom>
                    <Zoom><Game src="highway_king.png" name="Highway King" /></Zoom>
                </div>
            );
        }
        let livecasino = null;
        if (this.state.showLiveCasino) {
            livecasino = (
                <div className="gamecomponentcontainer">
                    <Zoom><Livecasino src="baccarat_ins.jpg" name="Baccarat Ins" /></Zoom>
                    <Zoom><Livecasino src="squezze_cards.jpg" name="Baccarat Squeeze Card" /></Zoom>
                    <Zoom><Livecasino src="dragon_tiger.jpg" name="Dragon Tiger" /></Zoom>
                    <Zoom><Livecasino src="fantan.jpg" name="Fantan" /></Zoom>
                    <Zoom><Livecasino src="roulette.jpg" name="Roulette" /></Zoom>
                    <Zoom><Livecasino src="sicbo.jpg" name="Sicbo" /></Zoom>
                    <Zoom><Livecasino src="xocdia.jpg" name="Xocdia" /></Zoom>
                    <Zoom><Livecasino src="multitables.jpg" name="Multi Views" /></Zoom>
                </div>
            )
        }
        return (
            <React.Fragment>
                <section id="breadcrumbs" className="breadcrumbs">
                    <MDBContainer>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Games</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Games</li>
                            </ol>
                        </div>

                    </MDBContainer>
                </section>
                <section id="menu" className="menu section-bg">
                    <MDBContainer>
                        <div className="section-title">
                            <h2>Our Games</h2>
                        </div>
                        <MDBRow>
                            <MDBCol lg="12" className="d-flex justify-content-center">
                                <ul id="menu-flters">
                                    <li className={this.state.showSlots?"filter-active":""}   onClick={this.toggleSlotsHandler}>Slots</li>
                                    <li className={this.state.showLiveCasino?"filter-active":""} onClick={this.toggleLiveCasinoHandler}>Live Casino</li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <section className="game-component">
                    <MDBContainer fluid>
                        {slots}
                        {livecasino}
                    </MDBContainer>
                </section>
            </React.Fragment>
        );
    }
}
export default GameComponent;