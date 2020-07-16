import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Jackpot from './Jackpot';
const Jack = () => {
    return (
        <section className="winners-block">
            <MDBContainer fluid>
            <MDBRow>
                <MDBCol sm="12" md="4">
                    <Jackpot image1="zombie_party.png" game1="Zombie Party" amount1="146.998" image2="safari_time.png" game2="Safari Time" amount2="13.486" image3="universe.png" game3="Universe" amount3="89.810"/>
                </MDBCol>
                <MDBCol sm="12" md="4">
                    <Jackpot image1="ninja.png" game1="Ninja" amount1="25.486" image2="water_world.png" game2="Water World" amount2="486.339" image3="super_dog.png" game3="Super Dog" amount3="51.158" />
                </MDBCol>
                <MDBCol sm="12" md="4">
                    <Jackpot image1="pirate_island.png" game1="Pirate Island" amount1="86.423" image2="witch_hunter.png" game2="Witch Hunter" amount2="75.150" image3="bali.png" game3="Bali" amount3="26.380" />
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

    )
}
export default Jack;