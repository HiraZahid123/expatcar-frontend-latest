"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <section className="mt-5 border-top pt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 bg-light-theme-2">
                            <div className="d-md-flex flex-md-column p-4">
                                <div className="footer-abt ml-x-5 ml-md-5 ms-md-5">
                                    <ul className="list-unstyled">
                                        <li className="mb-4 d-flex">
                                            <span className="mt-1">
                                                <svg width="20" height="25" viewBox="0 0 29 35" fill="none">
                                                    <path d="M24.2428 4.22264C21.6291 1.60433 18.0815 0.133301 14.3821 0.133301C10.6824 0.133301 7.13505 1.60433 4.52117 4.22264C2.00104 6.75657 0.483395 10.1174 0.248729 13.6835C0.127619 15.6369 0.414115 17.5937 1.08973 19.4301C1.75622 21.2543 2.83891 22.9782 4.31281 24.5441L13.7742 34.6214C13.9315 34.7899 14.1513 34.8863 14.3821 34.8879C14.6134 34.8902 14.835 34.7933 14.9903 34.6214L24.4511 24.5441C25.925 22.9782 27.0077 21.2543 27.6742 19.4301C28.3582 17.596 28.6449 15.6372 28.5155 13.6835C28.279 10.1179 26.7616 6.75761 24.2428 4.22264ZM26.1 18.8556C25.5088 20.4711 24.5428 22.0039 23.2268 23.4028L14.3821 32.8308L5.52885 23.4028C4.21305 22.0039 3.24704 20.4711 2.65556 18.8556C2.0547 17.2387 1.80232 15.5132 1.91457 13.7919C2.12059 10.6274 3.4666 7.64471 5.70387 5.39675C8.00444 3.09359 11.1265 1.79888 14.3821 1.79888C17.6377 1.79888 20.7595 3.09359 23.0603 5.39675C25.2973 7.64471 26.6439 10.6274 26.8496 13.7919C26.9554 15.5134 26.7001 17.2384 26.1 18.8556Z" fill="#F24026" />
                                                    <path d="M14.3819 6.9292C10.8007 6.9292 7.88574 9.91032 7.88574 13.5749C7.88574 17.2394 10.8007 20.2211 14.3819 20.2211C17.9631 20.2211 20.8781 17.2394 20.8781 13.5749C20.8781 9.91032 17.9631 6.9292 14.3819 6.9292ZM14.3819 18.5555C11.7167 18.5555 9.55133 16.3234 9.55133 13.5749C9.55133 10.8266 11.7167 8.59478 14.3819 8.59478C17.0471 8.59478 19.2125 10.8266 19.2125 13.5749C19.2125 16.3234 17.0471 18.5555 14.3819 18.5555Z"  fill="#F24026" />
                                                </svg>
                                            </span>

                                            <div className="ml-3 ms-3">
                                                <h5 className="mb-2">Keep in touch</h5>
                                                <span className="text-muted"> Near FAB Metrostation, <br /> Al Asmawi Building, Sheikh Zayed Road,<br /> office No. G17 - Dubai - United Arab Emirates</span>
                                            </div>
                                        </li>
                                        <li className="mb-4 d-flex">
                                            <span className="mt-1">
                                                <svg width="22" height="28" viewBox="0 0 33 36" fill="none">
                                                    <path d="M30.0273 9.63242H15.3761V8.62019C15.3699 7.17272 14.2023 5.99812 12.7546 5.98319H8.42518V1.55197C8.42518 1.07192 8.03609 0.683105 7.55631 0.683105C7.07626 0.683105 6.68745 1.07192 6.68745 1.55197V6.02554C5.35591 6.16103 4.34259 7.28214 4.34151 8.62019V9.63242H2.98391C1.54648 9.63242 0.344727 10.8122 0.344727 12.2496V29.202C0.344727 30.6394 1.54648 31.7885 2.98391 31.7885H4.34151V32.8311C4.33879 34.268 5.50199 35.4353 6.93887 35.4377H12.7546C14.1963 35.4372 15.3671 34.2729 15.3761 32.8311V31.7885H30.0273C31.4648 31.7885 32.6665 30.6394 32.6665 29.202V12.2496C32.6665 10.8122 31.4648 9.63242 30.0273 9.63242ZM2.98391 30.0508C2.50467 30.0508 2.08246 29.6812 2.08246 29.202V12.2496C2.09739 11.7617 2.49571 11.3731 2.98391 11.3702H4.34151V30.0508H2.98391ZM13.6384 32.8311C13.6384 33.3112 13.2493 33.7 12.7695 33.7H6.9481C6.46806 33.7 6.07924 33.3112 6.07924 32.8311V8.58978C6.07924 8.10973 6.46806 7.72092 6.9481 7.72092H12.7695C13.2493 7.72092 13.6384 8.10973 13.6384 8.58978V32.8311ZM30.9288 29.202C30.9288 29.6812 30.5066 30.0508 30.0273 30.0508H15.3761V11.3702H30.0273C30.5153 11.3731 30.9139 11.7617 30.9288 12.2496V29.202Z" fill="#F24026" />
                                                    <path d="M28.4087 14.759C28.4087 14.279 28.0196 13.8901 27.5398 13.8901H18.5036C18.0236 13.8901 17.6348 14.279 17.6348 14.759V18.4082C17.6348 18.8883 18.0236 19.2771 18.5036 19.2771H27.5398C28.0196 19.2771 28.4087 18.8883 28.4087 18.4082V14.759ZM26.7579 17.5394H19.3725V15.6279H26.7579V17.5394Z" fill="white" />
                                                    <path d="M27.6036 21.8835H18.5407C18.0607 21.8835 17.6719 22.2724 17.6719 22.7524C17.6719 23.2325 18.0607 23.6213 18.5407 23.6213H27.6036C28.0836 23.6213 28.4724 23.2325 28.4724 22.7524C28.4724 22.2724 28.0836 21.8835 27.6036 21.8835Z" fill="white" />
                                                    <path d="M27.6036 25.446H18.5407C18.0607 25.446 17.6719 25.8349 17.6719 26.3149C17.6719 26.795 18.0607 27.1838 18.5407 27.1838H27.6036C28.0836 27.1838 28.4724 26.795 28.4724 26.3149C28.4724 25.8349 28.0836 25.446 27.6036 25.446Z" fill="white" />
                                                </svg>
                                            </span>
                                            <div className="ml-3 ms-3">
                                                <h5 className="mb-2">Service Helpline</h5>
                                                <span className="text-muted">+971 56 1774555</span>
                                            </div>
                                        </li>
                                        <li className="mb-4 d-flex">
                                            <span className="mt-1">
                                                <svg width="25" height="18" viewBox="0 0 35 24" fill="none">
                                                    <path d="M30.7812 0.081543H4.30152C2.01687 0.0823188 0.165097 1.93435 0.164062 4.219V19.668C0.165097 21.9526 2.01687 23.8049 4.30152 23.8055H30.7812C33.0659 23.8049 34.9177 21.9526 34.9187 19.668V4.219C34.9177 1.93435 33.0659 0.0823188 30.7812 0.081543ZM4.30152 1.73652H30.7812C31.9731 1.73963 32.9958 2.58548 33.2223 3.75534L17.5414 12.4939L1.86042 3.75534C2.08694 2.58548 3.10967 1.73963 4.30152 1.73652ZM30.7812 22.1425H4.30152C2.93228 22.1383 1.82292 21.0292 1.81904 19.66V5.62573L17.1359 14.1652C17.26 14.2334 17.3994 14.2707 17.5414 14.273C17.6839 14.2746 17.8238 14.2373 17.9468 14.1652L33.2637 5.62573V19.66C33.2627 21.0305 32.1518 22.1412 30.7812 22.1425Z" fill="#F24026" />
                                                </svg>
                                            </span>
                                            <div className="ml-3 ms-3">
                                                <h5 className="mb-2">For Support Mail Us</h5>
                                                <span className="text-muted">contact@expatcarbuyers.com</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 mt-4 mt-md-0">
                            <img className="w-100 rounded" src="/front/images/map.webp" alt="map-marker" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid footer-bg-dark footer text-white pt-5 mt-5">
                <div className="row d-flex px-md-5">
                    <div className="col-lg-6 col-md-12 mb-lg-0 mb-3">
                        <div className="footer-abt p-4">
                            <h6 className="mb-3 text-uppercase font-weight-bold">About Us</h6>
                            <p className="text-light opacity-75">Many people would just call us a car buying company, but that’s just half of the story. Expat Car Buyers was formed to make it easier for car sellers to sell used cars... without traditional setbacks.</p>
                        </div>

                        <div className="footer-social-global p-4">
                            <ul className="list-inline d-flex gap-3">
                                {['facebook', 'twitter', 'instagram'].map(platform => (
                                    <li key={platform} className="list-inline-item">
                                        <a href={`https://www.${platform}.com/expatcarbuyers/`} target="_blank" rel="noopener">
                                            <img src={`/images/${platform}.webp`} alt={platform} width={32} height={32} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-lg-0 mb-3">
                        <div className="footer-abt p-4">
                            <h6 className="mb-3 text-uppercase font-weight-bold">Keep in touch</h6>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-start">
                                    <img className="me-3 mr-3 mt-1" src="/front/images/map-marker-outline.svg" alt="map-marker" width={16} />
                                    <span className="text-light opacity-75">Near FAB Metrostation, <br /> Al Asmawi Building, Sheikh Zayed Road,<br /> office No. G17 - Dubai - United Arab Emirates</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <img className="me-3 mr-3" src="/front/images/phone.svg" alt="phone" width={16} />
                                    <span className="text-light opacity-75">+971 56 1774555</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <img className="me-3 mr-3" src="/front/images/email-outline.svg" alt="email outline" width={16} />
                                    <span className="text-light opacity-75">contact@expatcarbuyers.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container border-top border-secondary mt-4">
                    <div className="row py-4 m-0 footer-bottom">
                        <div 
                            className="col-md-6 text-center text-md-start mb-2 mb-md-0 copyright opacity-50"
                            suppressHydrationWarning
                        >
                            © Copyright {currentYear} expatcarbuyers
                        </div>

                        <div className="col-md-6 text-center text-md-end footer-links">
                            <Link href="/privacy-policy" className="text-light text-decoration-none mx-2 opacity-75">Privacy Policy</Link>|
                            <Link href="/terms-conditions" className="text-light text-decoration-none mx-2 opacity-75">Terms & Conditions</Link>|
                            <Link href="/contact" className="text-light text-decoration-none mx-2 opacity-75">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
