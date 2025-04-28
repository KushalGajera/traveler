// eslint-disable-next-line no-unused-vars
import React from 'react';
import { HouseDoorFill, Search, PlusLg, HeartFill, PersonFill } from 'react-bootstrap-icons';

export default function Navbar(){
    return (
        <nav className="navbar navbar-light bg-white fixed-bottom shadow-sm smooth-bottom-nav">
                <div className="container" style={{width: '100%'}}>
                    <div className="d-flex justify-content-around w-100">
                        <button className="btn btn-link p-0 smooth-nav-item active">
                            <HouseDoorFill className="text-primary" size={24} />
                        </button>
                        <button className="btn btn-link p-0 smooth-nav-item">
                            <Search className="text-secondary" size={24} />
                        </button>
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center smooth-action-button">
                            <PlusLg size={24} />
                        </div>
                        <button className="btn btn-link p-0 smooth-nav-item">
                            <HeartFill className="text-secondary" size={24} />
                        </button>
                        <button className="btn btn-link p-0 smooth-nav-item">
                            <PersonFill className="text-secondary" size={24} />
                        </button>
                    </div>
                </div>
            </nav>
    )
}