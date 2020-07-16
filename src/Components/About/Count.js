import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Counter from '../Counter/Counter';
import { MDBRow, MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faDesktop, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';
class Count extends Component {
  state = {
    counter: [
      { start: 0, end: 0 },
      { start: 0, end: 0 },
      { start: 0, end: 0 },
      { start: 0, end: 0 }
    ],
    didViewCountUp: false
  };
  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({
        counter: [
          { start: 0, end: 50 },
          { start: 0, end: 223 },
          { start: 0, end: 472 },
          { start: 0, end: 25369498 }
        ],
        didViewCountUp: true
      });
    }
  }
  render() {
    return (
      <Zoom>
        <div className="react-counter">
          <VisibilitySensor onChange={this.onVisibilityChange} scrollCheck={true} delayedCall>
            <div className="counterblock" >
              <MDBRow className="counter">
                <MDBCol sm="3">
                  <div className="num">
                    <div className="countericon">
                      <FontAwesomeIcon icon={faGamepad} />
                    </div>
                    <p className="counterhead">Live Tables</p>
                    <Counter start={this.state.counter[0].start} end={this.state.counter[0].end} suffix="+" />
                  </div>
                </MDBCol>
                <MDBCol sm="3">
                  <div className="num">
                    <div className="countericon">
                      <FontAwesomeIcon icon={faDesktop} />
                    </div>
                    <p className="counterhead">Slot Machines</p>
                    <Counter start={this.state.counter[1].start} end={this.state.counter[1].end} suffix="+" />
                  </div>
                </MDBCol>
                <MDBCol sm="3">
                  <div className="num">
                    <div className="countericon">
                      <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <p className="counterhead">Players</p>
                    <Counter start={this.state.counter[2].start} end={this.state.counter[2].end} />
                  </div>
                </MDBCol>
                <MDBCol sm="3">
                  <div className="num">
                    <div className="countericon">
                      <FontAwesomeIcon icon={faDollarSign} />
                    </div>
                    <p className="counterhead">Jackpot</p>
                    <Counter start={this.state.counter[3].start} end={this.state.counter[3].end} prefix="$" />
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </VisibilitySensor>
        </div>
      </Zoom>
    )
  }
}

export default Count;