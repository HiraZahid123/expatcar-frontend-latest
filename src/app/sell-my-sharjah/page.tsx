import React from 'react';
import type { Metadata } from 'next';
import ValuationForm from '@/components/valuation-form/ValuationForm';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';

export const metadata: Metadata = {
    title: 'Sell Any Car in Sharjah | Sell Your Car Across Sharjah in 30 Minutes',
    description: 'Sell any car in Sharjah to Expat Car Buyers and get market competitive cash deal for your used car. Sell your car in just 30 minutes and get instant payment.',
};

export default function SharjahPage() {
    return (
        <main className="overflow-x-hidden">
            {/* ══════════════════════════════════════════════
                HERO SECTION (Exact Replica Style)
            ══════════════════════════════════════════════ */}
            <section className="landing-hero">
                <div className="landing-hero-blob" style={{ background: '#FFD0C9' }} />
                
                <div className="landing-hero-container">
                    {/* Left Side: Car Image & Text */}
                    <div className="landing-hero-content relative">
                        <div className="wow fadeInLeft" data-wow-delay="0.1s">
                            <span className="text-[#f24026] font-bold text-sm uppercase tracking-widest mb-4 block">
                                No. 1 Website for
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
                                Sell My Car in <br />
                                <span className="text-[#f24026]">Sharjah</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
                                Sell Any Car Across Sharjah in 30 Minutes. Simply fill out the form below to get started.
                            </p>
                        </div>
                        
                        <div className="relative mt-8 md:mt-0 wow zoomIn" data-wow-delay="0.3s">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f24026]/5 rounded-full blur-3xl -z-10" />
                            <img
                                src="/front/images/X5.webp" 
                                alt="Sell My Car Sharjah"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10"
                            />
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div className="landing-hero-form wow fadeInRight" data-wow-delay="0.2s">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Get a Free Valuation</h3>
                            <p className="text-sm text-gray-500">Takes less than 1 minute</p>
                        </div>
                        <ValuationForm />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                HOW DOES IT WORK
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 uppercase tracking-wider">How Does It Work?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: 'Schedule appointment', desc: 'Fill the online form and schedule a date and time.' },
                            { title: 'Bring your car', desc: 'Bring your car to our showroom on the scheduled date.' },
                            { title: 'Get no-obligation quote', desc: 'We will inspect your car and provide a fair quote.' },
                            { title: 'Sell your car', desc: 'If you are happy with the offer, sell your car to us!' }
                        ].map((step, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-16 h-16 bg-[#f24026]/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#f24026] group-hover:text-white transition-colors border border-[#f24026]/10">
                                    <span className="font-black text-xl">{idx + 1}</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                MAIN CONTENT SECTION
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-[#FCF5F2]">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="flex-1 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Sell Car in <span className="text-[#f24026]">Sharjah</span></h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Are you looking to sell your car in Sharjah? Expat Car Buyers can help make the process quick and hassle-free. As one of the leading car buyers in Sharjah, we offer a seamless and transparent process to help you sell your car.
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why should I choose Expat Car Buyers in Sharjah?</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Expat Car Buyers provides you with a hassle-free, safe, and secure platform to sell your car in Sharjah. Our team of experts understands the local market and has extensive knowledge of the used car industry.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Guaranteed purchase', 'Sell any car fast', 'Get paid within 30m', 'Finance settlement'].map(g => (
                                        <div key={g} className="flex items-center gap-3 font-bold text-gray-800 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#f24026]" /> {g}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-12">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-[#FFD0C9]">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Selling Method</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Comprehensive Valuation', desc: 'Once you bring your car to one of our showrooms, we will do a comprehensive valuation.' },
                                        { title: 'Ownership Transfer', desc: 'We will take care of all the ownership transfer documents. You just sign.' },
                                        { title: 'Finance Settlement', desc: 'If your car is under finance, we will be able to settle it in the best possible way.' },
                                        { title: 'Get paid in 30 minutes', desc: 'We ensure that you will be paid for the value of your car within just 30 minutes!' }
                                    ].map(p => (
                                        <div key={p.title}>
                                            <h5 className="font-bold text-[#f24026] text-sm mb-1">{p.title}</h5>
                                            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 italic">&ldquo;What people are saying in Sharjah?&rdquo;</h2>
                                <TestimonialCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                OWNERSHIP TRANSFER SECTION
            ══════════════════════════════════════════════ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">How do I transfer ownership in <span className="text-[#f24026]">Sharjah?</span></h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        To transfer ownership of your car to the new buyer, you would have to provide your Original Number Plate, Original Emirates ID for Seller, and a Photocopy for the Buyer. We handle the &lsquo;Hayaza&rsquo; certificate and all RTA procedures for you.
                    </p>
                </div>
            </section>
        </main>
    );
}
