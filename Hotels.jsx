// eslint-disable-next-line no-unused-vars
import React from 'react';
import hotel1 from '../assets/hotel1.jpg';
import hotel2 from '../assets/hotel2.jpg';
import hotel3 from '../assets/hotel3.jpg';
import hotel4 from '../assets/hotel4.jpg';

function Hotels() {
    return (
        //Hotel Section}
        <div className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="fs-6 fw-medium smooth-heading">Hotels</h3>
                <button className="btn btn-sm btn-link smooth-link">See all</button>
            </div>
            <div className="overflow-auto" style={{ width: '100%' }}>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gap-6 paddingTop: 10px," style={{ width: '100%' }}>
                    <div className="col">
                        <div className="card smooth-card shadow-sm" style={{ minWidth: '220px' }}>
                            <img
                                src={hotel1}
                                alt="Hotel 1"
                                className="card-img-top smooth-img-rounded"
                                style={{ height: '140px', objectFit: 'cover' }}
                            />
                            <div className="card-body p-3">
                                <h5 className="card-title fs-6 fw-semibold mb-1 smooth-title-small">Hotel Name 1</h5>
                                <p className="card-text text-secondary small mb-0 smooth-text">City, Country</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card smooth-card shadow-sm" style={{ minWidth: '220px' }}>
                            <img
                                src={hotel2}
                                alt="Hotel 2"
                                className="card-img-top smooth-img-rounded"
                                style={{ height: '140px', objectFit: 'cover' }}
                            />
                            <div className="card-body p-3">
                                <h5 className="card-title fs-6 fw-semibold mb-1 smooth-title-small">Hotel Name 2</h5>
                                <p className="card-text text-secondary small mb-0 smooth-text">City, Country</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card smooth-card shadow-sm" style={{ minWidth: '220px' }}>
                            <img
                                src={hotel3}
                                alt="Resort 1"
                                className="card-img-top smooth-img-rounded"
                                style={{ height: '140px', objectFit: 'cover' }}
                            />
                            <div className="card-body p-3">
                                <h5 className="card-title fs-6 fw-semibold mb-1 smooth-title-small">Resort Name 1</h5>
                                <p className="card-text text-secondary small mb-0 smooth-text">Beach City, Country</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card smooth-card shadow-sm" style={{ minWidth: '220px' }}>
                            <img
                                src={hotel4}
                                alt="Villa 1"
                                className="card-img-top smooth-img-rounded"
                                style={{ height: '140px', objectFit: 'cover' }}
                            />
                            <div className="card-body p-3">
                                <h5 className="card-title fs-6 fw-semibold mb-1 smooth-title-small">Villa Name 1</h5>
                                <p className="card-text text-secondary small mb-0 smooth-text">Mountain Town, Country</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotels;