import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBAnimation } from
  "mdbreact";
import './Slider.css';
import Zoom from 'react-reveal/Zoom';
const Slider = () => {
  return (
    <Zoom>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="img-fluid carousel-slider"
                src={require('../../assets/images/backgrounds/background_mine.jpg')}
                alt="Jackpot"
              />
              <MDBMask pattern={6} overlay="black-strong" className="flex-center" />
            </MDBView>
              <MDBCarouselCaption >
                <Zoom>
                  <img src={require('../../assets/images/monster/monster-first.png')} className="img-fluid img-capt1" data-aos="fade-right" data-aos-delay={3000} />
                </Zoom>
                <MDBAnimation data-aos="fade-left" data-aos-delay={3000} >
                  <p>Welcome Bonus</p>
                  <p>Upto $2000 + 100 Free Spins</p>
                </MDBAnimation>
              </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="img-fluid carousel-slider"
                src={require('../../assets/images/backgrounds/sl2.jpg')}
                alt="Lucky Lottery"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <Zoom>
                <img src={require('../../assets/images/monster/monster-second.png')} className="img-fluid img-capt2" data-aos="fade-up" data-aos-delay={2000} />
              </Zoom>
              <MDBAnimation data-aos="fade-down" data-aos-delay={3000} >
                <p>Combos and Free Spins</p>
                <p>Upto $1000 CASHBACK</p>
              </MDBAnimation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="img-fluid carousel-slider"
                src={require('../../assets/images/backgrounds/sl3.jpg')}
                alt="Slots Jackpot"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <Zoom>
                <img src={require('../../assets/images/monster/monster-third.png')} className="img-fluid img-capt3" data-aos="fade-right" data-aos-delay={2000} />
              </Zoom>
              <MDBAnimation data-aos="fade-left" data-aos-delay={3000} >
                <p>Weekly Bonus</p>
                <p>Extra CASHBACK on SUNDAYS</p>
              </MDBAnimation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="img-fluid carousel-slider"
                src={require('../../assets/images/backgrounds/1029.jpg')}
                alt="Slots Jackpot"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <Zoom>
                <img src={require('../../assets/images/monster/monster-four.png')} className="img-fluid img-capt4 " data-aos="fade-right" data-aos-delay={2000} />
              </Zoom>
              <MDBAnimation data-aos="fade-left" data-aos-delay={3000} >
                <p>Sports Betting is LIVE</p>
                <p>sports from around the world</p>
              </MDBAnimation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </Zoom>
  );
}
export default Slider;