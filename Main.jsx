// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SmoothDesign.css';
import Headers from './Header';
import Tripcard from './Tripcard';
import Flightcard from './Flightcard';
import Hotels from './Hotels';
import Navbar from './Navbar';

function Main() {
    return (
        <div className="smooth-bg min-vh-100 font-family-sans-serif">
            <div className="py-2" style={{width: '100%'}}>

                <div><Headers/></div>
                <div><Tripcard/></div>
                <div><Flightcard/></div>    
                <div><Hotels/></div>
            </div>
            <div><Navbar/></div>
            
        </div>
    );
}

export default Main;
