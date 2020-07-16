import React from 'react';
import Swiper from 'react-id-swiper';
import Livecasino from './Livecasino';
import { MDBContainer,  MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop} from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';
const Livegames = () => {
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
        <section className="live-casino">
        <h3 className="text-center" id="games-header"><FontAwesomeIcon icon={faLaptop} />&nbsp; Live Casino</h3>
        <MDBContainer fluid >
        <Swiper {...params}>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><Livecasino src="baccarat_ins.jpg" name="Baccarat Ins" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><Livecasino src="squezze_cards.jpg" name="Baccarat Squeeze Card" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><Livecasino src="dragon_tiger.jpg" name="Dragon Tiger" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><Livecasino src="fantan.jpg" name="Fantan" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><Livecasino src="xocdia.jpg" name="Xocdia" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><Livecasino src="roulette.jpg" name="Roulette" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><Livecasino src="sicbo.jpg" name="Sicbo" /></MDBCol>
        <MDBCol className="lc-item" xs="12" sm="6" md="3" lg="2"><Livecasino src="multitables.jpg" name="Multi Views" /></MDBCol>
        </Swiper>
        </MDBContainer>
      </section>
      </Zoom>
    )
};

export default Livegames;
