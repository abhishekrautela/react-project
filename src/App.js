import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
class App extends React.Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    )
  }
}

export default App;
