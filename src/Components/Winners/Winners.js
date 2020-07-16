import React from 'react';
import './Winners.css';
import WinnersComponent from './WinnersComponent';
const Winners = () => {
  return (
    <section className="our-winners">
      {/* <MDBContainer> */}
        <div className="winners-data">
          <div className="v-wrap"><div className="v-move">
            <div className="v-slide">
              <WinnersComponent image="th-bali.png" name="John" game="Bali" amount="$12" />
              <WinnersComponent image="th-vikings_conquest.png" name="Alexis" game="Vikings Conquest" amount="$25" />
              <WinnersComponent image="th-witch_hunter.png" name="Clare" game="Witch Hunter" amount="$13" />
            </div>
            <div className="v-slide">

              <WinnersComponent image="th-universe.png" name="Emma" game="Universe" amount="$9.8" />
              <WinnersComponent image="th-zombie_party.png" name="Stella" game="Zombie Party" amount="$66" />
              <WinnersComponent image="th-zodiac.png" name="Oliver" game="Zodiac" amount="$17" />
            </div>
            <div className="v-slide">
              <WinnersComponent image="th-mongolian.png" name="Rachel" game="Mongolian" amount="$26.9" />
              <WinnersComponent image="th-medusa.png" name="Leo" game="Medusa" amount="$127" />
              <WinnersComponent image="th-cambodia.png" name="Swara" game="Cambodia" amount="$42" />
            </div>
            <div className="v-slide">
              <WinnersComponent image="th-monkey_king.png" name="Max" game="Monkey King" amount="$48" />
              <WinnersComponent image="th-penguin.png" name="Alisha" game="Penguin" amount="$61" />
              <WinnersComponent image="th-pirate_island.png" name="Lee" game="Pirate Island" amount="$7" />
            </div>
            <div className="v-slide">
              <WinnersComponent image="th-iron_baby.png" name="Sam" game="Iron Baby" amount="$24.48" />
              <WinnersComponent image="th-magic_show.png" name="Yara" game="Magic Show" amount="$71" />
              <WinnersComponent image="th-bat_cat.png" name="Luis" game="Bat Cat" amount="$13" />
            </div>
          </div></div>
        </div>
      {/* </MDBContainer> */}
    </section>
  )
};

export default Winners;
