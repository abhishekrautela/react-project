import React from 'react';
import './Join.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import LazyLoad from 'react-lazyload';
import Zoom from 'react-reveal/Zoom'
const Join = () => {
    return (
        <LazyLoad offset={0}>
            <section id="features" className="features">
                <MDBContainer >
                    <div className="why-join-title">
                        <h2 className="why-join-title">Why Join us</h2>
                    </div>
                    <MDBRow className="content">
                        <MDBCol md="5">
                            <Zoom>
                                <img src={require('../../assets/images/features-1.png')} className="img-fluid join-img" alt="" />
                            </Zoom>
                        </MDBCol>
                        <MDBCol md="7" className="pt-4">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
            </p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Ullam est qui quos consequatur eos accusamus.</li>
                            </ul>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="content">
                        <MDBCol md="5" className="order-1 order-md-2" >
                            <Zoom>
                                <img src={require('../../assets/images/features-2.png')} className="img-fluid join-img" alt="" />
                            </Zoom>
                        </MDBCol>
                        <MDBCol md="7" className="pt-5 order-2 order-md-1">
                            <h3>Corporis temporibus maiores provident</h3>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
            </p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="content">
                        <MDBCol md="5">
                            <Zoom>
                                <img src={require('../../assets/images/features-3.png')} className="img-fluid join-img" alt="" />
                            </Zoom>
                        </MDBCol>
                        <MDBCol md="7" className="pt-5" >
                            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><FontAwesomeIcon icon={faCheckDouble} /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                            </ul>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="content">
                        <MDBCol md="5" className="order-1 order-md-2">
                            <Zoom>
                                <img src={require('../../assets/images/features-4.png')} className="img-fluid join-img" alt="" />
                            </Zoom>
                        </MDBCol>
                        <MDBCol md="7" className="pt-5 order-2 order-md-1" >
                            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
            </p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </section>
        </LazyLoad>
    )
}
export default Join;
