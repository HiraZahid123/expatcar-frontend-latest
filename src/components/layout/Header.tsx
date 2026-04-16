"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    const toggleSubMenu = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        setActiveSubMenu(activeSubMenu === id ? null : id);
    };

    return (
        <div className="header-main bg-white d-block position-relative">
            <div className="header">
                <div className="header-section">
                    <div className="container px-4 px-md-3">
                        <div className="row align-items-center py-2">
                            <div className="col-lg-3 col-9">
                                <Link href="/" className="d-inline-block logo">
                                    <img 
                                        width={238} 
                                        height={38} 
                                        src="/front/images/logo.webp" 
                                        alt="expatcarbuyers" 
                                        className="img-fluid logocompany"
                                    />
                                </Link>
                            </div>

                            <div className="col-lg-9 col-3 text-end">
                                <div className="btn btn-danger custom-rounded ml-3 ms-3 px-3 py-2 btn-phone d-none d-lg-inline-block">
                                    <a href="tel:+971561774555" className="header-phone text-white text-decoration-none d-flex align-items-center">
                                        <img src="/front/images/phone.webp" alt="phone" className="me-2 mr-2" width={18} height={18} />
                                        +971 56 1774555
                                    </a>
                                </div>

                                <button 
                                    className="custom-nav-button navbar-toggler d-lg-none" 
                                    type="button"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <nav id="custom-navbar" className={`navbar navbar-expand-lg navbar-light ${isMenuOpen ? 'show' : ''}`}>
                    <div className="container">
                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                            <ul className="navbar-nav w-100 flex-column flex-lg-row">
                                <li className="nav-item position-relative">
                                    <a 
                                        className="nav-link open-sub-menu d-flex align-items-center justify-content-between" 
                                        href="#" 
                                        onClick={(e) => toggleSubMenu('sell-car', e)}
                                    >
                                        SELL CAR
                                        <svg fill="#fff" height="14px" width="12px" version="1.1" viewBox="0 0 330 330" className={`ms-2 transition-transform ${activeSubMenu === 'sell-car' ? 'rotate-180' : ''}`}>
                                            <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                                        </svg>
                                    </a>
                                    <div className="sub-menu" style={{ display: activeSubMenu === 'sell-car' ? 'block' : 'none' }}>
                                        <Link className="dropdown-item" href="/sell-cars">Sell Cars</Link>
                                        <Link className="dropdown-item" href="/we-buy-any-car">We Buy Any Car</Link>
                                        <Link className="dropdown-item" href="/we-cash-any-car">We Cash Any Car</Link>
                                    </div>
                                </li>
                                <li className="nav-item position-relative">
                                    <a 
                                        className="nav-link open-sub-menu d-flex align-items-center justify-content-between" 
                                        href="#" 
                                        onClick={(e) => toggleSubMenu('by-city', e)}
                                    >
                                        BY CITY
                                        <svg fill="#fff" height="14px" width="12px" viewBox="0 0 330 330" className={`ms-2 transition-transform ${activeSubMenu === 'by-city' ? 'rotate-180' : ''}`}>
                                            <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                                        </svg>
                                    </a>
                                    <div className="sub-menu" style={{ display: activeSubMenu === 'by-city' ? 'block' : 'none' }}>
                                        <Link className="dropdown-item" href="/sell-cars/dubai">Sell Cars In Dubai</Link>
                                        <Link className="dropdown-item" href="/sell-car-abu-dhabi">Sell Cars In Abu-Dubai</Link>
                                        <Link className="dropdown-item" href="/sell-cars/sharjah">Sell Cars In Sharjah</Link>
                                    </div>
                                </li>
                                <li className="nav-item position-relative">
                                    <a 
                                        className="nav-link open-sub-menu d-flex align-items-center justify-content-between" 
                                        href="#" 
                                        onClick={(e) => toggleSubMenu('by-model', e)}
                                    >
                                        BY MODEL
                                        <svg fill="#fff" height="14px" width="12px" viewBox="0 0 330 330" className={`ms-2 transition-transform ${activeSubMenu === 'by-model' ? 'rotate-180' : ''}`}>
                                            <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                                        </svg>
                                    </a>
                                    <div className="sub-menu scrollable-sub-menu" style={{ display: activeSubMenu === 'by-model' ? 'block' : 'none', maxHeight: '300px', overflowY: 'auto' }}>
                                        {['Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Lexus', 'Jeep', 'Nissan', 'Porsche', 'Mitsubishi', 'Toyota', 'Volkswagen'].map(model => (
                                            <Link key={model} className="dropdown-item" href={`/sell-cars/${model.toLowerCase()}`}>Sell {model}</Link>
                                        ))}
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/sell-cars/evaluate-your-car">EVALUATE YOUR CAR</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about-us">ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/blog">BLOGS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
