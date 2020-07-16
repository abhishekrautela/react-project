import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import './About.css';
import Count from './Count';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';
import {Link} from 'react-router-dom';
import Banner from '../Banner/Banner';
const About = () => {
  return (
    <div className="banner-bl">
    <Banner/>
    <section className="about-block">
      {/* <MDBRow className="pm">
        <MDBCol sm="12">
          <div className="about">
            <h2 className="aboutus"><FontAwesomeIcon icon={faAddressCard} />&nbsp; About Us</h2>
            <Zoom>
            <div className="aboutcontainer">
              <div className="aboutbox">
                <div className="aboutcontent">
                  <h2>01</h2>
                  <h3>Service one</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores minima debitis excepturi soluta repellat odit, inventore dolorem aspernatur, perferendis doloribus quibusdam? Recusandae doloremque quibusdam quidem sapiente officia tempora nostrum nihil.</p>
                  <Link to="/about" className="" >Read More</Link>
                </div>
              </div>

              <div className="aboutbox">
                <div className="aboutcontent">
                  <h2>02</h2>
                  <h3>Service Two</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores minima debitis excepturi soluta repellat odit, inventore dolorem aspernatur, perferendis doloribus quibusdam? Recusandae doloremque quibusdam quidem sapiente officia tempora nostrum nihil.</p>
                  <Link to="/about" className="" >Read More</Link>
                </div>
              </div>
              <div className="aboutbox">
                <div className="aboutcontent">
                  <h2>03</h2>
                  <h3>Service Three</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores minima debitis excepturi soluta repellat odit, inventore dolorem aspernatur, perferendis doloribus quibusdam? Recusandae doloremque quibusdam quidem sapiente officia tempora nostrum nihil.</p>
                  <Link to="/about" className="" >Read More</Link>
                </div>
              </div>
              <div className="aboutbox">
                <div className="aboutcontent">
                  <h2>04</h2>
                  <h3>Service Four</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores minima debitis excepturi soluta repellat odit, inventore dolorem aspernatur, perferendis doloribus quibusdam? Recusandae doloremque quibusdam quidem sapiente officia tempora nostrum nihil.</p>
                  <Link to="/about" className="" >Read More</Link>
                </div>
              </div>
            </div>
            </Zoom>
          </div>
        </MDBCol>
      </MDBRow> */}
      <Count />
    </section>
    </div>
  );
}
export default About;