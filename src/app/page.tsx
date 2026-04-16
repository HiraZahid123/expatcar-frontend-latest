"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import ValuationForm from '@/components/valuation-form/ValuationForm';
import FAQAccordion from '@/components/home/FAQAccordion';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

export default function Home() {
    return (
        <div className="home-page-wrapper">
            {/* HERO SECTION - Exact Replication */}
            <section className="bg d-block mainhmbnr">
                <div className="position-absolute w-100 banner-Text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="d-flex align-items-center justify-content-center custom-Height-form flex-column w-100">
                                    <h1 className="w-100 mb-3 banner-header wow fadeInDown" data-wow-delay="0.2s">
                                        Sell any car today completely hassle free with Expat Car Buyers
                                    </h1>
                                    <p className="w-100 mb-3 banner-subheader wow fadeInUp" data-wow-delay="0.4s">
                                        ‘I want to sell my car in the UAE?” Well, we have got the perfect solution for you. With our services, selling a car, no matter its make or model, becomes easy, quick, and hassle-free. We offer free professional car inspection to determine the fair value of the vehicle. So, if you want to sell any car in UAE, simply fill out the form below and you could have the cash in your hand within just 30 minutes!
                                    </p>

                                    <div className="d-inline-block align-items-center w-100 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="banner_form_wrapper py-3 px-2 shadow bg-white" style={{ borderRadius: '38.9634px' }}>
                                            <div className="container-fluid">
                                                <ValuationForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ANIMATED CAR - Exact Replication */}
                <div className="bottom-line">
                    <img className="car" src="/front/images/car.svg" loading="lazy" alt="car" />
                    <div id="moving-type-left">
                        <div className="circle1"></div>
                    </div>
                    <div id="moving-type-right">
                        <div className="circle2"></div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS SECTION */}
            <section className="how_does_work_section pt-5 mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center wow fadeIn">Sounds great, but <span className="theme-color text-danger">how do I sell my car in UAE?</span></h2>
                        </div>
                    </div>
                    <div className="row pt-md-5 pt-3">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="work_box text-center">
                                <img src="/front/images/Free-Car-Valuation.svg" alt="Book" width="50" className="mb-3" />
                                <div className="pt-4 wrkboxtitle mb-2 fw-bold">Book an Appointment</div>
                                <p className="mb-0 mt-1 small text-muted">Let us know a time that works best for you and book an appointment for a vehicle inspection at your convenience. Book online here or visit our central offices in Dubai, Abu Dhabi, or Sharjah.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="work_box text-center">
                                <img src="/front/images/Ownership-Transfer.svg" alt="Bring" width="50" className="mb-3" />
                                <div className="pt-4 wrkboxtitle mb-2 fw-bold">Bring your vehicle</div>
                                <p className="mb-0 mt-1 small text-muted">Trust us to give your vehicle a professional inspection. Simply, drive your car over to your nearest inspection point and allow us to carry out a free of charge professional inspection.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay="0.3s">
                            <div className="work_box text-center">
                                <img src="/front/images/Finance-Cleared.svg" alt="Quote" width="50" className="mb-3" />
                                <div className="pt-4 wrkboxtitle mb-2 fw-bold">Get a no-obligation quote</div>
                                <p className="mb-0 mt-1 small text-muted">Receive a fair non-obligation quote. We will offer you a quote based on the findings of our inspection. But don’t worry, this is completely obligation free- the choice to sell is 100% with you.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay="0.4s">
                            <div className="work_box text-center">
                                <img src="/front/images/Instant-Cash.svg" alt="Paid" width="50" className="mb-3" />
                                <div className="pt-4 wrkboxtitle mb-2 fw-bold">Happy with the price?</div>
                                <p className="mb-0 mt-1 small text-muted">Get paid. If you are happy with the offer that we make you, simply give us a thumbs up and we will put the cash right in your hand there and then! It has never been easier to sell any car in UAE!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION 1 */}
            <section className="wekeepcontentsec mt-5">
                <div className="container">
                    <div className="content wow fadeInUp">
                        <h2 className="mb-4 fw-bold"> Avoid the cons and find out what your car is really worth<br/><span className="theme-color text-danger"> Find Out and Sell Any Car with Confidence! </span></h2>
                        <p className="text-muted">Our core principles are transparency and fairness. We don’t hide behind a big corporate office thousands of miles away, we are right with you on the ground helping you to make your sale.</p>
                        <p className="text-muted">We strive to become your reliable partner in dealing with your used car as our mission is to provide confidence to any person that wants to sell any car in UAE.</p>
                        <p className="text-muted">Our processes are clear and they never differentiate from what we say. You can expect the same 5* treatment every time from us. It doesn’t matter if you are selling us a brand-new Porsche or a beaten-up car that has seen better days, providing out of this world service to every client is what we do.</p>
                        <p className="text-muted">There are no sneaky tricks, unforeseen costs or blackhat tactics if you trust us to sell used car in UAE with us. Once we have carried out our professional inspection, we offer you a fair price based on what we find and in line with the market.</p>
                    </div>
                </div>
            </section>

            {/* SATISFACTION GUARANTEE */}
            <section className="ourgurantee_section1 mt-5 bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 wow fadeInLeft">
                            <h3 className="fw-bold mb-4">Your satisfaction is our business</h3>
                            <p className="mb-4">We guarantee that when you sell any car with us, you will be 100% satisfied with our service. We cut no corners, are always upfront and go the extra mile for our clients. Every. Single. Time.</p>
                            <span className="theme-color text-danger fw-bold">Here is what you can expect:</span>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-3 d-flex align-items-center">
                                    <img src="/front/images/check.svg" alt="check" width="20" className="me-3" />
                                    A guaranteed quick and hassle-free sale
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <img src="/front/images/check.svg" alt="check" width="20" className="me-3" />
                                    Secure finance settlement
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <img src="/front/images/check.svg" alt="check" width="20" className="me-3" />
                                    On the spot cash in hand payment
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 wow fadeInRight text-center">
                            <img src="/front/images/Illustration-red.png" alt="Sell my car" className="img-fluid" style={{ maxWidth: '80%' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="what-people-say py-5">
                <div className="container">
                    <h3 className="text-center mb-5 fw-bold">Our Happy<span className="theme-color text-danger"> Customers</span></h3>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="peopletrustsec py-5 bg-white">
                <div className="container">
                    <h4 className="text-center fw-bold mb-5">Why people <span className="theme-color text-danger">trust us?</span></h4>
                    <div className="row g-4">
                        <div className="col-md-3 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <img src="/front/images/Free-Car-Valuation.svg" width="60" alt="Valuation" className="mb-3" />
                            <h5 className="fw-bold">Free Car Valuation</h5>
                            <p className="small text-muted">Get a non-obligation quote for your car based on the physical condition.</p>
                        </div>
                        <div className="col-md-3 text-center wow fadeInUp" data-wow-delay="0.2s">
                            <img src="/front/images/Ownership-Transfer.svg" width="60" alt="Transfer" className="mb-3" />
                            <h5 className="fw-bold">Ownership Transfer</h5>
                            <p className="small text-muted">We are authorized by RTA, and our professionals will transfer the car in our office.</p>
                        </div>
                        <div className="col-md-3 text-center wow fadeInUp" data-wow-delay="0.3s">
                            <img src="/front/images/Finance-Cleared.svg" width="60" alt="Finance" className="mb-3" />
                            <h5 className="fw-bold">Finance Settlement</h5>
                            <p className="small text-muted">We clear the outstanding finance on cars and pay the difference to customers.</p>
                        </div>
                        <div className="col-md-3 text-center wow fadeInUp" data-wow-delay="0.4s">
                            <img src="/front/images/Instant-Cash.svg" width="60" alt="Cash" className="mb-3" />
                            <h5 className="fw-bold">Instant Cash</h5>
                            <p className="small text-muted">You can sell a car in 30 minutes and receive cash on the spot!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="mainfaqsec py-5 bg-light">
                <div className="container">
                    <h3 className="text-center mb-5 fw-bold">Frequently <span className="theme-color text-danger">Asked Questions</span></h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <FAQAccordion />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
