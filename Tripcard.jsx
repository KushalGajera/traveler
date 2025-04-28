// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Clock, PeopleFill, MapFill } from 'react-bootstrap-icons';
import tokyo from '../assets/tokyo.jpg'; 
import kyoto from '../assets/kyoto.jpg';
import osaka from '../assets/osaka.jpg';

function Tripcard() {
    return (
        <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-6 col-lg-4 pt-2">
                <div className="card smooth-card overflow-hidden smooth-upcoming-trip-card" style={{backgroundImage: `url(${tokyo})`}}>
                    <div className="smooth-upcoming-trip-overlay">
                        <h2 className="fs-4 fw-semibold smooth-upcoming-title">TOKYO</h2>
                        <p className="small smooth-upcoming-subtitle">27.01.2025 - 02.02.2025</p>
                        <div className="smooth-upcoming-info">
                            <div className="d-flex align-items-center">
                                <Clock className="me-2" size={18} /> 8 Days <span>Duration</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <PeopleFill className="me-2" size={18} /> 4 (2M,2F) <span>Group Size</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <MapFill className="me-2" size={18} /> 14 <span>Activities</span>
                            </div>
                        </div>
                        <div className="smooth-arrow-icon">
                            ↗
                        </div>
                    </div>
                </div>   
            </div>

            <div className="col-12 col-md-6 col-lg-4 pt-2">
                <div className="card smooth-card overflow-hidden smooth-upcoming-trip-card" style={{backgroundImage: `url(${kyoto})`}}>
                    <div className="smooth-upcoming-trip-overlay">
                        <h2 className="fs-4 fw-semibold smooth-upcoming-title">KYOTO</h2>
                        <p className="small smooth-upcoming-subtitle">20.01.2025 - 25.01.2025</p>
                        <div className="smooth-upcoming-info">
                            <div className="d-flex align-items-center">
                                <Clock className="me-2" size={18} /> 6 Days <span>Duration</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <PeopleFill className="me-2" size={18} /> 2 (2M,2F) <span>Group Size</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <MapFill className="me-2" size={18} /> 8 <span>Activities</span>
                            </div>
                        </div>
                        <div className="smooth-arrow-icon">
                            ↗
                        </div>
                    </div>
                </div>   
            </div>

            <div className="col-12 col-md-6 col-lg-4 pt-2">
                <div className="card smooth-card overflow-hidden smooth-upcoming-trip-card" style={{backgroundImage: `url(${osaka})`}}>
                    <div className="smooth-upcoming-trip-overlay">
                        <h2 className="fs-4 fw-semibold smooth-upcoming-title">OSAKA</h2>
                        <p className="small smooth-upcoming-subtitle">10.03.2025 - 15.03.2025</p>
                        <div className="smooth-upcoming-info">
                            <div className="d-flex align-items-center">
                                <Clock className="me-2" size={18} /> 5 Days <span>Duration</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <PeopleFill className="me-2" size={18} /> 3 (2M,2F) <span>Group Size</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <MapFill className="me-2" size={18} /> 10 <span>Activities</span>
                            </div>
                        </div>
                        <div className="smooth-arrow-icon">
                            ↗
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Tripcard;
