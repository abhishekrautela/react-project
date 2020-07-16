import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from '../Containers/Home/Home';
import About from '../Containers/About/About';
import Pricing from '../Containers/Pricing/Pricing';
import Payment from '../Containers/Payment/Payment';
import Games from '../Containers/Games/Games';
import Offers from '../Containers/Offers/Offers';
import Error from '../Containers/Error/Error';
import { Route , Switch} from 'react-router-dom';
class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/pricing" exact component={Pricing} />
                <Route path="/payment-methods" exact component={Payment} />
                <Route path="/games" exact component={Games} />
                <Route path="/offers" exact component={Offers} />
                <Route component={Error} />
            </Switch>

        )
    }

}
export default Routing;