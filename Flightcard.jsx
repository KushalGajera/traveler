// eslint-disable-next-line no-unused-vars
import React from "react";

function Flightcard() {
    return (
        //  Flight Details Cards 
        <div className="row justify-content-center mb-4 pt-2,">
            <div className="col-12 col-md-6 pt-2">
                <div className="card smooth-card bg-primary text-white">
                    <div className="card-body py-3">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="card-title fw-medium fs-6 smooth-title-inverted">Flight Details</h3>
                            <button className="btn btn-sm btn-outline-light smooth-btn-outline">See all</button>
                        </div>
                        <p className="card-text small smooth-text-inverted">26.01.2025, 10:50 am</p>
                        <div className="d-flex align-items-center mt-3">
                            <div className="me-3">
                                <p className="fw-semibold fs-5 mb-0 smooth-text-inverted">DEL</p>
                                <p className="text-white-50 small mb-0 smooth-text-inverted">Delhi, India</p>
                            </div>
                            <svg className="bi bi-arrow-right text-white mx-2" width="1.2em" height="1.2em" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.146-3.147a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <div className="ms-3">
                                <p className="fw-semibold fs-5 mb-0 smooth-text-inverted">NRT</p>
                                <p className="text-white-50 small mb-0 smooth-text-inverted">Narita, Tokyo</p>
                            </div>
                            <div className="ms-auto">
                                <svg xmlns="" width="40" height="20" fill="currentColor" className="bi bi-airplane-fill text-info smooth-airplane-icon" viewBox="0 0 16 16">
                                    <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.591 1.572 1.151C9.861 1.73 10 3 10 3s1.553 0 2.273-.6c.177-.141.386-.2.546-.16.436.115.635.692.58 1.042l-5.353 5.353L15 11.5v1c0 .5-.5 1-1 1h-3l-3.188-3.188A2.5 2.5 0 0 1 1 12.5V11h-.5a.5.5 0 0 1-.5-.5V3s1.542 1.03 2.293 1.64c.177.141.386.2.546.16.435-.115.635-.692.58-.042L6.428 1.151z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 pt-2">
                <div className="card smooth-card bg-primary text-white">
                    <div className="card-body py-3">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="card-title fw-medium fs-6 smooth-title-inverted">Flight Details</h3>
                            <button className="btn btn-sm btn-outline-light smooth-btn-outline">See all</button>
                        </div>
                        <p className="card-text small smooth-text-inverted">28.01.2025, 09:00 am</p>
                        <div className="d-flex align-items-center mt-3">
                            <div className="me-3">
                                <p className="fw-semibold fs-5 mb-0 smooth-text-inverted">NRT</p>
                                <p className="text-white-50 small mb-0 smooth-text-inverted">Narita, Tokyo</p>
                            </div>
                            <svg className="bi bi-arrow-right text-white mx-2" width="1.2em" height="1.2em" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.146-3.147a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <div className="ms-3">
                                <p className="fw-semibold fs-5 mb-0 smooth-text-inverted">ICN</p>
                                <p className="text-white-50 small mb-0 smooth-text-inverted">Incheon, Seoul</p>
                            </div>
                            <div className="ms-auto">
                                <svg xmlns="" width="40" height="20" fill="currentColor" className="bi bi-airplane-fill text-info smooth-airplane-icon" viewBox="0 0 16 16">
                                    <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.591 1.572 1.151C9.861 1.73 10 3 10 3s1.553 0 2.273-.6c.177-.141.386-.2.546-.16.436.115.635.692.58 1.042l-5.353 5.353L15 11.5v1c0 .5-.5 1-1 1h-3l-3.188-3.188A2.5 2.5 0 0 1 1 12.5V11h-.5a.5.5 0 0 1-.5-.5V3s1.542 1.03 2.293 1.64c.177.141.386.2.546.16.435-.115.635-.692.58-.042L6.428 1.151z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flightcard;