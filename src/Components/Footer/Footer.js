import React from 'react';
import './Footer.css';
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype,faWeixin,faTelegramPlane,faRedditAlien,faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <MDBContainer fluid className="licensing">
            <MDBRow className="footer-block">
              <MDBCol xs="6" sm="4" md="4" className="footer-widget">
              <div className="primary-block">
                <h6 className="widget-title">Gambling Website</h6>
                <div className="primary-data">
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elitnulla mauris.</div>
                </div>
                <h6 className="widget-title">Address</h6>
                <div className="primary-data">
                <div>643 First Road,  73423 Town</div>
                </div>
                <MDBRow>
                  <MDBCol xs="4" md="4">
                    <h6 className="widget-title">Email:</h6>
                    <div className="primary-data">
                    <a href="mailto:info@gambling.altsubtest.com" className="contact-email">info@gambling.altsubtest.com</a>
                  </div>
                  </MDBCol>
                  </MDBRow>
                </div>
              </MDBCol>
              <MDBCol xs="6" sm="4" md="3" className="footer-widget">
                <div className="contact-us">
                <h6 className="widget-title">Contact Us</h6>
                <div className="widget-data">
                <div className="footer-contact"><FontAwesomeIcon size='lg' icon={faPhoneAlt} style={{color:'#00aff0'}} className="contact-socials"/>&nbsp;&nbsp; +1-99-999-9999</div>
                <div className="footer-contact"><FontAwesomeIcon size='lg' icon={faSkype} style={{color:'#00aff0'}} className="contact-socials" />&nbsp;&nbsp; GamblingWebsite</div>
                <div className="footer-contact"><FontAwesomeIcon size='lg' icon={faWeixin} style={{color:'#7BB32E'}} className="contact-socials" />&nbsp;&nbsp; EuropeanGambling</div>
                <div className="footer-contact"><FontAwesomeIcon size='lg' icon={faTelegramPlane} style={{color:'#0088cc'}} className="contact-socials" />&nbsp;&nbsp; Gambling101</div>
                <div className="footer-contact"><FontAwesomeIcon size='lg' icon={faRedditAlien} style={{color:'#FF5700'}} className="contact-socials" />&nbsp;&nbsp; EuropeanGambling</div>
                </div>
                </div>
              </MDBCol>
              <MDBCol xs="6" sm="4" md="2" className="footer-widget">
                <div className="live-casino-footer">
                <h6 className="widget-title">Live Casino</h6>
                <div className="live-games">
                <div className="footer-data"><a href="#">BACCARAT</a></div>
                <div className="footer-data"><a href="#">DRAGON TIGER</a></div>
                <div className="footer-data"><a href="#">SICBO</a></div>
                <div className="footer-data"><a href="#">ROULETTE</a></div>
                <div className="footer-data"><a href="#">FANTAN</a></div>
                <div className="footer-data"><a href="#">XOCDIA</a></div>
                </div>
              </div>
              </MDBCol>
              <MDBCol xs="6" sm="4" md="2" className="footer-widget">
                <div className="pages">
                <h6 className="widget-title">Pages</h6>
                <div className="page">
                <div className="footer-data"><Link to="/about" >About Us</Link></div>
                <div className="footer-data"><Link to="/Pricing" >Pricing</Link></div>
                <div className="footer-data"><Link to="/games" >Games</Link></div>
                <div className="footer-data"><Link to="/offers" >Offers</Link></div>
                {/* <div className="footer-data"><Link to="/live-casino" >Live Casino</Link></div> */}
                <div className="footer-data"><Link to="/payment-methods" >Payment Methods</Link></div>
              </div>
              </div>
            </MDBCol>
            <MDBCol xs="6" sm="4" md="1" className="footer-widget">
            <div className="social-icons">
            <h6 className="widget-title">Follow Us</h6>
                      <div className="s-m">
                        <a href="#" ><FontAwesomeIcon  icon={faFacebookF} style={{color:'#385898'}}/></a>
                        <a href="#"><FontAwesomeIcon  icon={faTwitter} style={{color:'#0088cc'}}/></a>
                        <a href="#"><FontAwesomeIcon  icon={faInstagram} style={{color:'#833ab4'}}/></a>
                      </div>
                    </div>
            </MDBCol>
            </MDBRow>
            <div className="gap-30"></div>
            <div className="copyright">© 2020 Copyright <a href="https://www.asialivetech.com">AsiaLiveTech.com.</a> All rights reserved.</div>
          </MDBContainer>
    </footer>
  )
}
export default Footer;