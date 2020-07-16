import React from 'react';
import Swiper from 'react-id-swiper';
import SportsComponent from './SportsComponent';
import { MDBContainer,  MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootballBall} from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';
const SportsBook = () => {
    const params = {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView:'auto',
      loop: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      },
    }

    return (
      <Zoom>
        <section className="sportsbet">
        <h3 className="text-center" id="games-header"><FontAwesomeIcon icon={faFootballBall} />&nbsp; SportsBook</h3>
        <MDBContainer fluid >
        <Swiper {...params}>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="baseball.jpg" name="Baseball" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="football.jpg" name="Football" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="basketball2.jpg" name="Basketball" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="cricket2.jpg" name="Cricket" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="hockey.jpg" name="Ice Hockey" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="rugby.jpg" name="Rugby" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="golf.jpg" name="Golf" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="tennis.jpg" name="Tennis" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="badminton.jpg" name="Badminton" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="f4.jpg" name="Formula 1" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><SportsComponent src="athletics.jpg" name="Athletics" /></MDBCol>
        </Swiper>
        </MDBContainer>
      </section>
      </Zoom>
    )
};

export default SportsBook;
