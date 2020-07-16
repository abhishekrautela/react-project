import React from 'react';
import './Games.css';
import Game from './Game';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import Livegames from './Livegames';
import { MDBCol } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';
import LazyLoad from 'react-lazyload';
import About from '../About/About';
import SportsBook from './Sportsbook';
const Games = (props) => {
  const params = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    spaceBetween: 0
  }
  return (
    <LazyLoad offset={0}>
    <div className="games">
        <Livegames />
        <Zoom delay={1000}>
          <section className="our-games">
            <h3 className="text-center" id="games-header"><FontAwesomeIcon icon={faDiceSix} />&nbsp; Our Games</h3>
            <Swiper {...params}>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="bali.png" name="Bali" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="bat_cat.png" name="Bat Cat" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="bingo_bomb.png" name="Bingo Bomb" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="cambodia.png" name="Cambodia" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="chinese_beauty.png" name="Chinese Beauty" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="chinese_emperor.png" name="Chinese Emperor" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="chinese_new_year.png" name="Chinese New Year" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="cock_fighting.png" name="Cock Fighting" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="constellations.png" name="Constellations" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="cowboy_club.png" name="Cowboy Club" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="crazy_night.png" name="Crazy Night" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2">
                <Game src="five_golden_fish.png" name="Five Golden Fish" />
              </MDBCol>
            </Swiper>
            <Swiper {...params}>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="iron_baby.png" name="Iron Baby" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="ninja.png" name="Ninja" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="mongolian.png" name="Mongolian" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="pirate_island.png" name="Pirate Island" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="vikings_conquest.png" name="Vikings Conquest" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="zodiac.png" name="Zodiac" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="irish_luck.png" name="Irish Luck" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="magic_show.png" name="Magic Show" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="monkey_king.png" name="Monkey King" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="penguin.png" name="Penguin" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="school_girl.png" name="School Girl" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="thai_wonderland.png" name="Thai Wonderland" />
              </MDBCol>
            </Swiper>
            <Swiper {...params}>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="witch_hunter.png" name="Witch Hunter" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="zombie_party.png" name="Zombie Party" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="medusa.png" name="Medusa" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="safari_time.png" name="Safari Time" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="universe.png" name="Universe" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="super_dog.png" name="Super Dog" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="forbidden_legend.png" name="Forbidden Legend" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="geisha_art.png" name="Geisha Art" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="gold_mining.png" name="Gold Mining" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="golden_champion.png" name="Golden Champion" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="halloween.png" name="Halloween Night" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="3" lg="2" xl="2" >
                <Game src="highway_king.png" name="Highway King" />
              </MDBCol>
            </Swiper>
          </section>
        </Zoom>
        <Zoom>
          <SportsBook/>
        </Zoom>
        <About/>
    </div>
    
    </LazyLoad>
  );
}
export default Games;