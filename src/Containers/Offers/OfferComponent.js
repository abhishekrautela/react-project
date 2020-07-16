import React from 'react';
import './Offers.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Zoom from 'react-reveal/Zoom';
const OfferComponent = () => {
    return (
        <section id="offers" class="offers">
            <MDBContainer>
                <div class="section-title">
                    <p>Check Out our Offers</p>
                </div>
                <Zoom>
                    <MDBRow>
                        <MDBCol lg="6" >
                            <h3 class="offers-title">Sumary</h3>
                            <div class="offers-item pb-0">
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere iaculis lorem a fermentum. In hac habitasse platea dictumst. Fusce nec ultricies felis, quis venenatis velit. Aliquam erat volutpat. Ut eros neque, tempor non nulla commodo, molestie imperdiet nibh. Proin eu fringilla erat, volutpat ultrices turpis.</em></p>
                                <p>
                                    <ul>
                                        <li>Vestibulum maximus, urna quis placerat volutpat, orci elit volutpat tortor, eu iaculis ipsum justo non libero.</li>
                                        <li>a varius. Praesent convallis fringilla viverra. Vestibulum ante ipsum prim</li>
                                        <li>Donec pretium tortor in arcu interdum, non blandit magna venenatis. Nunc non mauris nisi. Aenean quis fermentum ex. Donec ac lacinia metus, tempor sagittis nibh.</li>
                                    </ul>
                                </p>
                            </div>

                            <h3 class="offers-title">Lorem ipsum dolor sit amet.</h3>
                            <div class="offers-item">
                                <h4>Nullam eu felis vel nisl lobortis tristique. Praesent faucibus convallis dolor, quis fringilla ligula facilisis ac.</h4>
                                <h5> Mauris fermentum nisi vel est molestie, id mattis urna gravida.</h5>
                                <p><em> Mauris fermentum nisi vel est molestie, id mattis urna gravida.</em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                            </div>
                            <div class="offers-item">
                                <h4>Vestibulum maximus, urna quis placerat volutpat</h4>
                                <h5>Morbi sit amet volutpat risus. </h5>
                                <p><em> Maecenas nec ultrices nulla. Suspendisse quam massa, suscipit at orci id, ultricies faucibus arcu. Nunc sodales accumsan eros, semper facilisis velit pretium nec.</em></p>
                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                            </div>
                        </MDBCol>
                        <MDBCol lg="6">
                            <h3 class="offers-title">Ut viverra, justo consectetur</h3>
                            <div class="offers-item">
                                <h4>Ut viverra, justo consectetur</h4>
                                <h5>Vivamus pellentesque</h5>
                                <p><em>Vestibulum maximus, urna quis placerat volutpat, orci elit volutpat tortor </em></p>
                                <p>
                                    <ul>
                                        <li>Praesent convallis fringilla viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus pellentesque</li>
                                        <li>Praesent convallis fringilla viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus pellentesque</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="offers-item">
                                <h4>Maecenas nec ultrices nulla. Suspendisse quam massa, suscipit at orci id, ultricies faucibus arcu.</h4>
                                <h5>Donec pretium tortor in arcu interdum,</h5>
                                <p><em> Maecenas non augue a augue scelerisque aliquam.</em></p>
                                <p>
                                    <ul>
                                        <li>Phasellus efficitur ante et risus rhoncus, egestas facilisis ante lobortis. Nulla facilisi. Aliquam dui velit, consequat sed risus faucibus, elementum scelerisque sapien.</li>
                                        <li>Managed up to 5 projects or tasks at a given time while under pressurePhasellus efficitur ante et risus rhoncus, egestas facilisis ante lobortis. Nulla facilisi. Aliquam dui velit, consequat sed risus faucibus, elementum scelerisque sapien.</li>
                                    </ul>
                                </p>
                            </div>
                            <div class="offers-item">
                                <h4>Maecenas nec ultrices nulla. Suspendisse quam massa, suscipit at orci id, ultricies faucibus arcu.</h4>
                                <h5>Donec pretium tortor in arcu interdum,</h5>
                                <p><em> Maecenas non augue a augue scelerisque aliquam.</em></p>
                                <p>
                                    <ul>
                                        <li>Phasellus efficitur ante et risus rhoncus, egestas facilisis ante lobortis. Nulla facilisi. Aliquam dui velit, consequat sed risus faucibus, elementum scelerisque sapien. Nulla facilisi. Aliquam dui velit. Vivamus pellentesque</li>
                                    </ul>
                                </p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </Zoom>
            </MDBContainer>
        </section>
    )
}
export default OfferComponent;