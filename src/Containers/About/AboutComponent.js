import React from 'react';
import './AboutComponent.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';
const AboutComponent = () => {
    return (
        <React.Fragment>
            <section id="breadcrumbs" className="breadcrumbs">
                <MDBContainer>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>About Us</h2>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>About Us</li>
                        </ol>
                    </div>

                </MDBContainer>
            </section>
            <Zoom delay={1000}>
                <section id="about" className="aboutcomponent">
                    <MDBContainer>
                        <MDBRow className="content">
                            <MDBCol lg="6">
                                <div className="about-img">
                                    <img src={require('../../assets/images/about.jpg')} alt="" />
                                </div>
                            </MDBCol>
                            <MDBCol lg="6">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="font-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
      </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
      </p>
                            </MDBCol>
                        </MDBRow>

                    </MDBContainer>
                </section>
            </Zoom>
            <Zoom delay={1000}>
                <section id="why-us" className="why-us">
                    <MDBContainer>
                        <div className="section-title">
                            <h2>Why Us</h2>
                            <p>Why Choose Our Casino</p>
                        </div>

                        <MDBRow>
                            <MDBCol lg="4">
                                <div className="whyus-box" data-aos="zoom-in" data-aos-delay="100">
                                    <span>01</span>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                </div>
                            </MDBCol>

                            <MDBCol lg="4" >
                                <div className="whyus-box" data-aos="zoom-in" data-aos-delay="200">
                                    <span>02</span>
                                    <h4>Repellat Nihil</h4>
                                    <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                                </div>
                            </MDBCol>

                            <MDBCol lg="4" >
                                <div className="whyus-box" data-aos="zoom-in" data-aos-delay="300">
                                    <span>03</span>
                                    <h4> Ad ad velit qui</h4>
                                    <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                                </div>
                            </MDBCol>

                        </MDBRow>

                    </MDBContainer>
                </section>
            </Zoom>
            <Zoom delay={1000}>
                <section id="menu" className="menu section-bg">
                    <MDBContainer>
                        <div className="section-title">
                            <p>Check Our Popular Games</p>
                        </div>
                        <MDBRow className="menu-container">

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-bat_cat.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">BatCat</a><span>$5.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-ninja.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">Ninja</a><span>$6.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-mongolian.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">Mongolian Empire</a><span>$7.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-zombie_party.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">Zombie Party</a><span>$8.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-witch_hunter.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">Witch Hunter</a><span>$9.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-medusa.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">Medusa</a><span>$4.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-vikings_conquest.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">Vikings Conquest</a><span>$9.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-iron_baby.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">Iron Baby</a><span>$9.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                            <MDBCol lg="6" className="menu-item">
                                <img src={require('../../assets/images/thumbs/th-pirate_island.png')} className="menu-img" alt="" />
                                <div className="menu-content">
                                    <a href="#">Pirate Island</a><span>$12.95</span>
                                </div>
                                <div className="menu-ingredients">
                                    Lorem, deren, trataro, filede, nerada
      </div>
                            </MDBCol>

                        </MDBRow>

                    </MDBContainer>
                </section>
            </Zoom>
            <Zoom>
                <section id="specials" className="specials">
                    <MDBContainer>
                        <div className="section-title">
                            <h2>Popular Live Games</h2>
                            <p>Check Our Popular Live Casino</p>
                        </div>

                        <MDBRow>
                            <MDBCol lg="3">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-toggle="tab" href="#tab-1">Modi sit est</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                                    </li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="9" className="mt-4 mt-lg-0">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <MDBRow>
                                            <MDBCol lg="8" className="details order-2 order-lg-1">
                                                <h3>Architecto ut aperiam autem id</h3>
                                                <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                            </MDBCol>
                                            <MDBCol lg="4" className="text-center order-1 order-lg-2">
                                                <img src={require('../../assets/images/livecasino/baccarat.jpg')} alt="" className="img-fluid" />
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <MDBRow>
                                            <MDBCol lg="8" className="details order-2 order-lg-1">
                                                <h3>Et blanditiis nemo veritatis excepturi</h3>
                                                <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                            </MDBCol>
                                            <MDBCol lg="4" className="text-center order-1 order-lg-2">
                                                <img src={require('../../assets/images/livecasino/dragon_tiger.jpg')} alt="" className="img-fluid" />
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <div className="tab-pane" id="tab-3">
                                        <MDBRow>
                                            <MDBCol lg="8" className="details order-2 order-lg-1">
                                                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                                <p className="font-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                            </MDBCol>
                                            <MDBCol lg="4" className="text-center order-1 order-lg-2">
                                                <img src={require('../../assets/images/livecasino/fantan.jpg')} alt="" className="img-fluid" />
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <div className="tab-pane" id="tab-4">
                                        <MDBRow>
                                            <MDBCol lg="8" className="details order-2 order-lg-1">
                                                <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                                <p className="font-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                                <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                            </MDBCol>
                                            <MDBCol lg="4" className="text-center order-1 order-lg-2">
                                                <img src={require('../../assets/images/livecasino/roulette.jpg')} alt="" className="img-fluid" />
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <div className="tab-pane" id="tab-5">
                                        <MDBRow>
                                            <MDBCol lg="8" className="details order-2 order-lg-1">
                                                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                                <p className="font-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                                <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                            </MDBCol>
                                            <MDBCol lg="4" className="text-center order-1 order-lg-2">
                                                <img src={require('../../assets/images/livecasino/xocdia.jpg')} alt="" className="img-fluid" />
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </Zoom>
        </React.Fragment>
    )
}
export default AboutComponent